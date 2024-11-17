document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const statusMessage = document.getElementById("statusMessage");
    statusMessage.style.display = "block";
    statusMessage.textContent = "Envio Concluído!";
});
