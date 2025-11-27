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

function goPerfil() {
    window.location.href = 'perfil.html';
}

// Função para selecionar o tipo de chamado (Solicitação, Problema, Dúvida)
function selecionarTipo(elementoClicado) {
    // 1. Remove a classe 'active' de todos os chips
    const todosChips = document.querySelectorAll('.chip');
    todosChips.forEach(chip => {
        chip.classList.remove('active');
    });

    // 2. Adiciona a classe 'active' apenas no que foi clicado
    elementoClicado.classList.add('active');
}

// Função para mostrar o nome da foto quando o usuário escolhe um arquivo
function atualizarNomeFoto() {
    const input = document.getElementById('inputFoto');
    const texto = document.getElementById('textoFoto');

    // Verifica se algum arquivo foi selecionado
    if (input.files && input.files.length > 0) {
        // Pega o nome do primeiro arquivo
        const nomeArquivo = input.files[0].name;

        // Muda o texto do botão e a cor para indicar sucesso
        texto.innerText = nomeArquivo;
        texto.style.color = "#00c7a5";
        texto.style.fontWeight = "bold";
    }
}

