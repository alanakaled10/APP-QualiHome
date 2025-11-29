document.addEventListener('DOMContentLoaded', () => {
    // Menu Interativo
    const menuItems = document.querySelectorAll('.nav-item');
    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            menuItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
        });
    });


});

function goChamado() {
    window.location.href = "chamados.html";
}

function goAgenda() {
    window.location.href = "agenda.html";
}

function goRelatorio() {
    window.location.href = "relatorio.html";
}