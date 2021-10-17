

    // abrir e fechar menu hamburger
function menuClick(){
    let menu=document.querySelector('.menu');

    if(menu.style.right == '-100vw'){
        menu.style.right = '-0vw';
    }else{
        menu.style.right = '-100vw';
    }
}





function clickLogin(){
    let bodyClass = document.querySelector('body').classList;
    if(bodyClass == "sign-up-js"){
        document.querySelector('body').classList.remove('sign-up-js');
        document.querySelector('body').classList.add('sign-in-js');
    }else{
        document.querySelector('body').classList.remove('sign-in-js');
        document.querySelector('body').classList.add('sign-up-js');
    }
}

