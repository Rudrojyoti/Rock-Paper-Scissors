let userscore=0;
let compscore=0;
// This is the main game logic for Rock, Paper, Scissors
const choices = document.querySelectorAll('.choice');//selecting all the choices
const msg=document.querySelector("#msg");//selecting the message element
const userscorepara=document.querySelector("#user-score");//selecting the user score element
const compscorepara=document.querySelector("#comp-score");//selecting the computer score element
const button=document.querySelector(".button");//selecting the button

let gencompchoice=()=>{//generation of computer choice
    const options=['rock', 'paper', 'scissors'];
    const randidx= Math.floor(Math.random() * 3);//0 to 2 random number generate korbe
    return options[randidx];//random index er choice
};

function drawgame(){//function for draw game
    console.log("It's a draw!");
    msg.innerText = "It's a draw! Please try again.";
    msg.style.backgroundColor = "#081b31";
};

const showwinner=(userwin,userchoice,compchoice)=>{//function for showing winner
    if(userwin===true){
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `You win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compscore++;
        compscorepara.innerText = userscore;
        msg.innerText = `Computer wins! ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
    
};

const playgame = (userchoice) => {//function for playing game - the main deal where the game logic is implemented
    console.log("user choice=", userchoice);
    const compchoice = gencompchoice();
    console.log("computer choice=", compchoice);

    if(userchoice === compchoice){
        drawgame();
    }
    else{
        let userwin=true;
        if(userchoice=== 'rock' && compchoice === 'paper'){
            userwin=false;
        }
        else if(userchoice === 'paper' && compchoice === 'scissors'){
            userwin=false;
        }
        else if(userchoice === 'scissors' && compchoice === 'rock'){
            userwin=false;
        }
        else{
            userwin=true;
        }
    showwinner(userwin,userchoice, compchoice);

    }
    
};

function resetgame(){//function for resetting the game
    userscore = 0;
    compscore = 0;
    userscorepara.innerText = userscore;
    compscorepara.innerText = compscore;
    msg.innerText = "Play your move";
    msg.style.backgroundColor = "#081b31";
}

choices.forEach(choice => {//adding event listener to each choice
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    });
});

button.addEventListener("click",()=>{//adding event listener to the button for resetting the game
    resetgame();
});
