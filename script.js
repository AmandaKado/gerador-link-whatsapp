// Função para copiar o link gerado para a área de transferência
function copiarLinkParaAreaDeTransferencia(link) {
    // Cria um elemento de input oculto
    const input = document.createElement("input");
    input.style.position = "fixed";
    input.style.opacity = 0;
    input.value = link;

    // Adiciona o elemento à página
    document.body.appendChild(input);

    // Seleciona o conteúdo do input
    input.select();
    input.setSelectionRange(0, 99999); // Para dispositivos móveis

    // Copia o texto para a área de transferência
    document.execCommand("copy");

    // Remove o elemento de input
    document.body.removeChild(input);
}

function codificarEmoji(emoji) {
    return encodeURIComponent(emoji);
}

// Função para gerar o link do WhatsApp com mensagem personalizada e copiá-lo
function gerarLinkWhatsApp() {
    const numero = document.getElementById("numero").value;
    const nome = document.getElementById("nome").value;
    const linkGerado = document.getElementById("linkGerado");
    const emoji = '👋';

    if (numero) {
        // Formate o número removendo caracteres não numéricos
        const numeroFormatado = numero.replace(/\D/g, "");
        const emojiCodificado = codificarEmoji(emoji);

        // Monte o link com a mensagem
        const link = `https://wa.me/${numeroFormatado}?text=Hello%20${nome}%2C%20how%20are%20you%3F%20Patricia%20here%20%${emojiCodificado}`;
        linkGerado.innerHTML = `<a href="${link}" target="_blank">${link}</a>`;

        // Copie o link para a área de transferência
        copiarLinkParaAreaDeTransferencia(link);

        alert("Link copiado para a área de transferência!");
    } else {
        linkGerado.innerHTML = "Por favor, insira um número de WhatsApp válido.";
    }
}

// Event listener para o botão "Gerar Link"
const gerarLinkButton = document.getElementById("gerarLink");
gerarLinkButton.addEventListener("click", gerarLinkWhatsApp);
