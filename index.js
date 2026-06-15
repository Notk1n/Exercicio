function calcularImc() {
    // Entrada
    let pesoUsuario = parseFloat(document.getElementById("peso").value);
    let alturaUsuario = parseFloat(document.getElementById("altura").value);

    // Processamento
    let calculoImc = pesoUsuario / (alturaUsuario * alturaUsuario);
    let mensagem = "";

    //If e Else para informar qual a situação do peso do usuário
    if (calculoImc < 18.5) {
        mensagem = "Você está abaixo do peso.";
    } else if (calculoImc < 25) {
        mensagem = "Você está com peso normal.";
    } else {
        mensagem = "Você está acima do peso.";  
    }

    // Saída
    document.getElementById("resultado").textContent = "Seu IMC é: " + calculoImc.toFixed(2);
    document.getElementById("mensagem").textContent = mensagem;
}

