
// Função simples para simular clique no card
function abrirChamado(unidade) {
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
            if (item.getAttribute('href') === '#') {
                e.preventDefault();
                menuItems.forEach(nav => nav.classList.remove('active'));
                item.classList.add('active');
            }
        });
    });
});
