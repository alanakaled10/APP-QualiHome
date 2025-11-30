document.addEventListener('DOMContentLoaded', () => {
    const dateDisplay = document.getElementById('date-display');
    const prevBtn = document.getElementById('prev-day-btn');
    const nextBtn = document.getElementById('next-day-btn');
    const menuItems = document.querySelectorAll('.nav-item');


    let currentDate = new Date(2023, 10, 25);
    const demoToday = new Date(2023, 10, 25);

    function formatDate(date) {
        const day = date.getDate();
        const month = date.toLocaleString('pt-BR', { month: 'short' });
        const formattedMonth = month.charAt(0).toUpperCase() + month.slice(1);


        if (date.getTime() === demoToday.getTime()) {
             return `Hoje, ${day} ${formattedMonth}`;
        }

        return `${day} ${formattedMonth}`;
    }

    function updateDisplay() {
        dateDisplay.textContent = formatDate(currentDate);
    
    }


    prevBtn.addEventListener('click', () => {
        currentDate.setDate(currentDate.getDate() - 1);
        updateDisplay();
    });

    nextBtn.addEventListener('click', () => {
        currentDate.setDate(currentDate.getDate() + 1);
        updateDisplay();
    });

    // --- Interatividade do Menu Inferior ---
    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {

            if(item.getAttribute('href') === '#') {
                e.preventDefault();
                document.querySelector('.nav-item.active')?.classList.remove('active');
                item.classList.add('active');
            }
        });
    });
});