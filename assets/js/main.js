// Menu Mobile //

const menuMobile = document.querySelector('.icon-menu-mob');
const menuMobilelinks = document.querySelector('.menu-mobile-links');

menuMobile.addEventListener('click', () => {

    if(menuMobilelinks.style.display === 'block'){
        menuMobilelinks.style.display = 'none';
    } else{
        menuMobilelinks.style.display = 'block';
    }

});

// Button menu mobile //

const buttonsMenuMobile = document.querySelectorAll('.link-menu-mobile');

for(let c = 0; c < buttonsMenuMobile.length; c++){
    
    buttonsMenuMobile[c].addEventListener('click', () => {
        menuMobilelinks.style.display = 'none';
    });

};



// Header menu //

const headerPage = document.querySelector('header');

document.addEventListener('scroll', () => {
    headerPage.classList.add('pos-fixed');
    headerPage.classList.add('box-shadow-header');
});

// Objetos cards habilidades//

const arrayObjetosHabilidades = [

    {
        srcIcon: "./assets/images/ability-image/html-5-svgrepo-com.svg",
        nomeTecnologia: "HTML"
    },

    {
        srcIcon: "./assets/images/ability-image/css-3-svgrepo-com.svg",
        nomeTecnologia: "CSS"
    },

    {
        srcIcon: "./assets/images/ability-image/js-official-svgrepo-com.svg",
        nomeTecnologia: "Javascript"
    },

    {
        srcIcon: "./assets/images/ability-image/java-svgrepo-com.svg",
        nomeTecnologia: "Java"
    },

    {
        srcIcon: "./assets/images/ability-image/git-svgrepo-com.svg",
        nomeTecnologia: "Git"
    },

    {
        srcIcon: "./assets/images/ability-image/github-142-svgrepo-com.svg",
        nomeTecnologia: "GitHub"
    },

    {
        srcIcon: "./assets/images/ability-image/icons8-bootstrap-480.svg",
        nomeTecnologia: "Bootstrap"
    },
    {
        srcIcon: "./assets/images/ability-image/tailwindcss-icon-svgrepo-com.svg",
        nomeTecnologia: "TailwindCSS"
    },
    {
        srcIcon: "./assets/images/ability-image/typescript-svgrepo-com.svg",
        nomeTecnologia: "Typescript"
    },

    

];

const containerAbility = document.querySelector('.container-ability');

arrayObjetosHabilidades.forEach( objetoHabilidade => {
    
    containerAbility.innerHTML += `
    
    <div class="ability-widget">
        <img src="${objetoHabilidade.srcIcon}" alt="icone tecnologia ${objetoHabilidade.nomeTecnologia}" class="ability-icon">
        <h2 class="title-tech">${objetoHabilidade.nomeTecnologia}</h2>
    </div>

    `

});

// hover tech //

const boxTech = document.querySelectorAll('.ability-widget');
let nameTech = ["html","css","javascript","java","git","github","bootstrap","tailwindcss","typescript"];

boxTech.forEach( element => {

    let techMouseOver;
    
    element.addEventListener('mouseover', (e)=> {
        
        let titleTech = e.currentTarget.querySelector('.title-tech');
        techMouseOver = titleTech.innerText;

        for(let i = 0 ; i < nameTech.length; i++){

            if(nameTech[i] === techMouseOver.toLowerCase()){

                titleTech.classList.add(`color-${nameTech[i]}`);

            }

            element.addEventListener('mouseout',()=>{

                titleTech.classList.remove(`color-${nameTech[i]}`);
        
            })

        }

    });


})

// objetos projetos

const arrayObjetosProjetos = [

    {
        titulo: "Projeto Busca Títulos",
        tecnologiasUtilizadas: " Feito em HTML , CSS , <br> JS e Consumo de API",
        imagem: "FotoProjetoBuscaTitulos.png",
        altImagem: "Foto do projeto: Busca Títulos",
        linkGitHub: "https://github.com/VictorYudi28/projetoBuscaTitulos"
    },

    {
        titulo: "Projeto Calculadora IMC",
        tecnologiasUtilizadas: " Feito em HTML , CSS e <br> JS ",
        imagem: "FotoProjetoCalculadoraImc.png",
        altImagem: "Foto do projeto: Calculadora IMC",
        linkGitHub: "https://github.com/VictorYudi28/calculadoraIMC"
    },

    {
        titulo: "Projeto Relógio",
        tecnologiasUtilizadas: " Feito em HTML , CSS e <br> JS ",
        imagem: "FotoProjetoRelogio.png",
        altImagem: "Foto do projeto: Relógio",
        linkGitHub: "https://github.com/VictorYudi28/projetoRelogio?tab=readme-ov-file"
    },

    {
        titulo: "Projeto Climatempo",
        tecnologiasUtilizadas: " Feito em HTML , CSS , <br> JS , TS e Consumo de API",
        imagem: "FotoProjetoClimatempo.PNG",
        altImagem: "Foto do projeto: Climatempo",
        linkGitHub: "https://github.com/VictorYudi28/climatempo"
    },

    {
        titulo: "Projeto Validador",
        tecnologiasUtilizadas: " Feito em HTML , CSS , <br> JS , TS e TailwindCSS",
        imagem: "FotoProjetoValidador.PNG",
        altImagem: "Foto do projeto: Validador",
        linkGitHub: "https://github.com/VictorYudi28/validador"
    }

];

const contProject = document.querySelector('.cont-projects')
console.log(contProject)

arrayObjetosProjetos.forEach( objetoProjeto => {

    contProject.innerHTML += `
    
    <div class="widget-projects">
        <h2>${objetoProjeto.titulo}</h2>
        <p>${objetoProjeto.tecnologiasUtilizadas}</p>
        <img src="./assets/images/project-image/${objetoProjeto.imagem}" alt="${objetoProjeto.altImagem}">
        <a href="${objetoProjeto.linkGitHub}" target="_blank">
            <i class="fa-brands fa-github icon-widget"></i>
        </a>
    </div>

    `

})