/* Página de produto: lê ?id=... da URL e monta o detalhe */
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("header").innerHTML = montarCabecalho("catalogo");
  document.getElementById("footer").innerHTML = montarRodape();

  const id = new URLSearchParams(location.search).get("id");
  const produto = produtoPorId(id);
  const alvo = document.getElementById("produtoConteudo");

  if (!produto) {
    alvo.innerHTML = `
      <div class="empty-state" style="padding:120px 20px">
        ${ICONES.vazio}
        <h2 class="headline-md text-primary" style="margin:8px 0">Produto não encontrado</h2>
        <p>O equipamento que você procura não está disponível ou o link está incorreto.</p>
        <a class="btn btn-primary" style="margin-top:24px" href="catalogo.html">Voltar ao catálogo</a>
      </div>`;
    return;
  }

  document.title = `${produto.nome} — ${window.CONFIG.nome}`;

  const vidId = videoYouTubeId(produto.video);

  const specs = (produto.specs || []).map(s => `<span class="spec-tag">${escapeHTML(s)}</span>`).join("");
  const ficha = produto.ficha
    ? `<table class="spec-table"><tbody>${
        Object.entries(produto.ficha).map(([k, v]) =>
          `<tr><th>${escapeHTML(k)}</th><td>${escapeHTML(v)}</td></tr>`).join("")
      }</tbody></table>`
    : "";

  const status = produto.disponivel
    ? `<span class="status-chip available"><span class="dot"></span>Disponível para locação</span>`
    : `<span class="status-chip unavailable"><span class="dot"></span>Sob consulta</span>`;

  const preco = produto.preco ? `<div class="price-tag price-tag-lg">${precoFormatado(produto)}</div>` : "";
  const custoExtra = produto.custoExtra ? `<p class="extra-cost">+ ${escapeHTML(produto.custoExtra)}</p>` : "";

  alvo.innerHTML = `
    <nav class="breadcrumb">
      <a href="index.html">Início</a> ${ICONES.arrow}
      <a href="catalogo.html">Catálogo</a> ${ICONES.arrow}
      <span>${escapeHTML(produto.nome)}</span>
    </nav>

    <div class="product-detail">
      <div class="detail-gallery">
        <div class="detail-main-img">
          ${imgComFallback(produto)}
          ${vidId ? `<a class="video-badge" href="#videoDemo">
            <span class="vb-ico"><svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></span>
            Vídeo Demonstrativo
          </a>` : ""}
        </div>
      </div>

      <div class="detail-info">
        <span class="product-chip"><span class="dot"></span>${escapeHTML(nomeCategoria(produto.categoria))}</span>
        <h1>${escapeHTML(produto.nome)}</h1>
        <p>${escapeHTML(produto.descricaoLonga || produto.descricao || "")}</p>
        ${status}
        ${preco}
        ${custoExtra}

        ${specs ? `<div class="spec-tags" style="margin-top:20px">${specs}</div>` : ""}

        <div class="detail-actions">
          <a class="btn btn-secondary" href="${linkWhatsApp("Equipamento de interesse: " + produto.nome + ".")}" target="_blank" rel="noopener">
            ${ICONES.whatsapp} Solicitar orçamento
          </a>
          <a class="btn btn-ghost" href="catalogo.html">Ver outros equipamentos</a>
        </div>

        ${ficha ? `<h2 class="detail-block-title">Especificações técnicas</h2>${ficha}` : ""}
      </div>
    </div>`;

  montarVideo(produto, vidId);
  montarRelacionados(produto);
});

/* Monta a seção "Veja como Funciona" e configura o autoplay ao rolar */
function montarVideo(produto, vidId) {
  const wrap = document.getElementById("videoDemo");
  if (!wrap) return;
  if (!vidId) { wrap.hidden = true; wrap.innerHTML = ""; return; }
  wrap.hidden = false;

  const thumb = videoThumb(vidId);
  wrap.innerHTML = `
    <h2 class="vc-title">Veja como Funciona</h2>
    <p class="vc-sub">Confira os detalhes técnicos e a praticidade de operação do equipamento em campo.</p>
    <div class="video-frame" id="videoFrame" data-id="${vidId}">
      <div class="video-facade" id="videoFacade" style="background-image:url('${thumb}')">
        <button class="video-play-btn" aria-label="Reproduzir vídeo">${ICONES.play}</button>
      </div>
    </div>`;

  // Se a miniatura em alta resolução não existir, cai para a versão padrão
  const facade = document.getElementById("videoFacade");
  const teste = new Image();
  teste.onerror = () => { facade.style.backgroundImage = `url('https://img.youtube.com/vi/${vidId}/hqdefault.jpg')`; };
  teste.src = thumb;

  const frame = document.getElementById("videoFrame");

  // Autoplay quando a seção entra na tela
  if ("IntersectionObserver" in window) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { ativarVideo(frame); obs.disconnect(); } });
    }, { threshold: 0.5 });
    obs.observe(frame);
  }
  // Também ativa ao clicar
  facade.addEventListener("click", () => ativarVideo(frame));
}

function ativarVideo(frame) {
  if (!frame || frame.dataset.loaded) return;
  frame.dataset.loaded = "1";
  frame.innerHTML = `<iframe src="${videoEmbed(frame.dataset.id)}"
    title="Vídeo demonstrativo" loading="lazy"
    referrerpolicy="strict-origin-when-cross-origin"
    allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
    allowfullscreen></iframe>`;
}

/* Seção "Produtos Relacionados": mesma categoria primeiro, completa com outros */
function montarRelacionados(produto) {
  const wrap = document.getElementById("relacionados");
  if (!wrap) return;
  const QTD = 4;

  const todos = (window.PRODUTOS || []).filter(p => p.id !== produto.id);
  const mesmaCat = todos.filter(p => p.categoria === produto.categoria);
  const outros = todos.filter(p => p.categoria !== produto.categoria);
  const relacionados = [...mesmaCat, ...outros].slice(0, QTD);

  if (!relacionados.length) { wrap.hidden = true; wrap.innerHTML = ""; return; }
  wrap.hidden = false;
  wrap.innerHTML = `
    <div class="flex-between" style="margin-bottom:32px; gap:16px; flex-wrap:wrap">
      <div>
        <h2 class="section-title">Produtos Relacionados</h2>
        <p class="section-sub" style="margin-bottom:0">Complete sua obra com estes equipamentos complementares.</p>
      </div>
      <a class="link-arrow" href="catalogo.html">Ver catálogo completo <span style="display:inline-flex">→</span></a>
    </div>
    <div class="carousel">
      <button class="carousel-arrow prev" aria-label="Anterior">${ICONES.chevronLeft}</button>
      <div class="related-grid carousel-track" id="relGrid">${relacionados.map(cardProduto).join("")}</div>
      <button class="carousel-arrow next" aria-label="Próximo">${ICONES.chevronRight}</button>
    </div>`;

  configurarCarrossel("relGrid");
}
