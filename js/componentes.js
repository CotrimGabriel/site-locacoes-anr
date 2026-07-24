/* =====================================================================
   COMPONENTES & HELPERS
   Transforma os DADOS em HTML. Normalmente você não precisa editar aqui,
   exceto para adicionar um novo ícone de categoria (objeto ICONES abaixo).
   ===================================================================== */

/* ---------- ÍCONES (SVG inline, herdam a cor do texto) ----------
   Para criar uma categoria com ícone novo, adicione uma entrada aqui
   com o mesmo "id" usado em dados.js → icone: "meu-icone".            */
const ICONES = {
  concretagem: '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M5 21V8l4-4h6l4 4v13"/><path d="M9 21v-6h6v6"/><path d="M9 4v4M15 4v4"/></svg>',
  furacao:     '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7h11v6H3z"/><path d="M14 9h4l2 2-2 2h-4"/><path d="M6 13v5h4v-5"/><path d="M20 11h2"/></svg>',
  andaimes:    '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4v16M10 4v16M16 4v16M22 4v16"/><path d="M4 9h18M4 15h18"/></svg>',
  geradores:   '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 4 14h6l-1 8 9-12h-6z"/></svg>',
  ferramentas: '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4l-6 6 2 2 6-6a4 4 0 0 0 5.4-5.4l-2 2-2-2 2-2z"/></svg>',
  compactacao: '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="6" rx="1"/><path d="M9 10v4M15 10v4"/><rect x="6" y="14" width="12" height="6" rx="1"/></svg>',
  pintura:     '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="14" height="6" rx="1"/><path d="M17 6h3v5H10v3"/><path d="M9 14h2v7H9z"/></svg>',
  banheiro:    '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="3" width="12" height="18" rx="1.5"/><path d="M6 8h12"/><path d="M12 12v6"/><path d="M9 21h6"/></svg>',
  carga:       '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h4V9"/><path d="M7 21V13l6-3v11"/><rect x="13" y="13" width="6" height="8"/><path d="M19 15h2M19 19h2"/></svg>',
  canteiro:    '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="1"/><path d="M6 6v12M10 6v12M14 6v12M18 6v12"/></svg>',
  corte:       '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8"/><path d="M12 4v2M12 18v2M4 12h2M18 12h2M6.3 6.3l1.4 1.4M16.3 16.3l1.4 1.4M6.3 17.7l1.4-1.4M16.3 7.7l1.4-1.4"/></svg>',
  jardinagem:  '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 4 6 18"/><circle cx="20" cy="4" r="2"/><path d="M3 20c1-2 2-3 3-3s1 1 2 1 1-2 2-2"/></svg>',
  padrao:      '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>',
  busca:       '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>',
  relogio:     '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  whatsapp:    '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M.06 24l1.7-6.2a11.9 11.9 0 1 1 4.5 4.4L.06 24zM6.6 20.1l.37.22a9.9 9.9 0 1 0-3.34-3.32l.24.38-1 3.67 3.73-.95zM18 14.3c-.25-.13-1.47-.72-1.7-.8-.23-.09-.4-.13-.56.13-.17.25-.64.8-.79.97-.14.16-.29.18-.54.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.01-.39.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.13-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.42l-.48-.01c-.17 0-.43.06-.66.31-.23.25-.86.84-.86 2.05s.89 2.38 1.01 2.54c.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28z"/></svg>',
  email:       '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
  local:       '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7-5.7-7-11a7 7 0 0 1 14 0c0 5.3-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>',
  arrow:       '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  play:        '<svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>',
  chevronLeft: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>',
  chevronRight:'<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg>',
  vazio:       '<svg viewBox="0 0 24 24" width="56" height="56" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3M8 11h6"/></svg>'
};

function icone(nome) { return ICONES[nome] || ICONES.padrao; }

/* ---------- HELPERS ---------- */
function categoriaPorId(id) {
  return (window.CATEGORIAS || []).find(c => c.id === id);
}
function nomeCategoria(id) {
  const c = categoriaPorId(id);
  return c ? c.nome : "Equipamento";
}
function produtoPorId(id) {
  return (window.PRODUTOS || []).find(p => p.id === id);
}

/* ---------- VÍDEO (YouTube) ----------
   Aceita o ID do vídeo (ex.: "aqz-KE-bpKQ") ou a URL completa
   (youtu.be/..., youtube.com/watch?v=..., /embed/..., /shorts/...). */
