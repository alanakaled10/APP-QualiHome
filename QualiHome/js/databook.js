// Função chamada quando se clica em um item do menu inferior
function selecionarMenu(itemClicado) {
    
    // 1. Seleciona todos os elementos que possuem a classe '.nav-item' na página
    const todosItens = document.querySelectorAll('.nav-item');

    // 2. Percorre essa lista e remove a classe 'active' de todos eles.
    // Isso "apaga" o destaque do item que estava selecionado anteriormente.
    todosItens.forEach(item => {
        item.classList.remove('active');
    });

    // 3. Adiciona a classe 'active' apenas no elemento específico que foi clicado (itemClicado).
    // O CSS então se encarrega de aplicar a borda verde e a opacidade total.
    itemClicado.classList.add('active');

    // ---
    // Futuramente, aqui você adicionará a lógica para trocar o conteúdo principal.
    // Exemplo: Se clicou em "Banheiro", carregar o vídeo e os textos do banheiro.
    // console.log("Mudando para a sala:", itemClicado.querySelector('.nav-label').innerText);
}

function goHome() {
    window.location.href = 'home.html';
}