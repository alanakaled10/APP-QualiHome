document.addEventListener('DOMContentLoaded', () => {
    
    // --- Lógica de Login ---
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username && password) {
         
            const btn = document.querySelector('.btn');
            const originalText = btn.innerText;
            btn.innerText = 'Entrando...';
         
            setTimeout(() => {
                window.location.href = "home.html";
            }, 800);
        } else {
            alert('Por favor, preencha usuário e senha.');
        }
    });

    // --- Lógica de Mostrar/Ocultar Senha ---
    const togglePass = document.getElementById('togglePassword');
    const passInput = document.getElementById('password');

    togglePass.addEventListener('click', () => {

        const type = passInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passInput.setAttribute('type', type);

        togglePass.classList.toggle('fa-eye');
        togglePass.classList.toggle('fa-eye-slash');
    });

});


// Script simples para simular interação nos botões
document.querySelectorAll('.btn-action, .btn-detalhes').forEach(btn => {
    btn.addEventListener('click', () => {
        console.log('Botão clicado');
       
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
let btn_chamado = document.querySelector(".btn_chamado");

btn_ia.addEventListener('click', function () {
    window.location.href = "scan.html";
})

btn_chamado.addEventListener('click', function () {
    window.location.href = "chamado.html";
})




function goHome() {
    window.location.href = 'home.html';
}

function goChamado() {
    window.location.href = 'chamado.html';
}

function goSuport() {
    window.location.href = 'suport.html';
}

function goDatabook() {
    window.location.href = 'databook.html';
}

function goPerfil() {
    window.location.href = 'perfil.html';
}


function selecionarTipo(elementoClicado) {

    const todosChips = document.querySelectorAll('.chip');
    todosChips.forEach(chip => {
        chip.classList.remove('active');
    });

 
    elementoClicado.classList.add('active');
}


function atualizarNomeFoto() {
    const input = document.getElementById('inputFoto');
    const texto = document.getElementById('textoFoto');


    if (input.files && input.files.length > 0) {

        const nomeArquivo = input.files[0].name;

        texto.innerText = nomeArquivo;
        texto.style.color = "#00c7a5";
        texto.style.fontWeight = "bold";
    }
}

