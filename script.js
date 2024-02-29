const data = [
  {
    id: "1",
    data: "28 de fev, 2024",
    title: "Conheça o Dev Vagas, a plataforma de empregos exclusiva do DevClub",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non animi reiciendis dicta obcaecati assumenda distinctio enim, ipsum soluta architecto quae necessitatibus earum hic aliquid eligendi nemo maiores ipsam, est laboriosam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Non animi reiciendis dicta obcaecati assumenda distinctio enim, ipsum soluta architecto quae necessitatibus earum hic aliquid eligendi nemo maiores ipsam, est laboriosam?",
  },
  {
    id: "2",
    data: "29 de fev, 2024",
    title: "Concurso de projetos",
    content: "Traga o seu melhor projeto e seja um Dev Destaque",
  },
  {
    id: "3",
    data: "1 de mar, 2024",
    title: "Comunidade DevClub",
    content: "O melhor para para fazer amigos, trazer os bugs e se divertir.",
  },
  {
    id: "4",
    data: "2 de mar, 2024",
    title: "Aprenda Análise de Dados",
    content: "Está chegando a maior formação de dados que o Brasil já viu.",
  },
  {
    id: "5",
    data: "3 de mar, 2024",
    title: "Novo Recorde",
    content: "Alunos do DevClub batem recorde de empregabilidade no Brasil",
  },
  {
    id: "6",
    data: "5 de mar, 2024",
    title: "Alerta de spoilers...",
    content:
      "Estamos preparando novidades incríveis para o mês de março, prepare-se...",
  },
];

// feature posts
const reversedData = data.slice().reverse();

const dynamicSection = document.getElementById("dynamicSection");

reversedData.forEach((item) => {
  const sectionItem = document.createElement("section");
  sectionItem.className = "blog-section";
  sectionItem.innerHTML = `
    <div class="head">
      <span id="date">${item.data}</span>
      <svg
        id="icon"
        width="20"
        height="20"
        viewBox="0 0 200 200"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.6656 98.2928L19.666 98.2931L97.3142 175.941L99.7891 178.416L102.264 175.941L179.912 98.2931C188.54 89.6655 193.297 78.1784 193.297 65.9795C193.297 53.7806 188.54 42.2936 179.912 33.666L179.912 33.6656C171.285 25.0409 159.8 20.2813 147.599 20.2813C135.399 20.2813 123.913 25.0408 115.285 33.6656L115.285 33.6661L99.7889 49.164L84.2909 33.666C75.6657 25.0408 64.1788 20.2813 51.9795 20.2813C39.7802 20.2813 28.2935 25.0408 19.6663 33.6656C11.0382 42.2914 6.28125 53.7809 6.28125 65.9795C6.28125 78.1789 11.0408 89.6656 19.6656 98.2928ZM97.3142 56.5888L99.7892 59.0638L102.264 56.5886L120.234 38.6161C127.55 31.3029 137.256 27.2813 147.599 27.2813C157.943 27.2813 167.647 31.3028 174.963 38.6161C182.277 45.9308 186.297 55.6371 186.297 65.9795C186.297 76.3221 182.277 86.0286 174.962 93.3434L99.7891 168.517L24.6161 93.3437C24.616 93.3436 24.6158 93.3435 24.6157 93.3434C17.3028 86.0282 13.2812 76.3215 13.2812 65.9795C13.2812 55.6367 17.3012 45.9283 24.6154 38.6161C31.9306 31.3029 41.6374 27.2813 51.9795 27.2813C62.3218 27.2813 72.0284 31.303 79.3412 38.6157L97.3142 56.5888ZM181.171 99.5517L99.7891 180.933L18.4074 99.5517C9.435 90.5793 4.5 78.6664 4.5 65.9795C4.5 53.2905 9.43494 41.3798 18.4074 32.4074C27.3798 23.4349 39.2905 18.5 51.9795 18.5C64.6686 18.5 76.5793 23.4349 85.5517 32.4074L97.3142 44.1699L99.7891 46.6447L102.264 44.1699L114.026 32.4074C122.999 23.435 134.912 18.5 147.599 18.5C160.288 18.5 172.198 23.4349 181.171 32.4074L181.171 32.4077C190.145 41.3798 195.078 53.2902 195.078 65.9795C195.078 78.6689 190.145 90.5793 181.171 99.5514L181.171 99.5517Z"
        />
      </svg>
    </div>
    <h1>${item.title}</h1>
    <p>${item.content}</p>
  `;

  dynamicSection.appendChild(sectionItem);
});

// feature de like
const icon = document.querySelectorAll("#icon");

icon.forEach((icon) => {
  icon.addEventListener("click", (event) => {
    icon.classList.toggle("filled");

    // confeti somente para o like
    if (icon.classList.contains("filled")) {
      // Obtendo as coordenadas x e y do ícone considerando o scroll
      const iconX = event.pageX - window.scrollX;
      const iconY = event.pageY - window.scrollY;

      // função confeti -> adicionado script
      confetti({
        particleCount: 100,
        spread: 100,
        origin: { x: iconX / window.innerWidth, y: iconY / window.innerHeight },
      });
    }
  });
});

// Feature de filtro
const searchInput = document.querySelector('input[type="text"]');
const postSections = document.querySelectorAll(".blog-section");

const filterPosts = () => {
  const searchText = searchInput.value.toLowerCase();

  postSections.forEach((section) => {
    const title = section.querySelector("h1").innerText.toLowerCase();
    const content = section.querySelector("p").innerText.toLowerCase();

    const isMatch = title.includes(searchText) || content.includes(searchText);

    section.style.display = isMatch ? "block" : "none";
  });
};

searchInput.addEventListener("input", filterPosts);
