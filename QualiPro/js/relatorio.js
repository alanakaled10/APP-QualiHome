document.addEventListener('DOMContentLoaded', () => {
    
    // --- Funcionalidade das Abas (Tabs) ---
    const tabButtons = document.querySelectorAll('.tab-btn');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
           
            tabButtons.forEach(btn => btn.classList.remove('active'));

            this.classList.add('active');

            console.log('Trocando visualização para:', this.textContent);

        });
    });


    // --- Menu Inferior (Padrão dos outros arquivos) ---
    const menuItems = document.querySelectorAll('.nav-item');
    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            if(item.getAttribute('href') === '#') {
                e.preventDefault();
                menuItems.forEach(nav => nav.classList.remove('active'));
                item.classList.add('active');
            }
        });
    });
});