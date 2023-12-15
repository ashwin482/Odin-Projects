
function randomSelection(){
    const rand1 = Math.round(Math.random()*2);
    let output;
    switch(rand1) {
        case 0:
        output = "Rock";
        break;
        case 1:
        output = "Paper";
        break;
        case 2:
        output = "Scissors";
        break;
    }

    return output;
}




function playRound (playerSelection,computerSelection){
    console.log('p '+playerSelection);
    console.log('c '+computerSelection);

    if (playerSelection === computerSelection)
    return "It's a tie!";

    if (

        ( playerSelection === "Rock" && computerSelection === "Scissors") ||
        ( playerSelection === "Scissors" && computerSelection == "Paper") ||
        ( playerSelection === "Paper" && computerSelection == "Rock") 

     
    )
    return "Player wins";

    if (

        ( computerSelection === "Rock" && playerSelection === "Scissors") ||
        ( computerSelection === "Scissors" && playerSelection == "Paper") ||
        ( computerSelection === "Paper" && playerSelection == "Rock") 

     
    )

    return "Computer wins";


}


const rockBtn = document.getElementById("btn1");
const paperBtn = document.getElementById("btn2");
const scissorsBtn = document.getElementById("btn3");

rockBtn.addEventListener("click", () => handleClick("Rock"));
paperBtn.addEventListener("click", () => handleClick("Paper"));
scissorsBtn.addEventListener("click", () => handleClick("Scissors"));


function handleClick(playerSelection1)
{
    const computerSelection1 = randomSelection();
    const resultDiv = document.getElementById("result");
    resultDiv.innerText = playRound(playerSelection1,computerSelection1);
}