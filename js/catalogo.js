/* Catálogo: busca por texto + filtro por categoria + paginação */
(function () {
  const POR_PAGINA = 6;     // quantos produtos por página
  let termo = "";
  let categoriaAtiva = "todos";
  let pagina = 1;

  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("header").innerHTML = montarCabecalho("catalogo");
    document.getElementById("footer").innerHTML = montarRodape();

    // CTA "falar com consultor"
    const cta = document.getElementById("ctaConsultor");
    if (cta) cta.href = linkWhatsApp();

    // Pré-seleciona categoria se veio pela URL (?categoria=...)
    const params = new URLSearchParams(location.search);
    if (params.get("categoria")) categoriaAtiva = params.get("categoria");

    montarFiltros();
    ligarBusca();
    renderizar();
  });

  /* Chips de filtro: "Todos" + cada categoria */
  function montarFiltros() {
    const wrap = document.getElementById("filterChips");
    const chips = [{ id: "todos", nome: "Todos" }, ...(window.CATEGORIAS || [])];
    wrap.innerHTML = chips.map(c =>
      `<button class="chip ${c.id === categoriaAtiva ? "active" : ""}" data-cat="${c.id}">${c.nome}</button>`
    ).join("");

    wrap.querySelectorAll(".chip").forEach(chip => {
      chip.addEventListener("click", () => {
        categoriaAtiva = chip.dataset.cat;
        pagina = 1;
        wrap.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
        chip.classList.add("active");
        renderizar();
      });
    });
  }

  function ligarBusca() {
    const input = document.getElementById("searchInput");
    const btn = document.getElementById("searchBtn");
    const aplicar = () => { termo = input.value.trim().toLowerCase(); pagina = 1; renderizar(); };
    input.addEventListener("input", aplicar);
    if (btn) btn.addEventListener("click", aplicar);
  }

  /* Aplica filtros e devolve a lista resultante */
  function filtrar() {
    return (window.PRODUTOS || []).filter(p => {
      const okCat = categoriaAtiva === "todos" || p.categoria === categoriaAtiva;
      const alvo = (p.nome + " " + (p.descricao || "") + " " + (p.specs || []).join(" ")).toLowerCase();
      const okTermo = !termo || alvo.includes(termo);
      return okCat && okTermo;
    });
  }

  function renderizar() {
    const lista = filtrar();
    const total = lista.length;
    const totalPaginas = Math.max(1, Math.ceil(total / POR_PAGINA));
    if (pagina > totalPaginas) pagina = totalPaginas;

    const inicio = (pagina - 1) * POR_PAGINA;
    const visiveis = lista.slice(inicio, inicio + POR_PAGINA);

    // Contador
    const cont = document.getElementById("resultCount");
    cont.innerHTML = total
      ? `Mostrando <b>${visiveis.length}</b> de <b>${total}</b> resultado${total > 1 ? "s" : ""}`
      : "";

    // Grade ou estado vazio
    const grid = document.getElementById("catalogGrid");
    if (total === 0) {
      grid.classList.remove("product-grid");
      grid.innerHTML = `
        <div class="empty-state">
          ${ICONES.vazio}
          <p>Nenhum equipamento encontrado para a sua busca.</p>
          <p class="text-muted" style="margin-top:8px">Tente outro termo ou fale com um consultor.</p>
        </div>`;
    } else {
      grid.classList.add("product-grid");
      grid.innerHTML = visiveis.map(cardProduto).join("");
    }

    montarPaginacao(totalPaginas);
  }

  function montarPaginacao(totalPaginas) {
    const nav = document.getElementById("pagination");
    if (totalPaginas <= 1) { nav.innerHTML = ""; return; }

    let html = `<button ${pagina === 1 ? "disabled" : ""} data-pg="${pagina - 1}" aria-label="Anterior">‹</button>`;
    for (let i = 1; i <= totalPaginas; i++) {
      html += `<button class="${i === pagina ? "active" : ""}" data-pg="${i}">${i}</button>`;
    }
    html += `<button ${pagina === totalPaginas ? "disabled" : ""} data-pg="${pagina + 1}" aria-label="Próxima">›</button>`;
    nav.innerHTML = html;

    nav.querySelectorAll("button[data-pg]").forEach(b => {
      b.addEventListener("click", () => {
        if (b.disabled) return;
        pagina = parseInt(b.dataset.pg, 10);
        renderizar();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    });
  }
})();
