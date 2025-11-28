// Aguarda o carregamento da página
document.addEventListener('DOMContentLoaded', () => {

    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        // Impede o envio padrão do formulário (que recarregaria a página)
        event.preventDefault();

        // Captura os valores dos campos
        const emailValue = document.getElementById('email').value;
        const passwordValue = document.getElementById('password').value;

        // Validação simples (apenas para garantir que não estão vazios)
        if (emailValue && passwordValue) {
            console.log('Tentativa de login:');
            console.log('Email:', emailValue);
            console.log('Senha:', passwordValue); // Cuidado: nunca exiba senhas reais em produção!

           
            window.location.href = "home.html";

            // AQUI VOCÊ COLOCARIA O CÓDIGO PARA ENVIAR OS DADOS AO SEU SERVIDOR (BACKEND)
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });

});