function videoYouTubeId(v) {
  if (!v) return null;
  v = String(v).trim();
  const m = v.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/);
  if (m) return m[1];
  if (/^[\w-]{11}$/.test(v)) return v;
  return null;
}
function videoThumb(id) { return `https://img.youtube.com/vi/${id}/maxresdefault.jpg`; }
function videoEmbed(id) { return `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&mute=1&rel=0&playsinline=1`; }

/* ---------- CARROSSEL (desliza no mobile; grade normal no desktop) ----------
   Recebe o id (ou elemento) da grade. As setas devem estar dentro de um
   contêiner com a classe ".carousel" que envolve a grade. */
function configurarCarrossel(grid) {
  if (typeof grid === "string") grid = document.getElementById(grid);
  if (!grid) return;
  const carousel = grid.closest(".carousel");
  if (!carousel) return;
  const prev = carousel.querySelector(".carousel-arrow.prev");
  const next = carousel.querySelector(".carousel-arrow.next");
  if (!prev || !next) return;

  const passo = () => {
    const card = grid.querySelector(".product-card");
    return card ? card.getBoundingClientRect().width + 16 : grid.clientWidth * 0.85;
  };
  const atualizar = () => {
    const max = grid.scrollWidth - grid.clientWidth - 2;
    prev.disabled = grid.scrollLeft <= 2;
    next.disabled = grid.scrollLeft >= max;
  };
  prev.addEventListener("click", () => grid.scrollBy({ left: -passo(), behavior: "smooth" }));
  next.addEventListener("click", () => grid.scrollBy({ left: passo(), behavior: "smooth" }));
  grid.addEventListener("scroll", atualizar, { passive: true });
  window.addEventListener("resize", atualizar);
  atualizar();
}

/* Link de WhatsApp com mensagem pré-preenchida */
function linkWhatsApp(textoExtra) {
  const cfg = window.CONFIG;
  const msg = encodeURIComponent(cfg.mensagemOrcamento + (textoExtra ? " " + textoExtra : ""));
  return `https://wa.me/${cfg.whatsapp}?text=${msg}`;
}

/* Placeholder gerado em SVG (data URI) — usado quando a foto não existe.
   Mostra um fundo na cor da marca + o ícone da categoria. Nunca quebra. */
