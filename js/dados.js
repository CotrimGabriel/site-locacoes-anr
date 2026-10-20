/* =====================================================================
   📦 DADOS DO SITE  —  É AQUI QUE VOCÊ ADICIONA PRODUTOS E CATEGORIAS
   =====================================================================

   ┌─ COMO ADICIONAR UMA CATEGORIA ────────────────────────────────────┐
   │ Adicione um objeto na lista CATEGORIAS abaixo:                     │
   │   { id: "pintura", nome: "Pintura", icone: "pintura" }            │
   │ • id    = identificador único, sem espaços/acentos (slug)          │
   │ • nome  = como aparece na tela                                     │
   │ • icone = um dos ícones disponíveis (veja js/componentes.js →      │
   │           objeto ICONES). Se não existir, mostra um padrão.        │
   └────────────────────────────────────────────────────────────────────┘

   ┌─ COMO ADICIONAR UM PRODUTO ───────────────────────────────────────┐
   │ Copie um bloco da lista PRODUTOS, cole e troque os valores.        │
   │ Campos obrigatórios: id, nome, categoria, descricao.               │
   │ • id        = slug único (vira o link: produto.html?id=SEU-ID)     │
   │ • categoria = o "id" de uma categoria já existente acima           │
   │ • imagem    = caminho da foto em img/  (ex.: "img/martelete.jpg")  │
   │               Se a foto não existir, aparece um placeholder bonito │
   │               com o ícone da categoria — nada quebra.              │
   │ • destaque  = true  → aparece na seção "Em Destaque" da home        │
   │ • disponivel= true/false → mostra "Disponível" ou "Sob consulta"    │
   │ • video     = (opcional) ID ou link de um vídeo do YouTube. Quando  │
   │               preenchido, a página do produto ganha a seção "Veja   │
   │               como Funciona" (autoplay ao rolar) e um selo "Vídeo   │
   │               Demonstrativo" na foto. Sem ele, nada aparece.        │
   │ • specs     = etiquetas curtas mostradas no card                   │
   │ • ficha     = tabela de especificações na página do produto        │
   │ • preco     = valor numérico da locação (ex.: 400)                 │
   │ • periodo   = "diaria" ou "mensal" — define o texto exibido junto  │
   │               ao preço ("/ diária" ou "/ mês")                     │
   │ • custoExtra= (opcional) texto de custo adicional, ex.: "R$ 300    │
   │               operador + R$ 100 gasolina". Some se preenchido.     │
   └────────────────────────────────────────────────────────────────────┘
*/

window.CATEGORIAS = [
  { id: "concretagem", nome: "Concretagem", icone: "concretagem" },
  { id: "furacao",     nome: "Furação",     icone: "furacao" },
  { id: "andaimes",    nome: "Andaimes",    icone: "andaimes" },
  { id: "ferramentas", nome: "Ferramentas", icone: "ferramentas" },
  { id: "pintura",     nome: "Pintura",     icone: "pintura" },
  { id: "banheiro-quimico", nome: "Banheiro Químico", icone: "banheiro" },
  { id: "movimentacao-carga", nome: "Movimentação de Carga", icone: "carga" },
  { id: "canteiro",    nome: "Canteiro de Obras", icone: "canteiro" },
  { id: "corte",       nome: "Corte",       icone: "corte" },
  { id: "jardinagem",  nome: "Jardinagem",  icone: "jardinagem" }
];

