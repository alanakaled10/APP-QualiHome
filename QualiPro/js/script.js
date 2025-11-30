document.addEventListener('DOMContentLoaded', () => {

    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const emailValue = document.getElementById('email').value;
        const passwordValue = document.getElementById('password').value;

        if (emailValue && passwordValue) {

            const btn = document.querySelector('.btn-login');
            const originalText = btn.innerText;
            
            btn.innerText = 'Entrando...';
            btn.style.opacity = '0.8';

            setTimeout(() => {
                
                window.location.href = "home.html";
            }, 1000);

        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });

    // --- Mostrar Senha ---
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');

    togglePassword.addEventListener('click', function () {
        
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        
        // Troca o ícone (olho aberto / olho cortado)
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa-eye-slash');
    });
});