const divToggle = document.querySelector('.toggle');

function changeMenu(){
    const mainSection = document.querySelector('.main');
    mainSection.classList.toggle('active');
    divToggle.classList.toggle('active');
}

divToggle.onclick = changeMenu;
