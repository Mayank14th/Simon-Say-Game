let gameseq=[];
let userseq=[];
let btns=["red","green","yellow","purple"];
let h3=document.querySelector("h3");


let started=false;
let level=0;

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game has started");
        started=true;
        levelup();
    }
});
function flashbtn(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);
}
function levelup(){
    userseq=[];
    level++;
    h3.innerText=`Level ${level}`;

    let randidx=Math.floor(Math.random()*3);
    let randcolor=btns[randidx];
    let randbtn=document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);
    flashbtn(randbtn);
}

function checkans(idx){
   
    if(gameseq[idx]===userseq[idx]){
        if(userseq.length==gameseq.length){
           setTimeout(levelup,500);
        }
    }else{
        h3.innerHTML=`Game over! Your score was <b>${level}</b> <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}
function btnpress(){
    let btn=this;
    flashbtn(btn);

    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);
    checkans(userseq.length-1);
}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}

