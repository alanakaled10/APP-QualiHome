function continuar() {
    let email = document.getElementById("email").value;

    if (email === "") {
        alert("Por favor, digite um e-mail.");
    } else {
        window.location.href = "home.html";
    }
}


// Script simples para simular interação nos botões
document.querySelectorAll('.btn-action, .btn-detalhes').forEach(btn => {
    btn.addEventListener('click', () => {
        console.log('Botão clicado');
        // Animação simples de clique
        btn.style.transform = "scale(0.95)";
        setTimeout(() => {
            btn.style.transform = "scale(1)";
        }, 100);
    });
});

document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', function () {
        document.querySelectorAll('.menu-item').forEach(i => i.classList.remove('active-menu'));
        document.querySelectorAll('.menu-indicator').forEach(ind => ind.style.display = 'none');

        this.classList.add('active-menu');
        this.querySelector('.menu-indicator').style.display = 'block';
    });
});

let btn_ia = document.querySelector(".btn_ia");

btn_ia.addEventListener('click', function () {
    window.location.href = "scan.html";
})

