# ANR Locações

Site institucional e catálogo da **ANR Locações**, empresa de locação de ferramentas e equipamentos para obras em Brasília-DF.

🔗 Repositório: https://github.com/CotrimGabriel/site-locacoes-anr

## Sobre

Site estático (**HTML + CSS + JavaScript puro**, sem framework e sem build) com design "Industrial Premium". O conteúdo é orientado a dados: produtos e categorias vivem em `js/dados.js`, e páginas como o catálogo, os filtros, a busca e a página de detalhe do produto são geradas automaticamente a partir desses dados.

## Estrutura

```
├── index.html          → Página inicial (hero, categorias, destaques, quem somos)
├── catalogo.html        → Catálogo com busca, filtros e paginação
├── produto.html          → Página de detalhe do produto (?id=...)
├── css/
│   └── estilo.css       → Design system (cores, fontes, componentes)
├── js/
│   ├── config.js         → Dados de contato (WhatsApp, e-mail, cidade)
│   ├── dados.js           → Produtos e categorias
│   ├── componentes.js     → Motor que transforma dados em HTML
│   ├── index.js           → Lógica da home
│   ├── catalogo.js        → Busca, filtro e paginação
│   └── produto.js         → Monta a página de detalhe
└── img/                  → Fotos dos produtos e do site
```

## Como rodar localmente

Como o site usa arquivos `.js` separados, alguns navegadores bloqueiam o carregamento ao abrir o `index.html` direto com duplo-clique. Use um servidor local simples:

```bash
python -m http.server 8000
```

Depois abra `http://localhost:8000` no navegador. Também funciona com a extensão **Live Server** do VS Code.

## Publicando

Basta hospedar a pasta do projeto em qualquer serviço de hospedagem estática (GitHub Pages, Netlify, Vercel, Hostinger etc.) — não precisa de servidor especial nem de build.

## Editando conteúdo

Guia completo (adicionar produto, adicionar categoria, configurar WhatsApp/e-mail, vídeo demonstrativo, ajustar cores) está em [`COMO-USAR.md`](COMO-USAR.md).

## Stack

- HTML5, CSS3, JavaScript (vanilla, sem dependências)
- Sem build step — o que está no repositório é o que roda no navegador

## Licença

Projeto privado da ANR Locações. Todos os direitos reservados.
