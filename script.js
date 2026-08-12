// Array onde você adiciona seus projetos
const projetos = [
    {
        nome: "Mecânica Ind",
        descricao: "Projeto de automação / mecânica industrial no GitHub.",
        link: "https://github.com/jonathasalves-tech/mecanicaind"
    },
    {
        nome: "Nheihih",
        descricao: "Repositório do projeto Nheihih.",
        link: "https://github.com/jonathasalves-tech/nheihih"
    }
];

// Função para renderizar os projetos na tela
function carregarProjetos() {
    const container = document.getElementById("projects-container");

    projetos.forEach(projeto => {
        const card = document.createElement("div");
        card.classList.add("project-card");

        card.innerHTML = `
            <div>
                <h3>${projeto.nome}</h3>
                <p>${projeto.descricao}</p>
            </div>
            <a href="${projeto.link}" target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
        `;

        container.appendChild(card);
    });
}

// Executa a função quando a página carrega
document.addEventListener("DOMContentLoaded", carregarProjetos);
