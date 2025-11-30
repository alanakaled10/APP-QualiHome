const chatArea = document.getElementById('chatArea');
const messageInput = document.getElementById('messageInput');

// Utilitário: Hora atual (HH:MM)
function getCurrentTime() {
    const now = new Date();
    return now.getHours().toString().padStart(2, '0') + ':' + 
           now.getMinutes().toString().padStart(2, '0');
}


function scrollToBottom() {
    chatArea.scrollTop = chatArea.scrollHeight;
}

// Enviar mensagem do usuário
function sendMessage() {
    const text = messageInput.value.trim();
    
    if (text === "") return;

    const userMsgHTML = `
        <div class="message sent">
            <div class="msg-bubble">
                ${text}
                <div class="msg-time">${getCurrentTime()} <i class="fa-solid fa-check"></i></div>
            </div>
        </div>
    `;

    chatArea.insertAdjacentHTML('beforeend', userMsgHTML);
    messageInput.value = "";
    scrollToBottom();

    // Simulação de resposta automática
    setTimeout(() => {
        receiveMessage("Recebi sua mensagem! Um especialista irá analisar seu caso em instantes.");
    }, 1500);
}

// Receber mensagem do Bot
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

// Event Listeners
messageInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});