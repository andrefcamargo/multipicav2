// =====================================================
// MODAL - PROJETO "MITOS E VERDADES"
// =====================================================


// -----------------------------------------------------
// 1. LOCALIZANDO OS ELEMENTOS DO HTML
// -----------------------------------------------------

// Localiza o modal através do seu ID.
const modal = document.getElementById("modal");

// Localiza o título que ficará dentro do modal.
const modalTitle = document.getElementById("modal-title");

// Localiza o texto que ficará dentro do modal.
const modalText = document.getElementById("modal-text");

// Localiza o botão X que fecha o modal.
const closeButton = document.querySelector(".close-btn");

// Localiza todos os botões "Saiba mais".
const buttons = document.querySelectorAll(".btn-modal");


// -----------------------------------------------------
// 2. FUNÇÃO PARA ABRIR O MODAL
// -----------------------------------------------------

// Criamos uma função chamada abrirModal.
// Ela recebe o card que contém o botão clicado.
function abrirModal(card) {

    // Localiza o título <h2> dentro do card.
    const titulo = card.querySelector("h2");

    // Localiza o parágrafo <p> dentro do card.
    const texto = card.querySelector("p");

    // Coloca o título do mito no título do modal.
    modalTitle.textContent = titulo.textContent;

    // Coloca o texto do mito dentro do modal.
    modalText.textContent = texto.textContent;

    // Remove a classe "hidden".
    // Assim, o modal deixa de ficar escondido.
    // O CSS volta a usar display: flex.
    modal.classList.remove("hidden");
}


// -----------------------------------------------------
// 3. CONFIGURANDO OS BOTÕES "SAIBA MAIS"
// -----------------------------------------------------

// Percorre todos os botões que possuem a classe .btn-modal.
buttons.forEach(function(button) {

    // Adiciona um evento de clique em cada botão.
    button.addEventListener("click", function() {

        // Encontra o card onde está o botão clicado.
        const card = button.closest(".card");

        // Abre o modal usando as informações desse card.
        abrirModal(card);
    });
});


// -----------------------------------------------------
// 4. CONFIGURANDO O BOTÃO "X"
// -----------------------------------------------------

// Adiciona um evento de clique ao botão X.
closeButton.addEventListener("click", function() {

    // Adiciona novamente a classe "hidden".
    // O CSS transforma o modal em display: none.
    // Assim, o modal desaparece da tela.
    modal.classList.add("hidden");
});