# ANR Locações — Site funcional

Site estático (HTML + CSS + JavaScript puro, **sem framework e sem build**) com a
estética "Industrial Premium" do seu projeto do Google Stitch preservada 100%.

Tudo é **orientado a dados**: você adiciona produtos e categorias editando um único
arquivo (`js/dados.js`) e o site se atualiza sozinho — cards, busca, filtros,
paginação e a página de detalhe são gerados automaticamente.

---

## 📁 Estrutura

```
site/
├── index.html          → Página inicial (hero, categorias, destaques, quem somos)
├── catalogo.html       → Catálogo com busca, filtros e paginação
├── produto.html        → Página de detalhe (abre com ?id=...)
├── css/
│   └── estilo.css      → Todo o design system (cores, fontes, componentes)
├── js/
│   ├── config.js       → ⚙️  Dados de contato (WhatsApp, e-mail, cidade)
│   ├── dados.js        → 📦 PRODUTOS e CATEGORIAS  ← você edita AQUI
│   ├── componentes.js  → Motor que transforma dados em HTML (ícones, cards)
│   ├── index.js        → Lógica da home
│   ├── catalogo.js     → Busca, filtro e paginação
│   └── produto.js      → Monta a página de detalhe
└── img/                → Fotos dos produtos e do site
```

---

## 🚀 Como ver o site

Como o site usa arquivos `.js` separados, alguns navegadores bloqueiam isso ao abrir
direto com duplo-clique. O jeito certo de testar localmente é com um servidor simples:

**Opção 1 — Python (já vem na maioria dos PCs):**
```
cd site
python -m http.server 8000
```
Depois abra `http://localhost:8000` no navegador.

**Opção 2 — Extensão "Live Server" do VS Code** (clique direito no `index.html` →
"Open with Live Server").

Para publicar de verdade, basta subir a pasta `site/` inteira em qualquer hospedagem
(Hostinger, Vercel, Netlify, GitHub Pages etc.). Não precisa de servidor especial.

---

## ➕ Como adicionar um PRODUTO

Abra `js/dados.js`, copie um bloco existente dentro de `window.PRODUTOS` e troque os
valores:

```js
{
  id: "lixadeira-orbital",            // identificador único, sem espaços/acentos
  nome: "Lixadeira Orbital 5\"",
  categoria: "ferramentas",            // tem que ser o "id" de uma categoria existente
  descricao: "Acabamento fino e uniforme em madeira e massa.",
  imagem: "img/lixadeira-orbital.jpg", // salve a foto com esse nome na pasta img/
  destaque: false,                     // true = aparece na home
  disponivel: true,                    // true = "Disponível" | false = "Sob consulta"
  video: "aqz-KE-bpKQ",                // (opcional) ID ou link de vídeo do YouTube
  specs: ["220V", "300W", "1.4kg"],    // etiquetas curtas no card
  descricaoLonga: "Texto completo que aparece na página do produto...",
  ficha: {                             // tabela de especificações na página de detalhe
    "Tensão": "220V",
    "Potência": "300W",
    "Peso": "1,4 kg"
  }
}
```

Pronto. O produto já aparece no catálogo, na busca, no filtro da categoria e tem sua
própria página em `produto.html?id=lixadeira-orbital`.

> 💡 **Foto faltando?** Sem problema. Enquanto você não colocar a imagem na pasta `img/`,
> o site mostra um placeholder elegante com o ícone da categoria. Nada quebra.

---

## ➕ Como adicionar uma CATEGORIA

No mesmo `js/dados.js`, adicione um item em `window.CATEGORIAS`:

```js
{ id: "solda", nome: "Solda", icone: "ferramentas" }
```

- `id`    = identificador único (sem espaços/acentos)
- `nome`  = nome exibido na tela
- `icone` = um dos ícones disponíveis (lista abaixo). Se usar um nome que não existe,
  aparece um ícone padrão.

A categoria nova já entra automaticamente na home e nos filtros do catálogo.

**Ícones disponíveis** (em `js/componentes.js`, objeto `ICONES`):
`concretagem`, `furacao`, `andaimes`, `geradores`, `ferramentas`, `compactacao`, `pintura`.

Quer um ícone novo? Adicione um SVG no objeto `ICONES` com um nome e use esse nome no
campo `icone` da categoria.

---

## 🎬 Vídeo demonstrativo do produto

Preencha o campo `video` de um produto em `js/dados.js` com o **ID** do vídeo do
YouTube (a parte depois de `v=`) ou o link completo. Exemplos que funcionam:

```js
video: "aqz-KE-bpKQ"
video: "https://www.youtube.com/watch?v=aqz-KE-bpKQ"
video: "https://youtu.be/aqz-KE-bpKQ"
```

Com isso, a página daquele produto ganha automaticamente:
- a seção **"Veja como Funciona"** com o vídeo;
- um selo **"Vídeo Demonstrativo"** no canto da foto, que rola a página até o vídeo.

O vídeo **começa a tocar sozinho** quando o visitante rola a tela até ele. Por
exigência dos navegadores, o autoplay só funciona **com o som mudo** — o visitante
ativa o áudio com um clique. (Os produtos "Martelete" e "Betoneira" já vêm com um
vídeo de exemplo para você ver funcionando; é só trocar pelo seu.)

---

## ⚙️ Configurar contato (WhatsApp, e-mail)

Edite `js/config.js`:

```js
whatsapp: "5561999999999",   // só números: 55 + DDD + telefone
email: "contato@anrlocacoes.com",
cidade: "Brasília - DF",
```

Todos os botões "Orçamento" e "Solicitar orçamento" abrem o WhatsApp com uma mensagem
pronta — e, na página do produto, o nome do equipamento já vai incluído na mensagem.

---

## 🎨 Ajustar a aparência

Cores, fontes e espaçamentos estão centralizados no topo de `css/estilo.css`, na seção
`:root`. Por exemplo, para mudar o azul petróleo principal, altere `--primary`. Todo o
site acompanha a mudança.

---

## ❓ Observações

- **Paginação:** o catálogo mostra 6 produtos por página (ajustável em `js/catalogo.js`,
  variável `POR_PAGINA`). Com poucos produtos ela some sozinha; conforme você cadastra
  mais, as páginas aparecem automaticamente.
- A página de detalhe do produto não veio no export do Stitch (o arquivo de imagem dela
  estava corrompido), então ela foi desenhada do zero seguindo o mesmo design system.
