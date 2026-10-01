function sumar() {
    const n1 = parseFloat(document.getElementById("num1").value);
    const n2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(n1) || isNaN(n2)) {
        document.getElementById("resultado").innerHTML = "Por favor ingresa dos números válidos";
        return;
    }

    const suma = n1 + n2;
    document.getElementById("resultado").innerHTML = "Resultado: " + n1 + " + " + n2 + " = " + suma;
}
