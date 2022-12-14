const arrowJoin = document.querySelector('#joinArrow');
const dialogJoin = document.querySelector('#join');
const closeJoin = document.querySelector('#joinClose');
const joinBtn = document.querySelector('#joinBtn');

const arrowProfile = document.querySelector('#profileArrow');
const dialogProfile = document.querySelector('#profileSettings');
const closeProfile = document.querySelector('#profileClose');
const profileBtn = document.querySelector('#profileBtn');

const dialogHistory = document.querySelector('#testHistory');
const arrowHistory = document.querySelector('#historyArrow');
const closeHistory = document.querySelector('#historyClose');
const historyBtn = document.querySelector('#historyBtn');

const arrowCreate = document.querySelector('#createArrow');
const dialogCreate = document.querySelector('#createQuiz');
const closeCreate = document.querySelector('#createClose');
const createBtn = document.querySelector('#createBtn');

const createQuizBton = document.querySelector('#createQuizBtn');

const menu = document.querySelector('#menu');
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');
const closeSidebar = document.querySelector('#closeSidebar');


// join quiz
arrowJoin.addEventListener('click', ()=>{
    dialogJoin.showModal();
});

closeJoin.addEventListener('click', ()=>{
    dialogJoin.close();
})

joinBtn.addEventListener('click', ()=>{
    sidebar.style.display = 'none';
    overlay.style.display = 'none';
    dialogJoin.showModal();
});

// profile settings
arrowProfile.addEventListener('click', ()=>{
    dialogProfile.showModal();
});

closeProfile.addEventListener('click', ()=>{
    dialogProfile.close();
});

profileBtn.addEventListener('click', ()=>{
    sidebar.style.display = 'none';
    overlay.style.display = 'none';
    dialogProfile.showModal();
});

// quiz history
arrowHistory.addEventListener('click', ()=>{
    dialogHistory.showModal();
})

closeHistory.addEventListener('click', ()=>{
    dialogHistory.close();
});

historyBtn.addEventListener('click', ()=>{
    sidebar.style.display = 'none';
    overlay.style.display = 'none';
    dialogHistory.showModal();
});

// create quiz
arrowCreate.addEventListener('click', ()=>{
    dialogCreate.showModal();
});

closeCreate.addEventListener('click', ()=>{
    dialogCreate.close();
});

createBtn.addEventListener('click', ()=>{
    sidebar.style.display = 'none';
    overlay.style.display = 'none';
    dialogCreate.showModal();
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

closeSidebar.addEventListener('click', ()=>{
    sidebar.style.display = 'none';
    overlay.style.display = 'none';
});