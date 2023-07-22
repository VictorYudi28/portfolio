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








