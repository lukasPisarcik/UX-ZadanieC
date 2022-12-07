
let arrowJoin = document.querySelector('#joinArrow');
let dialogJoin = document.querySelector('#join');
let closeJoin = document.querySelector('#joinClose');

let arrowProfile = document.querySelector('#profileArrow');
let dialogProfile = document.querySelector('#profileSettings');
let closeProfile = document.querySelector('#profileClose');


// join quiz
arrowJoin.addEventListener('click', ()=>{
    dialogJoin.showModal();
});

closeJoin.addEventListener('click', ()=>{
    dialogJoin.close();
})

// profile settings
arrowProfile.addEventListener('click', ()=>{
    dialogProfile.showModal();
});

closeProfile.addEventListener('click', ()=>{
    dialogProfile.close();
})