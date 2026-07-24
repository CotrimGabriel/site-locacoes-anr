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
    nome: "Betoneira 400L",
    categoria: "concretagem",
    descricao: "Rendimento constante para concretagem e argamassa em obras de médio porte.",
    imagem: "img/betoneira-400l.jpg",
    destaque: false,
    disponivel: true,
    specs: ["Monofásica", "2cv", "400 Litros"],
    descricaoLonga: "Betoneira de 400 litros para preparo contínuo de concreto e argamassa. Tambor reforçado, motor monofásico de baixo consumo e operação simples, ideal para obras residenciais e comerciais de médio porte.",
    ficha: { "Capacidade": "400 L", "Motor": "2 cv", "Alimentação": "Monofásica 220V", "Rotação": "26 rpm" },
    preco: 300,
    periodo: "mensal"
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
    specs: ["Diesel", "≈49 hp", "Alta Manobrabilidade"],
    descricaoLonga: "Minicarregadeira Bobcat 763, equipamento compacto e versátil para movimentação de terra, entulho, brita e outros materiais em canteiros de obra. Alta manobrabilidade em espaços reduzidos e acoplamento para diversos implementos, como caçamba e garfo paleteiro.",
    ficha: { "Motor": "Diesel", "Potência": "≈49 hp", "Capacidade da caçamba": "≈700 kg", "Peso operacional": "≈2.700 kg" },
    preco: 1200,
    periodo: "diaria",
    custoExtra: "R$ 300 operador + R$ 100 gasolina"
  },
  {
    id: "conjunto-andaimes",
    nome: "Conjunto Andaimes",
    categoria: "andaimes",
    descricao: "Kit completo de andaimes tubulares para cobrir toda a fachada ou área da obra.",
    imagem: "img/conjunto-andaimes.jpg",
    destaque: false,
    disponivel: true,
    specs: ["Aço Galvanizado", "Kit Completo", "NR-18"],
    descricaoLonga: "Conjunto completo de andaime tubular, com módulos, escoras, rodapés, contraventamentos e acessórios necessários para montagem segura em fachadas e áreas internas de grande extensão. Ideal para obras de médio e grande porte que precisam de estrutura completa de acesso e segurança.",
    ficha: { "Material": "Aço galvanizado", "Composição": "Módulos, escoras, rodapés e travamentos", "Norma": "NR-18" },
    preco: 4028,
    periodo: "mensal"
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
    id: "esmerilhadeira",
    nome: "Esmerilhadeira",
    categoria: "ferramentas",
    descricao: "Corte, desbaste e acabamento em metais e superfícies diversas.",
    imagem: "img/esmerilhadeira.jpg",
    destaque: false,
    disponivel: true,
    specs: ["220V", "Disco 7\"", "Portátil"],
    descricaoLonga: "Esmerilhadeira angular para corte e desbaste de metais, concreto e outros materiais. Leve e de fácil manuseio, indicada para acabamentos, remoção de rebarbas e cortes rápidos em obra.",
    ficha: { "Tensão": "220V", "Disco": "7\" (180 mm)", "Uso": "Corte e desbaste" },
    preco: 80,
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
    id: "maquina-lixar",
    nome: "Máquina de lixar",
    categoria: "ferramentas",
    descricao: "Lixamento e preparo de superfícies para acabamento de alta qualidade.",
    imagem: "img/maquina-lixar.jpg",
    destaque: false,
    disponivel: true,
    specs: ["Elétrica", "Discos Abrasivos", "Alto Rendimento"],
    descricaoLonga: "Lixadeira de piso para preparo e nivelamento de superfícies de concreto ou madeira antes do acabamento final. Alta produtividade e acabamento uniforme em grandes áreas.",
    ficha: { "Uso": "Lixamento e preparo de piso", "Acionamento": "Elétrico", "Indicação": "Concreto e madeira" },
    preco: 300,
    periodo: "diaria"
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
    id: "martelete",
    nome: "Martelete",
    categoria: "furacao",
    descricao: "Perfuração e fixação em concreto e alvenaria com praticidade.",
    imagem: "img/martelete.jpg",
    destaque: false,
    disponivel: true,
    specs: ["220V", "Rotativo/Percussão", "Portátil"],
    descricaoLonga: "Martelete elétrico para perfuração e fixação em concreto, alvenaria e outros materiais. Equipamento versátil para o dia a dia da obra, com bom equilíbrio entre potência e leveza.",
    ficha: { "Tensão": "220V", "Função": "Perfuração e fixação", "Encaixe": "SDS-Plus" },
    preco: 120,
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
