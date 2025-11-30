

document.addEventListener('DOMContentLoaded', function () {


    const tabBtns = document.querySelectorAll('.tab-btn');
    if (tabBtns.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', function () {
                document.querySelector('.tab-btn.active').classList.remove('active');
                this.classList.add('active');
               
                console.log('Filtrando por: ' + this.innerText);
            });
        });
    }


    const messageInputPro = document.getElementById('messageInput');

    if (messageInputPro) {
        // Ajusta altura do textarea automaticamente
        messageInputPro.addEventListener('input', function () {
            this.style.height = 'auto';
            this.style.height = (this.scrollHeight) + 'px';
            if (this.scrollHeight > 100) { this.style.overflowY = 'auto'; } else { this.style.overflowY = 'hidden'; }
        });

        // Enviar com Enter (sem Shift)
        messageInputPro.addEventListener("keypress", function (event) {
            if (event.key === "Enter" && !event.shiftKey) {
                event.preventDefault(); 
                sendProMessage();
            }
        });


        const chips = document.querySelectorAll('.chip');
        chips.forEach(chip => {
            chip.addEventListener('click', function () {
              
                const text = this.innerText.substring(2).trim();
                messageInputPro.value = text;
                messageInputPro.focus();
               
            });
        });
    }
});

// Função de envio específica para o PRO
function sendProMessage() {
    const input = document.getElementById('messageInput');
    const text = input.value.trim();
    const chatArea = document.getElementById('chatArea');

    if (text !== "") {
        
        const now = new Date();
        const time = now.getHours().toString().padStart(2, '0') + ':' +
            now.getMinutes().toString().padStart(2, '0');

        
        const proMsgHTML = `
        <div class="message sent pro-sent">
            <div class="msg-bubble">
                ${text}
                <div class="msg-time">${time} <i class="fa-solid fa-check"></i></div>
            </div>
        </div>
        `;

        chatArea.insertAdjacentHTML('beforeend', proMsgHTML);

        input.value = "";
        input.style.height = 'auto';

        chatArea.scrollTop = chatArea.scrollHeight;
    }
}