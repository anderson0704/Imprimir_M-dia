function calcularMedia() {
    var valor1 = parseFloat(document.getElementById("valor1").value);
    var valor2 = parseFloat(document.getElementById("valor2").value);

    var media = (valor1 + valor2) / 2;

    var resultado = "A média dos valores " + valor1 + " e " + valor2 + " é: " + media;

    document.getElementById("resultado").innerText = resultado;
}