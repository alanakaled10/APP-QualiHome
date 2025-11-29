// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', function () {

    // Seleciona todos os cabeçalhos dos accordions
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function () {
            // 1. Alterna a classe 'active' no cabeçalho clicado (para girar a seta)
            this.classList.toggle('active');

            // 2. Seleciona o conteúdo associado a este cabeçalho (o próximo elemento irmão)
            const content = this.nextElementSibling;

            // 3. Verifica se o conteúdo está visível e alterna
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });

    // Opcional: Ação para o botão de voltar
    const backBtn = document.querySelector('.back-btn');
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            window.location.href = "chamados.html";
        });
    }
});