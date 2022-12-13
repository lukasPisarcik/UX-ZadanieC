
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

let createQuizBton = document.querySelector('#createQuizBtn');

let menu = document.querySelector('#menu');
let sidebar = document.querySelector('.sidebar');
let overlay = document.querySelector('.overlay');

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

// popup
createQuizBton.addEventListener('click', ()=>{
    dialogCreate.close();
    popUp();
});

function popUp(){
    if (document.querySelector('.popup') !== null){
        let div = document.querySelector('.popup');
        div.parentNode.removeChild(div);
    }

    let helper = document.createElement('div');
    helper.className = "popup";
    helper.innerHTML = '<div class="popDiv"><img class="close-btn" src="/assets/close.svg" alt="" style="opacity: 0;"><p class="boldText">Quiz created</p><img src="/assets/close.svg" alt=""></div>';
    document.body.appendChild(helper);

    const timeout = setTimeout(() => {
        if(!helper.classList.contains('hide')){
            helper.classList.add('hide');
        }
    }, 5000);

    document.querySelector('.close-btn').addEventListener('click', ()=>{
        helper.classList.add('hide');
        clearTimeout(timeout);
    });
}

// sidebar
menu.addEventListener('click', ()=>{
    sidebar.style.display = 'block';
    overlay.style.display = 'block';
});