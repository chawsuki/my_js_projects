// UI
const getstarted = document.getElementById('getstarted');
const success = document.querySelector('.success');
var inputname = document.getElementById('username').value;
var createemail = document.getElementById('createemail').value;
var createpwd = document.getElementById('createpassword').value;

const homesection = document.querySelector('.homepage'), 
    createsection = document.querySelector('.create'),
    loginsection = document.querySelector('.login'),
	registersection = document.querySelector('.register'),
	forgotsection = document.querySelector('.forgot');

const loginlink = document.querySelector('.login-link'),
	registerlink = document.querySelector('.register-link'),
    createlink = document.querySelector(".create-link"),
	forgotlink = document.querySelector('.forgot-link');

const createbtn = document.getElementById('createbtn'), 
    closebtn = document.querySelector('.close'),
    leftarrow = document.querySelector('.left-arrow');

getstarted.addEventListener('click',()=>{
    homesection.style.display ="none";
    createsection.style.display = "flex";
});


loginlink.addEventListener('click',()=>{
	createsection.style.display = "none";
	loginsection.style.display = "flex";
});

forgotlink.addEventListener('click',()=>{
	loginsection.style.display = "none";
	forgotsection.style.display = "flex";
});

createlink.addEventListener('click', ()=>{
    loginsection.style.display = "none";
    createsection.style.display = "flex";
})

closebtn.addEventListener('click',()=>{
    console.log("ok");
	forgotsection.style.display = "none";
	homesection.style.display = "flex";
});
 
leftarrow.addEventListener('click',()=>{
    createsection.style.display = "none";
    homesection.style.display = "flex";
});

// createbtn.addEventListener('click',(e)=>{
//     createsection.style.display = "none";
//     // success.classList.toggle('success');
//     console.log(inputname);

//     success.innerHTML=`
//     <h1>Congratulations ! ${inputname} ${createemail} ${createpwd} </h1><br>

//     <h3>Log in Success. Welcome to Data Land Technology</h3>
    
//     `;
//     // e.preventDefault();

// });
    
const btns =document.querySelector('.btns');
const btnprimary = document.getElementById('btnprimary');

btnprimary.addEventListener('click', ()=>{
    // console.log("ok");
    btns.classList.toggle('show');
});