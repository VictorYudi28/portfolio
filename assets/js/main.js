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
        iconClass: "fa-brands fa-html5 ability-icon icon-html",
        nomeTecnologia: "HTML"
    },

    {
        iconClass: "fa-brands fa-css3-alt ability-icon icon-css",
        nomeTecnologia: "CSS"
    },

    {
        iconClass: "fa-brands fa-square-js ability-icon icon-js",
        nomeTecnologia: "Javascript"
    },

    {
        iconClass: "fa-brands fa-java ability-icon icon-java",
        nomeTecnologia: "Java"
    },

    {
        iconClass: "fa-brands fa-git-alt ability-icon icon-git",
        nomeTecnologia: "Git"
    },

    {
        iconClass: "fa-brands fa-github ability-icon icon-git-hub",
        nomeTecnologia: "GitHub"
    },

    {
        iconClass: "fa-brands fa-bootstrap ability-icon icon-bootstrap icon-bootstrap",
        nomeTecnologia: "Bootstrap"
    },

    

];

const containerAbility = document.querySelector('.container-ability');

arrayObjetosHabilidades.forEach( objetoHabilidade => {
    
    containerAbility.innerHTML += `
    
    <div class="ability-widget">
        <i class="${objetoHabilidade.iconClass}"></i>
        <h2 class="title-tech">${objetoHabilidade.nomeTecnologia}</h2>
    </div>

    `

});

// hover tech //

const boxTech = document.querySelectorAll('.ability-widget');
let nameTech = ["html","css","javascript","java","git","github","bootstrap"];

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
    }

];

const contProject = document.querySelector('.cont-projects')
console.log(contProject)

arrayObjetosProjetos.forEach( objetoProjeto => {

    contProject.innerHTML += `
    
    <div class="widget-projects">
        <h2>${objetoProjeto.titulo}</h2>
        <p>${objetoProjeto.tecnologiasUtilizadas}</p>
        <img src="./assets/images/${objetoProjeto.imagem}" alt="${objetoProjeto.altImagem}">
        <a href="${objetoProjeto.linkGitHub}" target="_blank">
            <i class="fa-brands fa-github icon-widget"></i>
        </a>
    </div>

    `

})