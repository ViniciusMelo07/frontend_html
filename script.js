document.addEventListener("DOMContentLoaded", function () {
    const backendUrl = "http://localhost:25000/message";

    fetch(backendUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById("message").innerText = data.message;
        })
        .catch(error => {
            console.error("Erro ao buscar mensagem:", error);
            document.getElementById("message").innerText = "Erro ao carregar mensagem.";
        });
});
