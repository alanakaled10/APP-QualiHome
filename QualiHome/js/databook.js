// Banco de dados com as informações de cada cômodo
const dadosSalas = {
    'cozinha': {
        videoUrl: 'https://videos.pexels.com/video-files/4108620/4108620-hd_720_1280_25fps.mp4',
        titulo: 'Dica: Organização de Armários',
        descricao: 'Mantenha sua cozinha prática e organizada com esses passos simples! 🍲',
        likes: '1.2k',
        comentarios: '89',
        shares: '34'
    },
    'banheiro': {
        videoUrl: 'https://videos.pexels.com/video-files/7016259/7016259-hd_720_1280_25fps.mp4',
        titulo: 'Limpeza Eficiente do Box',
        descricao: 'Truque caseiro para tirar manchas de água do vidro do box. ✨',
        likes: '3.5k',
        comentarios: '120',
        shares: '200'
    },
    'lavanderia': {
        videoUrl: 'https://videos.pexels.com/video-files/6196207/6196207-hd_720_1280_25fps.mp4',
        titulo: 'Cuidados com a Máquina',
        descricao: 'Como limpar o filtro da sua máquina de lavar para durar mais. 👕',
        likes: '850',
        comentarios: '45',
        shares: '12'
    },
    'quarto': {
        videoUrl: 'https://videos.pexels.com/video-files/7579933/7579933-hd_720_1280_25fps.mp4',
        titulo: 'Cama de Hotel em Casa',
        descricao: 'Aprenda a técnica para deixar sua cama esticadinha e aconchegante. 🛏️',
        likes: '2.1k',
        comentarios: '302',
        shares: '515'
    },
    'sala': {
        videoUrl: 'https://videos.pexels.com/video-files/7534244/7534244-hd_720_1280_25fps.mp4',
        titulo: 'Iluminação Aconchegante',
        descricao: 'Como usar luz indireta para transformar o clima da sua sala. 🛋️',
        likes: '1.8k',
        comentarios: '90',
        shares: '67'
    }
};

function selecionarMenu(itemClicado, comodo) {
    

    const todosItens = document.querySelectorAll('.nav-item');
    todosItens.forEach(item => {
        item.classList.remove('active');
    });
    itemClicado.classList.add('active');

    const dados = dadosSalas[comodo];

    if (dados) {

        const videoPlayer = document.getElementById('video-player');
        videoPlayer.src = dados.videoUrl;
        videoPlayer.play(); 

        document.getElementById('titulo-dica').innerText = dados.titulo;
        document.getElementById('desc-dica').innerText = dados.descricao;

        document.getElementById('count-likes').innerText = dados.likes;
        document.getElementById('count-comments').innerText = dados.comentarios;
        document.getElementById('count-shares').innerText = dados.shares;
    }
}

function goHome() {
    window.location.href = 'home.html';
}