// Função para gerar o link do WhatsApp com mensagem personalizada
function gerarLinkWhatsApp() {
    const numero = document.getElementById("numero").value;
    const mensagem = document.getElementById("mensagem").value;
    const linkGerado = document.getElementById("linkGerado");
    
    if (numero) {
        // Formate o número removendo caracteres não numéricos
        const numeroFormatado = numero.replace(/\D/g, "");

        // Monte o link com a mensagem
        const link = `https://wa.me/${numeroFormatado}?text=${encodeURIComponent(mensagem)}`;
        linkGerado.innerHTML = `<a href="${link}" target="_blank">${link}</a>`;
    } else {
        linkGerado.innerHTML = "Por favor, insira um número de WhatsApp válido.";
    }
}

// Event listener para o botão "Gerar Link"
const gerarLinkButton = document.getElementById("gerarLink");
gerarLinkButton.addEventListener("click", gerarLinkWhatsApp);
