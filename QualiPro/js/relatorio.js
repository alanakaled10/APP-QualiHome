document.addEventListener('DOMContentLoaded', () => {
    
    // --- Funcionalidade das Abas (Tabs) ---
    const tabButtons = document.querySelectorAll('.tab-btn');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 1. Remove a classe 'active' de todos os botões
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // 2. Adiciona a classe 'active' apenas no botão clicado
            this.classList.add('active');

            // Aqui você adicionaria a lógica para trocar os dados do gráfico
            console.log('Trocando visualização para:', this.textContent);
            // Exemplo: carregarDados(this.textContent);
        });
    });


    // --- Menu Inferior (Padrão dos outros arquivos) ---
    const menuItems = document.querySelectorAll('.nav-item');
    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            // Se for um link de exemplo com #, previne o comportamento padrão
            if(item.getAttribute('href') === '#') {
                e.preventDefault();
                menuItems.forEach(nav => nav.classList.remove('active'));
                item.classList.add('active');
            }
        });
    });
});