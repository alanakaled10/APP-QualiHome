// ARQUIVO: js/perfil.js

/**
 * Função responsável por ler o arquivo selecionado pelo usuário
 * e atualizar a imagem de perfil na tela instantaneamente.
 */
function updateProfileImage(input) {
    // Verifica se existe um arquivo selecionado
    if (input.files && input.files[0]) {
        
        // Cria um leitor de arquivos do navegador
        const reader = new FileReader();
        
        // Define o que acontece quando o arquivo terminar de ser lido
        reader.onload = function(e) {
            // Pega o elemento da imagem pelo ID e troca o 'src'
            const imgElement = document.getElementById('profile-image');
            imgElement.src = e.target.result;
        }
        
        // Começa a ler o arquivo como uma URL de dados (base64)
        reader.readAsDataURL(input.files[0]);
    }
}

function logoff() {
    window.location.href = 'index.html';
}
function goHome() {
    window.location.href = 'home.html';
}