// Lista de apps com categorias e tipo
const items = [
  { name: "EditQuiz",                            img: "/logos/eq.webp", type: "Aplicativo", category: "Lançamentos" },
  { name: "Código de Defesa do Consumidor",      img: "/logos/cdc.webp", type: "Aplicativo", category: "Lançamentos" },
  { name: "Informática para Concursos",          img: "/logos/ic.webp", type: "Aplicativo", category: "Lançamentos" },
  { name: "Técnico Agrícola IFBAIANO-SBF",       img: "/logos/ta.webp", type: "Aplicativo", category: "Lançamentos" },
  { name: "Campus IFBAIANO",                     img: "/logos/if.webp", type: "Aplicativo", category: "Lançamentos" },{ name: "Técnico Informática IFBAIANO",        img: "logos/ti.webp", type: "Aplicativo", category: "Lançamentos" },
  { name: "Cursos do IFBAIANO - SBF",            img: "/logos/cif.webp", type: "Aplicativo", category: "Lançamentos" },
  { name: "Comunidades Quilombolas Bonfim",      img: "/logos/cqb.webp", type: "Aplicativo", category: "Lançamentos" },
  { name: "Introdução à Computação",             img: "/logos/icc.webp", type: "Aplicativo", category: "Lançamentos" },
  { name: "Técnico Alimentos IFBAIANO-SBF",      img: "/logos/tal.webp", type: "Aplicativo", category: "Lançamentos" },
  { name: "Licenciatura em Computação IFBAIANO", img: "/logos/lic.webp", type: "Aplicativo", category: "Lançamentos" }
  // FIM APLICATIVOS
];

// Função para criar os cards
function createCard(item) {
  const card = document.createElement("div");
  card.className = "app-card";
  card.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>${item.type}</p>
  `;

  // Adiciona o evento de clique para redirecionar para details.html
  card.addEventListener('click', () => {
      // Codifica o nome do app para ser usado na URL
      const encodedAppName = encodeURIComponent(item.name);
      window.location.href = `/details.html?app=${encodedAppName}`;
  });

  return card;
}

// Carrega os cards na página inicial
const launchesContainer = document.getElementById("launches-container");
items.forEach(item => {
  launchesContainer.appendChild(createCard(item));
});

// Função de pesquisa
document.getElementById('searchForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Impede o recarregamento da página

  // Capturar o termo de pesquisa
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();

  // Obter todos os cards
  const cards = document.querySelectorAll('.app-card');

  // Filtrar os cards com base no termo pesquisado
  cards.forEach(card => {
      const cardText = card.textContent.toLowerCase();
      if (cardText.includes(searchTerm)) {
          card.style.display = 'block'; // Mostrar o card
      } else {
          card.style.display = 'none'; // Ocultar o card
      }
  });
});