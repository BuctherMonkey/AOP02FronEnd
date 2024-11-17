document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio real do formulário
    const statusMessage = document.getElementById("statusMessage");
    statusMessage.style.display = "block"; // Exibe a mensagem de status
    statusMessage.textContent = "Envio Concluído!"; // Define o texto da mensagem
});