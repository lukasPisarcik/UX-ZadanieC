
let arrowJoin = document.querySelector('#joinArrow');
let dialogJoin = document.querySelector('#join');
let closeJoin = document.querySelector('#joinClose');

arrowJoin.addEventListener('click', ()=>{
    dialogJoin.showModal();
});

closeJoin.addEventListener('click', ()=>{
    dialogJoin.close();
})