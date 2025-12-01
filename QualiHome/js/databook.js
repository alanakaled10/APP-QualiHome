// Banco de dados com as informações de cada cômodo
const dadosSalas = {
    'cozinha': {
        videoUrl: 'https://images.tcdn.com.br/img/img_prod/752045/armario_de_cozinha_completo_acacia_8_portas_salleto_10003225_variacao_15041_1_c13a0ee03b6fb8dd80004784a6a5eaf9.jpg',
        titulo: 'Dica: Organização de Armários',
        descricao: 'Mantenha sua cozinha prática e organizada com esses passos simples! 🍲',
        likes: '1.2k',
        comentarios: '89',
        shares: '34'
    },
    'banheiro': {
        videoUrl: 'https://blog.archtrends.com/wp-content/uploads/2025/07/banheiromodernoareadisponivel.jpeg',
        descricao: 'Truque caseiro para tirar manchas de água do vidro do box. ✨',
        likes: '3.5k',
        comentarios: '120',
        shares: '200'
    },
    'lavanderia': {
        videoUrl: 'https://storage.panoverse-cdn.com.br/img.panorama/produto/106255/lavanderia-completa-sao-goncalo-4-portas-6-prateleiras-nature-off-white-kaiki-moveis-975846-1000x1000-cover.jpg',
        titulo: 'Cuidados com a Máquina',
        descricao: 'Como limpar o filtro da sua máquina de lavar para durar mais. 👕',
        likes: '850',
        comentarios: '45',
        shares: '12'
    },
    'quarto': {
        videoUrl: 'https://cdn.assets-casacor.tec.br/file/casacor-images-news/2025/03/biblioteca-escondida-abriga-encontros-leitura-ape-estudio-elmor-credito-bia-nauiack-39.webp',
        titulo: 'Cama de Hotel em Casa',
        descricao: 'Aprenda a técnica para deixar sua cama esticadinha e aconchegante. 🛏️',
        likes: '2.1k',
        comentarios: '302',
        shares: '515'
    },
    'sala': {
        videoUrl: 'https://finger.ind.br/wp-content/uploads/2021/08/post_thumbnail-a604185952a2859240903c1b2af3cd7c.jpg',
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