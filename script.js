// Função para gerar o link do WhatsApp com mensagem personalizada
function gerarLinkWhatsApp() {
    const numero = document.getElementById("numero").value;
    const nome = document.getElementById("nome").value;
    const linkGerado = document.getElementById("linkGerado");
    
    if (numero) {
        // Formate o número removendo caracteres não numéricos
        const numeroFormatado = numero.replace(/\D/g, "");

        // Monte o link com a mensagem
        const link = `https://wa.me/${numeroFormatado}?text=Hello%20${nome}%2C%20how%20are%20you%3F%20Patricia%20here%20%F0%9F%91%8B`;
        linkGerado.innerHTML = `<a href="${link}" target="_blank">${link}</a>`;
    } else {
        linkGerado.innerHTML = "Por favor, insira um número de WhatsApp válido.";
    }
}

// Event listener para o botão "Gerar Link"
const gerarLinkButton = document.getElementById("gerarLink");
gerarLinkButton.addEventListener("click", gerarLinkWhatsApp);
