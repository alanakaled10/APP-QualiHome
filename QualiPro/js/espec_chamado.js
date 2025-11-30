// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', function () {

    // Seleciona todos os cabeçalhos dos accordions
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function () {
            this.classList.toggle('active');

            const content = this.nextElementSibling;

            
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });


    const backBtn = document.querySelector('.back-btn');
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            window.location.href = "chamados.html";
        });
    }
});