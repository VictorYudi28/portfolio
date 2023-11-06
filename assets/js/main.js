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
    }

    

];

const containerAbility = document.querySelector('.container-ability');

arrayObjetosHabilidades.forEach( objetoHabilidade => {
    
    containerAbility.innerHTML += `
    
    <div class="ability-widget" data-name-tech="html">
        <i class="${objetoHabilidade.iconClass}"></i>
        <h2 class="title-tech">${objetoHabilidade.nomeTecnologia}</h2>
    </div>

    `

});

// hover tech //

const boxTech = document.querySelectorAll('.ability-widget');
let nameTech = ["html","css","javascript","java","git","github","bootstrap"]

boxTech.forEach( element => {
    
    element.addEventListener('mouseover', (e)=> {
        
        trocaCor(e.target); 

    });  

})

function trocaCor(elementoClicado){
    const titleBoxTech = elementoClicado.querySelector('.title-tech');

    if(titleBoxTech.textContent.toLowerCase() === 'html'){
        titleBoxTech.classList.add('color-html');
    }else{
        if(titleBoxTech.textContent.toLowerCase() === 'css'){
            titleBoxTech.classList.add('color-css');
        }else{
            if(titleBoxTech.textContent.toLowerCase() === 'javascript'){
                titleBoxTech.classList.add('color-javascript');
            }else{
                if(titleBoxTech.textContent.toLowerCase() === 'java'){
                    titleBoxTech.classList.add('color-java');
                }else{
                    if(titleBoxTech.textContent.toLowerCase() === 'git'){
                        titleBoxTech.classList.add('color-git');
                    }else{
                        if(titleBoxTech.textContent.toLowerCase() === 'github'){
                            titleBoxTech.classList.add('color-github');
                        }else{
                            if(titleBoxTech.textContent.toLowerCase() === 'bootstrap'){
                                titleBoxTech.classList.add('color-bootstrap');
                            }
                        }
                    }
                }
            }
        }
    }

}

// objetos projetos

const arrayObjetosProjetos = [

    {
        titulo: "Projeto Spotify",
        tecnologiasUtilizadas: "Feito com HTML e CSS <br> responsivo",
        imagem: "FotoCloneSpotify.png",
        altImagem: "Foto do projeto: Clone Spotify",
        linkGitHub: "https://github.com/VictorYudi28/cloneSpotify"
    },

    {
        titulo: "Projeto Netflix",
        tecnologiasUtilizadas: "Feito com HTML e CSS <br> responsivo",
        imagem: "FotoCloneNetflix.png",
        altImagem: "Foto do projeto: Clone Netflix",
        linkGitHub: "https://github.com/VictorYudi28/cloneNetflix"
    },

    {
        titulo: "Projeto Calculadora IMC",
        tecnologiasUtilizadas: " Feito em HTML , CSS e <br> JS ",
        imagem: "FotoCalculaImc.png",
        altImagem: "Foto do projeto: Calculadora IMC",
        linkGitHub: "https://github.com/VictorYudi28/calculadoraIMC"
    },

    {
        titulo: "Projeto Drone",
        tecnologiasUtilizadas: " Feito em HTML , CSS , Bootstrap e <br> JS ",
        imagem: "FotoProjetoDrone.png",
        altImagem: "Foto do projeto: Drone",
        linkGitHub: "https://github.com/VictorYudi28/projetoDrone"
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

// Download cv

const btnCv = document.querySelector('.btn-cv');

btnCv.setAttribute('href','./assets/cv/CV Victor Yudi Abe de Almeida.pdf');
btnCv.setAttribute('download','CV Victor Yudi Abe de Almeida.pdf');








