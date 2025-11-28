// ARQUIVO: js/suporte.js

const chatArea = document.getElementById('chatArea');
const messageInput = document.getElementById('messageInput');

// Função para pegar a hora atual (HH:MM)
function getCurrentTime() {
    const now = new Date();
    return now.getHours().toString().padStart(2, '0') + ':' + 
           now.getMinutes().toString().padStart(2, '0');
}

// Função para enviar mensagem
function sendMessage() {
    const text = messageInput.value.trim();
    
    if (text !== "") {
        // 1. Cria o HTML da mensagem enviada pelo usuário
        const userMsgHTML = `
        <div class="message sent">
            <div class="msg-bubble">
                ${text}
                <div class="msg-time">${getCurrentTime()} <i class="fa-solid fa-check"></i></div>
            </div>
        </div>
        `;

        // 2. Adiciona ao chat
        chatArea.insertAdjacentHTML('beforeend', userMsgHTML);
        
        // 3. Limpa o input e rola para baixo
        messageInput.value = "";
        scrollToBottom();

        // 4. Simula resposta automática da IA após 1.5 segundos
        setTimeout(() => {
            receiveMessage("Recebi sua mensagem! Um especialista irá analisar seu caso em instantes.");
        }, 1500);
    }
}

// Função para receber mensagem (Resposta do Bot)
function receiveMessage(text) {
    const botMsgHTML = `
    <div class="message received">
        <div class="msg-bubble">
            ${text}
            <div class="msg-time">${getCurrentTime()}</div>
        </div>
    </div>
    `;
    
    chatArea.insertAdjacentHTML('beforeend', botMsgHTML);
    scrollToBottom();
}

// Rolar para o fim do chat
function scrollToBottom() {
    chatArea.scrollTop = chatArea.scrollHeight;
}

// Enviar com a tecla Enter
messageInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});