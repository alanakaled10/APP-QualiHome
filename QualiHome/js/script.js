function continuar() {
    let email = document.getElementById("email").value;

    if (email === "") {
        alert("Por favor, digite um e-mail.");
    } else {
        alert("E-mail enviado: " + email);
    }
}