function placeholderImagem(produto) {
  const ico = icone(categoriaPorId(produto.categoria)?.icone || "padrao");
  // Aumenta o ícone e centraliza
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="600" height="450" viewBox="0 0 600 450">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#0f4061"/>
          <stop offset="1" stop-color="#002a44"/>
        </linearGradient>
      </defs>
      <rect width="600" height="450" fill="url(#g)"/>
      <circle cx="300" cy="195" r="70" fill="#fec700" opacity="0.18"/>
      <g transform="translate(276,171) scale(2.0)" stroke="#fec700" fill="none">
        ${ico.replace(/<svg[^>]*>/, "").replace(/<\/svg>/, "")}
      </g>
      <text x="300" y="320" font-family="Hanken Grotesk, sans-serif" font-size="26"
            font-weight="700" fill="#cde5ff" text-anchor="middle">${escapeHTML(produto.nome)}</text>
      <text x="300" y="352" font-family="Inter, sans-serif" font-size="15"
            fill="#83acd2" text-anchor="middle" letter-spacing="2">FOTO EM BREVE</text>
    </svg>`;
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}

function escapeHTML(s) {
  return String(s).replace(/[&<>"']/g, m => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[m]));
}

/* Atributo onerror que troca a imagem quebrada pelo placeholder */
function imgComFallback(produto, classe = "") {
  const ph = placeholderImagem(produto);
  return `<img src="${escapeHTML(produto.imagem || "")}" alt="${escapeHTML(produto.nome)}"
    class="${classe}" loading="lazy"
    onerror="this.onerror=null;this.src='${ph}'">`;
}

/* ---------- PREÇO ---------- */
function precoFormatado(produto) {
  if (!produto.preco) return "";
  const valor = Number(produto.preco).toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const sufixo = produto.periodo === "diaria" ? "diária" : "mês";
  return `R$ ${valor} <span class="price-period">/ ${sufixo}</span>`;
}

/* ---------- CARD DE PRODUTO ---------- */
function cardProduto(produto) {
  const specs = (produto.specs || []).map(s => `<span class="spec-tag">${escapeHTML(s)}</span>`).join("");
  const preco = produto.preco ? `<div class="price-tag">${precoFormatado(produto)}</div>` : "";
  const custoExtra = produto.custoExtra ? `<p class="extra-cost">+ ${escapeHTML(produto.custoExtra)}</p>` : "";
  return `
    <article class="product-card">
      <div class="product-media">
        <span class="product-chip"><span class="dot"></span>${escapeHTML(nomeCategoria(produto.categoria))}</span>
        ${imgComFallback(produto)}
      </div>
      <div class="product-body">
        <h3 class="product-title">${escapeHTML(produto.nome)}</h3>
        <p class="product-desc">${escapeHTML(produto.descricao || "")}</p>
        ${preco}
        ${custoExtra}
        ${specs ? `<div class="spec-tags">${specs}</div>` : ""}
        <a class="btn btn-primary btn-block" href="produto.html?id=${encodeURIComponent(produto.id)}">Ver Produto</a>
      </div>
    </article>`;
}

/* ---------- CARD DE CATEGORIA ---------- */
function cardCategoria(categoria) {
  return `
    <a class="cat-card" href="catalogo.html?categoria=${encodeURIComponent(categoria.id)}">
      <span class="cat-icon">${icone(categoria.icone)}</span>
      <span class="cat-name">${escapeHTML(categoria.nome)}</span>
    </a>`;
}

/* ---------- CABEÇALHO COMPARTILHADO ----------
   Injetado por JS para você editar o menu em um único lugar.
   "pagina" = qual link fica marcado como ativo. */
function montarCabecalho(pagina) {
  const cfg = window.CONFIG;
  const ativo = p => (p === pagina ? "active" : "");
  return `
  <header class="site-header">
    <div class="container">
      <a class="brand" href="index.html">${escapeHTML(cfg.nome)}</a>
      <button class="nav-toggle" aria-label="Abrir menu" onclick="document.getElementById('navMenu').classList.toggle('open')">
        <span></span><span></span><span></span>
      </button>
      <nav class="nav" id="navMenu">
        <a class="${ativo('inicio')}" href="index.html">Início</a>
        <a class="${ativo('catalogo')}" href="catalogo.html">Ferramentas</a>
        <a class="${ativo('quem-somos')}" href="index.html#quem-somos">Quem Somos</a>
        <a class="${ativo('contato')}" href="index.html#contato">Contato</a>
        <a class="btn btn-secondary" href="${linkWhatsApp()}" target="_blank" rel="noopener">${ICONES.whatsapp} Orçamento</a>
      </nav>
    </div>
  </header>`;
}

/* ---------- RODAPÉ COMPARTILHADO ---------- */
function montarRodape() {
  const cfg = window.CONFIG;
  return `
  <footer class="site-footer" id="contato">
    <div class="container footer-grid">
      <div class="footer-col">
        <div class="brand">${escapeHTML(cfg.nome)}</div>
        <p>${escapeHTML(cfg.slogan)}</p>
      </div>
      <div class="footer-col">
        <h4>Links</h4>
        <ul>
          <li><a href="index.html">Início</a></li>
          <li><a href="catalogo.html">Ferramentas</a></li>
          <li><a href="index.html#quem-somos">Quem Somos</a></li>
          <li><a href="index.html#contato">Contato</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contato</h4>
        <ul class="footer-contact">
          <li>${ICONES.whatsapp}<a href="${linkWhatsApp()}" target="_blank" rel="noopener">WhatsApp</a></li>
          <li>${ICONES.email}<a href="mailto:${escapeHTML(cfg.email)}">${escapeHTML(cfg.email)}</a></li>
          <li>${ICONES.local}<span>${escapeHTML(cfg.cidade)}</span></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Faça um Orçamento</h4>
        <p>Fale com um consultor e verifique a disponibilidade imediata para a sua obra.</p>
        <a class="btn btn-secondary" style="margin-top:14px" href="${linkWhatsApp()}" target="_blank" rel="noopener">
          ${ICONES.whatsapp} Falar no WhatsApp
        </a>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <span>© ${cfg.anoFundacao} ${escapeHTML(cfg.nome)}. Equipamentos de alta performance em ${escapeHTML(cfg.cidade)}.</span>
        <span><a href="#">Políticas de Privacidade</a> &nbsp;·&nbsp; <a href="#">Termos de Uso</a></span>
      </div>
    </div>
  </footer>
  <a class="whatsapp-fab" href="${linkWhatsApp()}" target="_blank" rel="noopener" aria-label="Falar no WhatsApp">${ICONES.whatsapp}</a>`;
}
