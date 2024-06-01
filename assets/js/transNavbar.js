var nav = document.querySelector('nav');

window.addEventListener('scroll', function(){
    if(window.pageYOffset > 50){
        nav.classList.add('bg-red', 'shadow');
    } else {
        nav.classList.remove('bg-red', 'shadow')
    }
})