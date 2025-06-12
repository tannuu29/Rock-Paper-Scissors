let userScore = 0;
let compScore = 0;
let newBtn = document.querySelector("#new-btn");

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userImg = document.querySelector("#user");
const compImg = document.querySelector("#comp");

const userScorePara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");


const genCompChoice = ()=> {
    const options = ["rock", "paper", "scissors"];
    let randIndx = Math.floor(Math.random()* 3);
    return options[randIndx];
}
// const compChoice = genCompChoice();

const defaultImg = ()=> {
    compImg.src = "./image/loading.gif";
    userImg.src ="./image/loading.gif";
}

const resetGame = ()=> {
    userScore = compScore = 0;
    userScorePara.innerText = "0";
    compScorepara.innerText = "0";
    defaultImg();
    msg.innerText = "Play your move ";
    msg.style.backgroundColor = "#081b31";
}

const drawGame = ()=> {
    // console.log("Game was draw!");
    msg.innerText = "It's a Draw!";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice)=> {
    if(userWin) {
        // console.log("You won!");
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You won! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        // console.log("You lost");
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerText = `You lost, ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const changeCompImg = (compChoice)=> {
    if(compChoice == "rock")
        compImg.src = "./image/rock.png";
    else if(compChoice == "paper")
        compImg.src = "./image/paper.png";
    else
        compImg.src = "./image/scissors.png";
}

const changeUserImg = (userChoice)=>{
    if(userChoice == "rock") {
        userImg.src ="./image/rock.png"
    }
    else if(userChoice == "paper"){
        userImg.src ="./image/paper.png"
    }
    else {   //user ->scissors
        userImg.src ="./image/scissors.png";
    }

}
const playGame = (userChoice)=> {
    // console.log("user choice = ", userChoice);
    const compChoice = genCompChoice();
    // console.log("Comp choice = ", compChoice);

    // defaultImg();
    if(userChoice == compChoice){
        // Game draw
        drawGame();
        changeCompImg(compChoice);
        changeUserImg(userChoice);
    }
    else{
        let userWin = true;
        if(userChoice == "rock") {
            //paper, scissors
            userWin = compChoice == "paper"? false : true;
        }
        else if(userChoice == "paper"){
            //scissors, rock
            userWin = compChoice == "scissors"? false : true;
        }
        else {   //user ->scissors
            //rock, paper
            userWin = compChoice == "rock" ? false : true;
        }
        changeCompImg(compChoice);
        changeUserImg(userChoice);
        showWinner(userWin, userChoice, compChoice);
    }
}
choices.forEach((choice)=> {
    // console.log(choice);
    choice.addEventListener("click", ()=> {
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked", userChoice);
        playGame(userChoice);
    })
})

newBtn.addEventListener("click", resetGame);