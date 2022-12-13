
let arrowJoin = document.querySelector('#joinArrow');
let dialogJoin = document.querySelector('#join');
let closeJoin = document.querySelector('#joinClose');

let arrowProfile = document.querySelector('#profileArrow');
let dialogProfile = document.querySelector('#profileSettings');
let closeProfile = document.querySelector('#profileClose');

let dialogHistory = document.querySelector('#testHistory');
let arrowHistory = document.querySelector('#historyArrow');
let closeHistory = document.querySelector('#historyClose');

let arrowCreate = document.querySelector('#createArrow');
let dialogCreate = document.querySelector('#createQuiz');
let closeCreate = document.querySelector('#createClose');

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

// create quiz
arrowCreate.addEventListener('click', ()=>{
    dialogCreate.showModal();
});

closeCreate.addEventListener('click', ()=>{
    dialogCreate.close();
});