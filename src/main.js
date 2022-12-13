
let arrowJoin = document.querySelector('#joinArrow');
let dialogJoin = document.querySelector('#join');
let closeJoin = document.querySelector('#joinClose');

let arrowProfile = document.querySelector('#profileArrow');
let dialogProfile = document.querySelector('#profileSettings');
let closeProfile = document.querySelector('#profileClose');

let dialogHistory = document.querySelector('#testHistory');
let arrowHistory = document.querySelector('#historyArrow');
let closeHistory = document.querySelector('#historyClose');


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
});

// quiz history
arrowHistory.addEventListener('click', ()=>{
    dialogHistory.showModal();
})

closeHistory.addEventListener('click', ()=>{
    dialogHistory.close();
});