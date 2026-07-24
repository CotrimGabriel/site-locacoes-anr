/* Página inicial: monta cabeçalho/rodapé e preenche categorias + destaques */
document.addEventListener("DOMContentLoaded", () => {
  // Cabeçalho e rodapé compartilhados
  document.getElementById("header").innerHTML = montarCabecalho("inicio");
  document.getElementById("footer").innerHTML = montarRodape();

  // Links de orçamento do hero
  document.querySelectorAll("[data-whatsapp]").forEach(a => a.href = linkWhatsApp());

  // Grade de categorias
  const catGrid = document.getElementById("categoriasGrid");
  if (catGrid) catGrid.innerHTML = (window.CATEGORIAS || []).map(cardCategoria).join("");

  // Produtos em destaque
  const destaques = (window.PRODUTOS || []).filter(p => p.destaque).slice(0, 3);
  const grid = document.getElementById("destaquesGrid");
  if (grid) {
    grid.innerHTML = destaques.length
      ? destaques.map(cardProduto).join("")
      : `<p class="text-muted">Nenhum produto em destaque no momento.</p>`;
    configurarCarrossel("destaquesGrid");
  }
});