window.PRODUTOS = [
  {
    id: "betoneira-400l",
    nome: "Betoneira Rental 400L",
    categoria: "concretagem",
    descricao: "Betoneira resistente às intempéries, com componentes em ferro fundido FC200 de alta resistência.",
    imagem: "img/betoneira-400l.png",
    video: "aqz-KE-bpKQ",            // ID do vídeo no YouTube (exemplo) — troque pelo seu
    destaque: false,
    disponivel: true,
    specs: ["Volume total: 400 L", "Capacidade de mistura: 310 L", "Produção: 4,65 m³/h"],
    descricaoLonga: "Betoneira resistente às intempéries, com componentes em ferro fundido FC200 de alta resistência. Redutor composto por engrenagem com dente interno de aço, cremalheira segmentada em 6 partes, volante com sistema de redução de esforço e polia com 5 raios.",
    ficha: {
      "Volume total": "400 L",
      "Capacidade de mistura": "310 L",
      "Rendimento final da mistura": "270 L",
      "Ciclos por hora": "15 ciclos/hora",
      "Produção horária": "4,65 m³/h",
      "Rotação do tambor": "30 rpm - 60 Hz",
      "Correia": "Em ‘V’ A-48",
      "Rodas": "Maciça 68 mm",
      "Proteção da cremalheira": "Polipropileno",
      "Proteção elétrica": "Sim",
      "Garantia": "6 meses"
    },
    preco: 300,
    periodo: "mensal"
  },
  {
    id: "andaime-fachadeiro-110x220",
    nome: "Andaime Fachadeiro 110x220 cm",
    categoria: "andaimes",
    descricao: "Estrutura modular segura e de montagem rápida.",
    imagem: "img/andaime-fachadeiro.webp",
    video: "aqz-KE-bpKQ",            // ID do vídeo no YouTube (exemplo) — troque pelo seu
    destaque: false,
    disponivel: true,
    specs: ["Fachadeiro", "110 x 220 cm"],
    descricaoLonga: "Andaime fachadeiro com módulo de 110 x 220 cm, estrutura modular de montagem rápida e segura, ideal para fachadas e trabalhos em altura.",
    ficha: { "Tipo": "Fachadeiro", "Largura": "110 cm", "Altura": "220 cm" }
  },
  {
    id: "esmerilhadeira-angular-4-1-2-makita",
    nome: "Esmerilhadeira Angular 4.1/2\" 600W Makita M0901B",
    categoria: "ferramentas",
    descricao: "Compacta e prática para cortes e desbastes em metal e alvenaria.",
    imagem: "img/esmerilhadeira-makita-m0901b.webp",
    destaque: false,
    disponivel: true,
    specs: ["127V / 220V", "600W", "Disco 115mm"],
    descricaoLonga: "Esmerilhadeira angular Makita M0901B de 4.1/2 polegadas e 600W, adequada para discos de 115 mm. Acompanha interruptor tipo tecla, ideal para cortes, desbastes e acabamentos em obras e serralheria.",
    ficha: { "Marca": "Makita", "Modelo": "M0901B", "Potência": "600 W", "Tensão": "127V ou 220V", "Diâmetro do disco": "115 mm (4.1/2\")", "Interruptor": "Tecla", "Cor": "Azul-turquesa" }
  },
  {
    id: "banheiro-quimico",
    nome: "Banheiro Químico",
    categoria: "banheiro-quimico",
    descricao: "Solução prática e higiênica para uso individual em obras, eventos e áreas externas.",
    imagem: "img/banheiro-quimico.jpg",
    destaque: false,
    disponivel: true,
    specs: ["Polietileno", "227 Litros", "Ventilado"],
    descricaoLonga: "Banheiro químico portátil em polietileno de alta resistência, com vaso sanitário, mictório e caixa de dejetos com capacidade para até 227 litros. Ventilação natural, piso antiderrapante e trinco interno/externo para maior praticidade e conforto no dia a dia da obra.",
    ficha: { "Material": "Polietileno de alta densidade", "Capacidade da caixa": "227 L", "Dimensões aprox.": "1,10 x 1,10 x 2,30 m", "Manutenção": "Higienização periódica inclusa" },
    preco: 400,
    periodo: "mensal"
  },
  {
    id: "bobcat-763",
    nome: "Bob Cat 763",
    categoria: "movimentacao-carga",
    descricao: "Agilidade e força para movimentação de terra, entulho e materiais em obras.",
    imagem: "img/bobcat-763.jpg",
    destaque: true,
    disponivel: true,
    video: "https://www.youtube.com/watch?v=baKzmOEP9D8",
    specs: ["Diesel", "≈49 hp", "Alta Manobrabilidade"],
    descricaoLonga: "Minicarregadeira Bobcat 763, equipamento compacto e versátil para movimentação de terra, entulho, brita e outros materiais em canteiros de obra. Alta manobrabilidade em espaços reduzidos e acoplamento para diversos implementos, como caçamba e garfo paleteiro.",
    ficha: { "Motor": "Diesel", "Potência": "≈49 hp", "Capacidade da caçamba": "≈700 kg", "Peso operacional": "≈2.700 kg" },
    preco: 1200,
    periodo: "diaria",
    custoExtra: "R$ 300 operador + R$ 100 gasolina"
  },
  {
    id: "conteiner",
    nome: "Contêiner",
    categoria: "canteiro",
    descricao: "Espaço seguro para escritório, almoxarifado ou vestiário na obra.",
    imagem: "img/conteiner.jpg",
    destaque: false,
    disponivel: true,
    specs: ["Metálico", "Piso Reforçado", "Fechadura"],
    descricaoLonga: "Contêiner metálico para uso como escritório de obra, almoxarifado ou vestiário. Estrutura resistente, isolamento térmico básico, porta com fechadura e piso reforçado — praticidade para organizar o canteiro de obras.",
    ficha: { "Material": "Aço galvanizado", "Dimensões aprox.": "6,00 x 2,30 x 2,50 m", "Uso": "Escritório, almoxarifado ou vestiário" },
    preco: 600,
    periodo: "mensal"
  },
  {
    id: "empilhadeira",
    nome: "Empilhadeira",
    categoria: "movimentacao-carga",
    descricao: "Elevação e movimentação segura de cargas pesadas na obra ou no armazém.",
    imagem: "img/empilhadeira.jpg",
    destaque: true,
    disponivel: true,
    specs: ["Combustão", "≈2,5 ton", "Torre Elevatória"],
    descricaoLonga: "Empilhadeira a combustão para movimentação e elevação de cargas paletizadas, materiais de construção e insumos pesados. Ideal para carga/descarga de caminhões e organização de pátio ou almoxarifado.",
    ficha: { "Capacidade": "≈2.500 kg", "Elevação máx.": "≈3 m", "Combustível": "GLP/Diesel" },
    preco: 1000,
    periodo: "diaria",
    custoExtra: "R$ 800 operador"
  },
  {
    id: "empilhadeira-manual",
    nome: "Empilhadeira manual",
    categoria: "movimentacao-carga",
    descricao: "Movimentação manual e prática de paletes em depósitos e canteiros.",
    imagem: "img/empilhadeira-manual.jpg",
    destaque: false,
    disponivel: true,
    specs: ["Manual", "≈1.000 kg", "Rodízios"],
    descricaoLonga: "Empilhadeira manual (paleteira) para deslocar e organizar paletes em pequenos espaços, sem necessidade de combustível ou energia elétrica. Ideal para apoio em cargas e descargas do dia a dia.",
    ficha: { "Capacidade": "≈1.000 kg", "Acionamento": "Hidráulico manual", "Uso": "Movimentação de paletes" },
    preco: 200,
    periodo: "diaria"
  },
  {
    id: "maquina-cortar-parede",
    nome: "Máquina de cortar parede",
    categoria: "corte",
    descricao: "Abertura precisa de rasgos em paredes para tubulações elétricas e hidráulicas.",
    imagem: "img/maquina-cortar-parede.jpg",
    destaque: false,
    disponivel: true,
    specs: ["220V", "Discos Diamantados", "Profundidade Ajustável"],
    descricaoLonga: "Máquina de cortar parede (rasgadeira) com discos diamantados duplos, indicada para abrir rasgos precisos em alvenaria para passagem de fiação elétrica e tubulações hidráulicas, com menos poeira e mais produtividade.",
    ficha: { "Tensão": "220V", "Discos": "Diamantados duplos", "Profundidade de corte": "Ajustável" },
    preco: 250,
    periodo: "diaria"
  },
  {
    id: "martelete-rompedor-sds-max",
    nome: "Martelete Rompedor 1510W HM1203C Makita",
    categoria: "furacao",
    descricao: "Mais força para demolições rápidas com ergonomia avançada.",
    imagem: "img/martelete-makita-hm1203c.webp",
    video: "aqz-KE-bpKQ",            // ID do vídeo no YouTube (exemplo) — troque pelo seu
    destaque: true,
    disponivel: true,
    specs: ["220V", "1510W", "10kg"],
    descricaoLonga: "Martelete rompedor Makita HM1203C de 1510W, ideal para demolição de concreto, abertura de valas e remoção de revestimentos. Equipamento exclusivamente rompedor: não possui rotação (não gira a broca).",
    ficha: { "Marca": "Makita", "Modelo": "HM1203C", "Potência": "1510 W", "Peso": "10 kg", "Alimentação": "Elétrica 220 - 240V", "Rotação": "Não possui (apenas rompedor)" }
  },
  {
    id: "maquina-pintura",
    nome: "Máquina de pintura",
    categoria: "pintura",
    descricao: "Aplicação rápida e uniforme de tinta em grandes áreas.",
    imagem: "img/maquina-pintura.jpg",
    destaque: false,
    disponivel: true,
    specs: ["Airless", "Alta Pressão", "Alto Rendimento"],
    descricaoLonga: "Máquina de pintura airless para aplicação rápida e uniforme de tinta em paredes, muros e estruturas de grande metragem, reduzindo tempo de obra e garantindo acabamento homogêneo.",
    ficha: { "Tecnologia": "Airless (alta pressão)", "Uso": "Pintura de paredes e estruturas", "Indicação": "Grandes áreas" },
    preco: 500,
    periodo: "diaria"
  },
  {
    id: "rocadeira",
    nome: "Roçadeira",
    categoria: "jardinagem",
    descricao: "Corte de grama e vegetação em terrenos e áreas externas da obra.",
    imagem: "img/rocadeira.jpg",
    destaque: false,
    disponivel: true,
    specs: ["Combustão", "2 Tempos", "Lâmina/Fio"],
    descricaoLonga: "Roçadeira a combustão para limpeza e corte de grama, mato e vegetação em terrenos, canteiros e áreas externas antes e durante a obra. Leve, portátil e de fácil operação.",
    ficha: { "Motor": "2 Tempos - Gasolina", "Uso": "Corte de grama e vegetação", "Acessório": "Lâmina ou fio de nylon" },
    preco: 100,
    periodo: "diaria"
  }
];
