// UI
const checkbox = document.getElementById("toggle"),
        slider = document.getElementById("slider");

const standard  = document.querySelector('.standard');
const extended   = document.querySelector('.extended');
const premium = document.querySelector('.premium');

// Event Listener 
slider.addEventListener('click', ()=>{
    // console.log("kdf");

    if(!checkbox.checked){
        standard.innerText = 1180;
        extended.innerText = 2300;
        premium.innerText = 7000;
    }else{
        // innerText ll ya tl 
        [standard.textContent,extended.textContent,premium.textContent] = [19,199,599];
    }
});

// function changecolor(color){
//     document.body.style.background = color;
// }

// function dayMode(){
//     changecolor('gray');
// }
// slider.addEventListener('click', dayMode);

// Start button Notification
const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messages = [
    'Thank You for your purchase <3',
    'Vist our website for more info !',
    'Good Luck !',
    'Have a nice day !',
    'May God bless you !'
];


button.addEventListener('click', ()=>createnotification());
function createnotification(){

    const notify = document.createElement('div');
    notify.classList.add('toast');
    notify.innerText = getrandommessage();

    toasts.appendChild(notify);

    setTimeout(() => {
        notify.remove();
    }, 5000);

}

function getrandommessage(){
    return messages[Math.floor(Math.random()*messages.length)];
}



// Navigation bar
const openbtn = document.querySelector('.open-btn');
const closebtn = document.querySelector('.close-btn');
const navs = document.querySelectorAll('.nav');

console.log(navs);

openbtn.addEventListener('click', ()=>{
    navs.forEach(nav=>nav.classList.add('visible'));
});

closebtn.addEventListener('click', ()=>{

    navs.forEach((nav)=>{
        nav.classList.remove('visible');
    })
});