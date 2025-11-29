
// Função simples para simular clique no card
function abrirChamado(unidade) {
    // Em um app real, isso levaria para uma página de detalhes
    if (unidade === "302") {
        window.location.href = "espec_chamado.html";
    }
    if (unidade === "501") {
        window.location.href = "espec_chamado2.html";
    }
    
}

// Script do menu (igual ao anterior)
document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.nav-item');

    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            // Removemos o preventDefault() dos links reais para poder navegar
            // se o href for diferente de #
            if (item.getAttribute('href') === '#') {
                e.preventDefault();
                menuItems.forEach(nav => nav.classList.remove('active'));
                item.classList.add('active');
            }
        });
    });
});
