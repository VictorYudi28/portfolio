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

// Vídeos Projects //

const videoSpotify = document.getElementById('video-spotify');
const buttonVideoSpotify = document.querySelector('.button-video-spotify');

buttonVideoSpotify.addEventListener('click', () => {
    
   if(videoSpotify.paused){
        videoSpotify.play();
        buttonVideoSpotify.innerHTML = "Pause";
   } else{
        videoSpotify.pause();
        buttonVideoSpotify.innerHTML = "Play";
   }

});

const videoNetlix = document.getElementById('video-netflix');
const buttonVideoNetflix = document.querySelector('.button-video-netflix');

buttonVideoNetflix.addEventListener('click', () => {
    
    if(videoNetlix.paused){
        videoNetlix.play();
        buttonVideoNetflix.innerHTML = "Pause";
    }else{
        videoNetlix.pause();
        buttonVideoNetflix.innerHTML = "Play";
    }
 
});








