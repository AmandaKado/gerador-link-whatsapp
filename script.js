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

// Função para gerar o link do WhatsApp com mensagem personalizada e copiá-lo
function gerarLinkWhatsApp() {
    const numero = document.getElementById("numero").value;
    const nome = document.getElementById("nome").value;
    const linkGerado = document.getElementById("linkGerado");

    if (numero) {
        // Formate o número removendo caracteres não numéricos
        const numeroFormatado = numero.replace(/\D/g, "");
        // Monte o link com a mensagem
        const link = `https://wa.me/${numeroFormatado}?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%20${nome}%D8%8C%20%D9%83%D9%8A%D9%81%20%D8%AD%D8%A7%D9%84%D9%83%20%D8%9F%20%D8%A3%D9%86%D8%A7%20%D8%A8%D8%A7%D8%AA%D8%B1%D9%8A%D8%B4%D9%8A%D8%A7%20%D9%85%D9%86%20%D9%86%D8%A7%D8%AF%D9%8A%20%D8%BA%D9%88%D8%A7%D8%AF%D8%A7%D8%BA%D9%86%D9%88.%20`;

        // Copie o link para a área de transferência
        copiarLinkParaAreaDeTransferencia(link);

        alert("Link copiado para a área de transferência!");
    } else {
        alert("Por favor, insira um número de WhatsApp válido.");
    }
}

// Event listener para o botão "Gerar Link"
const gerarLinkButton = document.getElementById("gerarLink");
gerarLinkButton.addEventListener("click", gerarLinkWhatsApp);
