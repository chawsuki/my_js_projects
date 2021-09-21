// UI
const searchel = document.querySelector('.search'),
      inputel = document.querySelector('.input'),
      btnel = document.querySelector('.btn');


btnel.addEventListener('click', ()=>{
    searchel.classList.toggle('active');
    // for ready cursor 
    inputel.focus();
    
});


const counters = document.querySelectorAll('.counter');
// console.log(counters);

counters.forEach((counter) => {
    // console.log(counter);

    counter.innerText = "0";
    // console.log(counter.getAttribute('data-target'));

    const updatecounter = ()=>{
        // const target = +counter.getAttribute('data-target'));

        const target = Number(counter.getAttribute('data-target'));
        // console.log(typeof target);

        const ctr = +counter.innerText;
        // console.log(typeof ctr);

        const increment = target/100;
        // console.log(increment);

        if(ctr < target){
            counter.innerText =`${Math.ceil(ctr + increment)}`;
            setTimeout(updatecounter,50);
        }
        
    }

    updatecounter();
});


const textel = document.getElementById("text");
const speedel = document.getElementById("speed");
const pgh = "Kim Ji-soo, better known mononymously as Jisoo, is a South Korean singer and actress. She made her debut in August 2016 as a member of the girl group Blackpink under YG Entertainment. ";

// console.log(pgh.length);

// Start from 1st word L 
let idx = 1;
let speed = 1000; // 1000ms = 1s

function autotext(){
    // console.log('heii');

    textel.innerText = pgh.slice(0,idx);
    
    idx++;
    if(idx>pgh.length){
        idx = 1 ;
    }
    
    setTimeout(autotext,speed);
}

autotext();

// Event Listener 
speedel.addEventListener('input', ()=>{
    // console.log(speedel.value);

    speed = 100 / speedel.value;
});