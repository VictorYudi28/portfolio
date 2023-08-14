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

// hover tech //

const boxTech = document.querySelectorAll('.ability-widget');

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
                        }
                    }
                }
            }
        }
    }

}

// Animation Scroll // 

const observer = new IntersectionObserver( entries => {

    entries[0].target.classList.add('init-hidden-off');

}, {
    threshold: [0, .5, 1]
});

Array.from(document.querySelectorAll('.init-hidden'));

Array.from(document.querySelectorAll('.init-hidden')).forEach( element => {
    observer.observe(element);
});







