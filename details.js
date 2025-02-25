// Banco de dados de apps
const apps = {
    EditQuiz: {
        title: "EditQuiz",
        developer: "Desenvolvedor do EditQuiz",
        description: "Descrição do EditQuiz.",
        updateDate: "10 de Outubro de 2023",
        categoria: "Educativo",
        preco: "Grátis",
        version: "1.0.0",
        androidVersion: "15 ou superior",
        icon: "logos/eq.webp", // Atualizado com o caminho do código 1
        screenshots: [
            "logos/eq.webp",
            "logos/eq.webp",
            "logos/eq.webp"
        ],
        downloadLink: "https://exemplo.com/download/editquiz"
    },
    "Código de Defesa do Consumidor": {
        title: "Código de Defesa do Consumidor",
        developer: "Desenvolvedor do Código de Defesa do Consumidor",
        description: "Descrição do Código de Defesa do Consumidor.",
        updateDate: "10 de Outubro de 2023",
        categoria: "Educativo",
        preco: "Grátis",
        version: "1.0.0",
        androidVersion: "15 ou superior",
        icon: "logos/cdc.webp", // Atualizado com o caminho do código 1
        screenshots: [
            "logos/cdc.webp",
            "logos/cdc.webp",
            "logos/cdc.webp"
        ],
        downloadLink: "https://exemplo.com/download/cdc"
    },
    "Fuga de Marte": {
        title: "Fuga de Marte",
        developer: "Desenvolvedor do Fuga de Marte",
        description: "Descrição do Fuga de Marte.",
        updateDate: "10 de Outubro de 2023",
        categoria: "Educativo",
        preco: "Grátis",
        version: "1.0.0",
        androidVersion: "15 ou superior",
        icon: "logos/fm.webp", // Atualizado com o caminho do código 1
        screenshots: [
            "logos/fm.webp",
            "logos/fm.webp",
            "logos/fm.webp"
        ],
        downloadLink: "https://exemplo.com/download/fugademarte"
    },
    Jararavras: {
        title: "Jararavras",
        developer: "Desenvolvedor do Jararavras",
        description: "Descrição do Jararavras.",
        updateDate: "10 de Outubro de 2023",
        categoria: "Educativo",
        preco: "Grátis",
        version: "1.0.0",
        androidVersion: "15 ou superior",
        icon: "logos/j.webp", // Atualizado com o caminho do código 1
        screenshots: [
            "logos/j.webp",
            "logos/j.webp",
            "logos/j.webp"
        ],
        downloadLink: "https://exemplo.com/download/jararavras"
    },
    "Script Saga": {
        title: "Script Saga",
        developer: "Desenvolvedor do Script Saga",
        description: "Descrição do Script Saga.",
        updateDate: "10 de Outubro de 2023",
        categoria: "Educativo",
        preco: "Grátis",
        version: "1.0.0",
        androidVersion: "15 ou superior",
        icon: "logos/ss.webp", // Atualizado com o caminho do código 1
        screenshots: [
            "logos/ss.webp",
            "logos/ss.webp",
            "logos/ss.webp"
        ],
        downloadLink: "https://exemplo.com/download/scriptsaga"
    },
    "Tabuleiro Lógico": {
        title: "Tabuleiro Lógico",
        developer: "Desenvolvedor do Tabuleiro Lógico",
        description: "Descrição do Tabuleiro Lógico.",
        updateDate: "10 de Outubro de 2023",
        categoria: "Educativo",
        preco: "Grátis",
        version: "1.0.0",
        androidVersion: "15 ou superior",
        icon: "logos/tl.webp", // Atualizado com o caminho do código 1
        screenshots: [
            "logos/tl.webp",
            "logos/tl.webp",
            "logos/tl.webp"
        ],
        downloadLink: "https://exemplo.com/download/tabuleirologico"
    },
    InterageTEA: {
        title: "InterageTEA",
        developer: "Desenvolvedor do InterageTEA",
        description: "Descrição do InterageTEA.",
        updateDate: "10 de Outubro de 2023",
        categoria: "Educativo",
        preco: "Grátis",
        version: "1.0.0",
        androidVersion: "15 ou superior",
        icon: "logos/it.webp", // Atualizado com o caminho do código 1
        screenshots: [
            "logos/it.webp",
            "logos/it.webp",
            "logos/it.webp"
        ],
        downloadLink: "https://exemplo.com/download/interageTea"
    },
    "Peça por Peça": {
        title: "Peça por Peça",
        developer: "Desenvolvedor do Peça por Peça",
        description: "Descrição do Peça por Peça.",
        updateDate: "10 de Outubro de 2023",
        categoria: "Educativo",
        preco: "Grátis",
        version: "1.0.0",
        androidVersion: "15 ou superior",
        icon: "logos/pp.webp", // Atualizado com o caminho do código 1
        screenshots: [
            "logos/pp.webp",
            "logos/pp.webp",
            "logos/pp.webp"
        ],
        downloadLink: "https://exemplo.com/download/pecaporeca"
    },
    MathAttack: {
        title: "MathAttack",
        developer: "Desenvolvedor do MathAttack",
        description: "Descrição do MathAttack.",
        updateDate: "10 de Outubro de 2023",
        categoria: "Educativo",
        preco: "Grátis",
        version: "1.0.0",
        androidVersion: "15 ou superior",
        icon: "logos/ma.webp", // Atualizado com o caminho do código 1
        screenshots: [
            "logos/ma.webp",
            "logos/ma.webp",
            "logos/ma.webp"
        ],
        downloadLink: "https://exemplo.com/download/mathattack"
    },
    "Dalton’s Game": {
        title: "Dalton’s Game",
        developer: "Desenvolvedor do Dalton’s Game",
        description: "Descrição do Dalton’s Game.",
        updateDate: "10 de Outubro de 2023",
        categoria: "Educativo",
        preco: "Grátis",
        version: "1.0.0",
        androidVersion: "14 ou superior",
        icon: "logos/dg.jpg", // Atualizado com o caminho do código 1
        screenshots: [
            "logos/dg.jpg",
            "logos/dg.jpg",
            "logos/dg.jpg"
        ],
        downloadLink: "https://exemplo.com/download/daltonsgame"
    },
    "Milenyum Math Navigator": {
        title: "Milenyum Math Navigator",
        developer: "Desenvolvedor do Milenyum Math Navigator",
        description: "Descrição do Milenyum Math Navigator.",
        updateDate: "10 de Outubro de 2023",
        categoria: "Educativo",
        preco: "Grátis",
        version: "1.0.0",
        androidVersion: "14 ou superior",
        icon: "logos/mmn.png", // Atualizado com o caminho do código 1
        screenshots: [
            "logos/mmn.png",
            "logos/mmn.png",
            "logos/mmn.png"
        ],
        downloadLink: "https://exemplo.com/download/milenymathnavigator"
    },
    "Geometric Shapes in Space": {
        title: "Geometric Shapes in Space",
        developer: "Desenvolvedor do Geometric Shapes in Space",
        description: "Descrição do Geometric Shapes in Space.",
        updateDate: "10 de Outubro de 2023",
        categoria: "Educativo",
        preco: "Grátis",
        version: "1.0.0",
        androidVersion: "14 ou superior",
        icon: "logos/gss.png", // Atualizado com o caminho do código 1
        screenshots: [
            "logos/gss.png",
            "logos/gss.png",
            "logos/gss.png"
        ],
        downloadLink: "https://exemplo.com/download/geometricshapesinspace"
    },
    "Neon - Jogo de Soma": {
        title: "Neon - Jogo de Soma",
        developer: "Desenvolvedor do Neon - Jogo de Soma",
        description: "Descrição do Neon - Jogo de Soma.",
        updateDate: "10 de Outubro de 2023",
        categoria: "Educativo",
        preco: "Grátis",
        version: "1.0.0",
        androidVersion: "14 ou superior",
        icon: "logos/njs.jpg", // Atualizado com o caminho do código 1
        screenshots: [
            "logos/njs.jpg",
            "logos/njs.jpg",
            "logos/njs.jpg"
        ],
        downloadLink: "https://exemplo.com/download/neonjogodesoma"
    },
    "Números nas Estrelas": {
        title: "Números nas Estrelas",
        developer: "Desenvolvedor do Números nas Estrelas",
        description: "Descrição do Números nas Estrelas.",
        updateDate: "10 de Outubro de 2023",
        categoria: "Educativo",
        preco: "Grátis",
        version: "1.0.0",
        androidVersion: "14 ou superior",
        icon: "logos/ne.png", // Atualizado com o caminho do código 1
        screenshots: [
            "logos/ne.png",
            "logos/ne.png",
            "logos/ne.png"
        ],
        downloadLink: "https://exemplo.com/download/numerosnasestrelas"
    },
    GamaMath: {
        title: "GamaMath",
        developer: "Desenvolvedor do GamaMath",
        description: "Descrição do GamaMath.",
        updateDate: "10 de Outubro de 2023",
        categoria: "Educativo",
        preco: "Grátis",
        version: "1.0.0",
        androidVersion: "8.1 ou superior",
        icon: "logos/gm.png", // Atualizado com o caminho do código 1
        screenshots: [
            "logos/gm.png",
            "logos/gm.png",
            "logos/gm.png"
        ],
        downloadLink: "https://exemplo.com/download/gamamath"
    },
    "Elementos Geométricos": {
        title: "Elementos Geométricos",
        developer: "Desenvolvedor do Elementos Geométricos",
        description: "Descrição do Elementos Geométricos.",
        updateDate: "10 de Outubro de 2023",
        categoria: "Educativo",
        preco: "Grátis",
        version: "1.0.0",
        androidVersion: "8.1 ou superior",
        icon: "logos/eg.png", // Atualizado com o caminho do código 1
        screenshots: [
            "logos/eg.png",
            "logos/eg.png",
            "logos/eg.png"
        ],
        downloadLink: "https://exemplo.com/download/elementosgeometricos"
    },
    "Oxe e as Vogais": {
        title: "Oxe e as Vogais",
        developer: "Desenvolvedor do Oxe e as Vogais",
        description: "Descrição do Oxe e as Vogais.",
        updateDate: "10 de Outubro de 2023",
        categoria: "Educativo",
        preco: "Grátis",
        version: "1.0.0",
        androidVersion: "8.1 ou superior",
        icon: "logos/ov.jpg", // Atualizado com o caminho do código 1
        screenshots: [
            "logos/ov.jpg",
            "logos/ov.jpg",
            "logos/ov.jpg"
        ],
        downloadLink: "https://exemplo.com/download/oxeeasvogais"
    },
    "Funções Orgânicas": {
        title: "Funções Orgânicas",
        developer: "Desenvolvedor do Funções Orgânicas",
        description: "Descrição do Funções Orgânicas.",
        updateDate: "10 de Outubro de 2023",
        categoria: "Educativo",
        preco: "Grátis",
        version: "1.0.0",
        androidVersion: "9 ou superior",
        icon: "logos/fo.webp", // Atualizado com o caminho do código 1
        screenshots: [
            "logos/fo.webp",
            "logos/fo.webp",
            "logos/fo.webp"
        ],
        downloadLink: "https://exemplo.com/download/funcoesorganicas"
    },
    "Aprendendo Letras e Números": {
        title: "Aprendendo Letras e Números",
        developer: "Desenvolvedor do Aprendendo Letras e Números",
        description: "Descrição do Aprendendo Letras e Números.",
        updateDate: "10 de Outubro de 2023",
        categoria: "Educativo",
        preco: "Grátis",
        version: "1.0.0",
        androidVersion: "10 ou superior",
        icon: "logos/gg.webp", // Atualizado com o caminho do código 1
        screenshots: [
            "logos/gg.webp",
            "logos/gg.webp",
            "logos/gg.webp"
        ],
        downloadLink: "https://exemplo.com/download/aprendendoletrasenumeros"
    },
    "To Be or Not To Be": {
        title: "To Be or Not To Be",
        developer: "Desenvolvedor do To Be or Not To Be",
        description: "Descrição do To Be or Not To Be.",
        updateDate: "10 de Outubro de 2023",
        categoria: "Educativo",
        preco: "Grátis",
        version: "1.0.0",
        androidVersion: "9 ou superior",
        icon: "logos/tb.webp", // Atualizado com o caminho do código 1
        screenshots: [
            "logos/tb.webp",
            "logos/tb.webp",
            "logos/tb.webp"
        ],
        downloadLink: "https://exemplo.com/download/tobeornottobe"
    },
    "Quiz Math": {
        title: "Quiz Math",
        developer: "Desenvolvedor do Quiz Math",
        description: "Descrição do Quiz Math.",
        updateDate: "10 de Outubro de 2023",
        categoria: "Educativo",
        preco: "Grátis",
        version: "1.0.0",
        androidVersion: "8 ou superior",
        icon: "logos/qm.webp", // Atualizado com o caminho do código 1
        screenshots: [
            "logos/qm.webp",
            "logos/qm.webp",
            "logos/qm.webp"
        ],
        downloadLink: "https://exemplo.com/download/quizmath"
    },
    "Charadas da Matemática": {
        title: "Charadas da Matemática",
        developer: "Desenvolvedor do Charadas da Matemática",
        description: "Descrição do Charadas da Matemática.",
        updateDate: "10 de Outubro de 2023",
        categoria: "Educativo",
        preco: "Grátis",
        version: "1.0.0",
        androidVersion: "14 ou superior",
        icon: "logos/cm.webp", // Atualizado com o caminho do código 1
        screenshots: [
            "logos/cm.webp",
            "logos/cm.webp",
            "logos/cm.webp"
        ],
        downloadLink: "https://exemplo.com/download/charadasdamatematica"
    },
    "Informática para Concursos": {
        title: "Informática para Concursos",
        developer: "Desenvolvedor do Informática para Concursos",
        description: "Descrição do Informática para Concursos.",
        updateDate: "10 de Outubro de 2023",
        categoria: "Educativo",
        preco: "Grátis",
        version: "1.0.0",
        androidVersion: "9 ou superior",
        icon: "logos/ic.webp", // Atualizado com o caminho do código 1
        screenshots: [
            "logos/ic.webp",
            "logos/ic.webp",
            "logos/ic.webp"
        ],
        downloadLink: "https://exemplo.com/download/informaticaparaconcursos"
    },
    "Técnico Agrícola IFBAIANO-SBF": {
        title: "Técnico Agrícola IFBAIANO-SBF",
        developer: "Desenvolvedor do Técnico Agrícola IFBAIANO-SBF",
        description: "Descrição do Técnico Agrícola IFBAIANO-SBF.",
        updateDate: "10 de Outubro de 2023",
        categoria: "Educativo",
        preco: "Grátis",
        version: "1.0.0",
        androidVersion: "14 ou superior",
        icon: "logos/ta.webp", // Atualizado com o caminho do código 1
        screenshots: [
            "logos/ta.webp",
            "logos/ta.webp",
            "logos/ta.webp"
        ],
        downloadLink: "https://exemplo.com/download/tecnicoagricolaifbaiano"
    },
    "Campus IFBAIANO": {
        title: "Campus IFBAIANO",
        developer: "Desenvolvedor do Campus IFBAIANO",
        description: "Descrição do Campus IFBAIANO.",
        updateDate: "10 de Outubro de 2023",
        categoria: "Educativo",
        preco: "Grátis",
        version: "1.0.0",
        androidVersion: "11 ou superior",
        icon: "logos/if.webp", // Atualizado com o caminho do código 1
        screenshots: [
            "logos/if.webp",
            "logos/if.webp",
            "logos/if.webp"
        ],
        downloadLink: "https://exemplo.com/download/campusifbaiano"
    },
    "Brasil: UF e Bandeiras": {
        title: "Brasil: UF e Bandeiras",
        developer: "Desenvolvedor do Brasil: UF e Bandeiras",
        description: "Descrição do Brasil: UF e Bandeiras.",
        updateDate: "10 de Outubro de 2023",
        categoria: "Educativo",
        preco: "Grátis",
        version: "1.0.0",
        androidVersion: "8.1 ou superior",
        icon: "logos/br.webp", // Atualizado com o caminho do código 1
        screenshots: [
            "logos/br.webp",
            "logos/br.webp",
            "logos/br.webp"
        ],
        downloadLink: "https://exemplo.com/download/brasilufebandeiras"
    },
    "Técnico Informática IFBAIANO": {
        title: "Técnico Informática IFBAIANO",
        developer: "Desenvolvedor do Técnico Informática IFBAIANO",
        description: "Descrição do Técnico Informática IFBAIANO.",
        updateDate: "10 de Outubro de 2023",
        categoria: "Educativo",
        preco: "Grátis",
        version: "1.0.0",
        androidVersion: "8.1 ou superior",
        icon: "logos/ti.webp", // Atualizado com o caminho do código 1
        screenshots: [
            "logos/ti.webp",
            "logos/ti.webp",
            "logos/ti.webp"
        ],
        downloadLink: "https://exemplo.com/download/tecnicoinformaticaifbaiano"
    },
    "Cursos do IFBAIANO - SBF": {
        title: "Cursos do IFBAIANO - SBF",
        developer: "Desenvolvedor do Cursos do IFBAIANO - SBF",
        description: "Descrição do Cursos do IFBAIANO - SBF.",
        updateDate: "10 de Outubro de 2023",
        categoria: "Educativo",
        preco: "Grátis",
        version: "1.0.0",
        androidVersion: "13 ou superior",
        icon: "logos/cif.webp", // Atualizado com o caminho do código 1
        screenshots: [
            "logos/cif.webp",
            "logos/cif.webp",
            "logos/cif.webp"
        ],
        downloadLink: "https://exemplo.com/download/cursosdoifbaianosbf"
    },
    "Comunidades Quilombolas Bonfim": {
        title: "Comunidades Quilombolas Bonfim",
        developer: "Desenvolvedor do Comunidades Quilombolas Bonfim",
        description: "Descrição do Comunidades Quilombolas Bonfim.",
        updateDate: "10 de Outubro de 2023",
        categoria: "Educativo",
        preco: "Grátis",
        version: "1.0.0",
        androidVersion: "14 ou superior",
        icon: "logos/cqb.webp", // Atualizado com o caminho do código 1
        screenshots: [
            "logos/cqb.webp",
            "logos/cqb.webp",
            "logos/cqb.webp"
        ],
        downloadLink: "https://exemplo.com/download/comunidadesquilombolasbonfim"
    },
    "Introdução à Computação": {
        title: "Introdução à Computação",
        developer: "Desenvolvedor do Introdução à Computação",
        description: "Descrição do Introdução à Computação.",
        updateDate: "10 de Outubro de 2023",
        categoria: "Educativo",
        preco: "Grátis",
        version: "1.0.0",
        androidVersion: "14 ou superior",
        icon: "logos/icc.webp", // Atualizado com o caminho do código 1
        screenshots: [
            "logos/icc.webp",
            "logos/icc.webp",
            "logos/icc.webp"
        ],
        downloadLink: "https://exemplo.com/download/introducaoacomputacao"
    },
    "Técnico Alimentos IFBAIANO-SBF": {
        title: "Técnico Alimentos IFBAIANO-SBF",
        developer: "Desenvolvedor do Técnico Alimentos IFBAIANO-SBF",
        description: "Descrição do Técnico Alimentos IFBAIANO-SBF.",
        updateDate: "10 de Outubro de 2023",
        categoria: "Educativo",
        preco: "Grátis",
        version: "1.0.0",
        androidVersion: "14 ou superior",
        icon: "logos/tal.webp", // Atualizado com o caminho do código 1
        screenshots: [
            "logos/tal.webp",
            "logos/tal.webp",
            "logos/tal.webp"
        ],
        downloadLink: "https://exemplo.com/download/tecnicoalimentosifbaianosbf"
    },
    "Licenciatura em Computação IFBAIANO": {
        title: "Licenciatura em Computação IFBAIANO",
        developer: "Desenvolvedor do Licenciatura em Computação IFBAIANO",
        description: "Descrição do Licenciatura em Computação IFBAIANO.",
        updateDate: "10 de Outubro de 2023",
        categoria: "Educativo",
        preco: "Grátis",
        version: "1.0.0",
        androidVersion: "13 ou superior",
        icon: "logos/lic.webp", // Atualizado com o caminho do código 1
        screenshots: [
            "logos/lic.webp",
            "logos/lic.webp",
            "logos/lic.webp"
        ],
        downloadLink: "https://exemplo.com/download/licenciaturaemcomputacaoifbaiano"
    }
};
// Inicialização do Swiper
const swiper = new Swiper('.swiper', {
    loop: false, // Permite rolagem infinita
    slidesPerView: 'auto', // Ajusta automaticamente o número de slides visíveis
    spaceBetween: 10, // Espaçamento entre os slides
    centeredSlides: true, // Centraliza os slides
    navigation: {
        nextEl: '.swiper-button-next', // Botão de próxima imagem
        prevEl: '.swiper-button-prev', // Botão de imagem anterior
    },
    pagination: {
        el: '.swiper-pagination', // Paginação (pontos)
        clickable: true, // Permite clicar nos pontos para navegar
    },
    breakpoints: {
        // Configurações responsivas
        320: {
            slidesPerView: 1, // 1 slide em telas pequenas
        },
        768: {
            slidesPerView: 2, // 2 slides em telas médias
        },
        1024: {
            slidesPerView: 3, // 3 slides em telas grandes
        },
    },
});
// Função para carregar os detalhes do app
function loadAppData() {
    const urlParams = new URLSearchParams(window.location.search);
    const appId = decodeURIComponent(urlParams.get('app')); // Decodifica o nome do app

    if (apps[appId]) {
        const app = apps[appId];

        // Preenche os detalhes do app
        document.getElementById('app-title').textContent = app.title;
        document.getElementById('app-developer').textContent = app.developer;
        document.getElementById('app-description').textContent = app.description;
        document.getElementById('update-date').textContent = app.updateDate;
        document.getElementById('app-categoria').textContent = app.categoria;
        document.getElementById('app-preco').textContent = app.preco;
        document.getElementById('app-version').textContent = app.version;
        document.getElementById('android-version').textContent = app.androidVersion;
        document.getElementById('app-icon').src = app.icon;

        // Preenche os slides do Swiper
        const swiperWrapper = document.querySelector('.swiper-wrapper');
        swiperWrapper.innerHTML = ''; // Limpa os slides existentes
        app.screenshots.forEach((screenshot) => {
            const slide = document.createElement('div');
            slide.classList.add('swiper-slide');
            slide.innerHTML = `<img src="${screenshot}" alt="Screenshot">`;
            swiperWrapper.appendChild(slide);
        });

        // Configura o botão de instalação
        const installButton = document.getElementById('install-button');
        if (app.downloadLink) {
            installButton.href = app.downloadLink; // Define o link de download
            installButton.style.display = 'block'; // Mostra o botão
        } else {
            installButton.style.display = 'none'; // Oculta o botão se não houver link
        }

        // Reinicializa o Swiper após adicionar os slides
        swiper.update();
    } else {
        document.getElementById('app-title').textContent = "App não encontrado";
        document.getElementById('install-button').style.display = 'none'; // Oculta o botão
    }
}

// Carrega os dados do app ao abrir a página
window.onload = loadAppData;