document.addEventListener('DOMContentLoaded', () => {
    
    const dateDisplay = document.getElementById('date-display');
    const prevBtn = document.getElementById('prev-day-btn');
    const nextBtn = document.getElementById('next-day-btn');

    // Data inicial simulada (25 de Novembro)
    let currentDate = new Date(2023, 10, 25); // Mês 10 = Novembro em JS

    // Função para formatar a data (ex: "25 Nov")
    function formatDate(date) {
        const day = date.getDate();
        // Pega o nome do mês abreviado em português
        const month = date.toLocaleString('pt-BR', { month: 'short' });
        // Capitaliza a primeira letra do mês
        const formattedMonth = month.charAt(0).toUpperCase() + month.slice(1);
        
        // Verifica se é "hoje" (simulação simples)
        const today = new Date(2023, 10, 25);
        if (date.getTime() === today.getTime()) {
             return `Hoje, ${day} ${formattedMonth}`;
        }

        return `${day} ${formattedMonth}`;
    }

    // Função para atualizar a tela
    function updateDateDisplay() {
        dateDisplay.textContent = formatDate(currentDate);
        // Aqui você carregaria os eventos da nova data via AJAX/Fetch
        console.log("Data alterada para:", currentDate);
    }

    // Evento botão Voltar (<)
    prevBtn.addEventListener('click', () => {
        // Subtrai 1 dia
        currentDate.setDate(currentDate.getDate() - 1);
        updateDateDisplay();
    });

    // Evento botão Avançar (>)
    nextBtn.addEventListener('click', () => {
        // Soma 1 dia
        currentDate.setDate(currentDate.getDate() + 1);
        updateDateDisplay();
    });


    // --- Menu Inferior Interativo (Padrão) ---
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