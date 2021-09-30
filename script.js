//choose a random object from the gameItems for computer's play
function computerPlay(){
    const items = ["rock", "paper","scissor"]
    return items[Math.floor(Math.random() * items.length)]
}

//asking the user to input his choice
function playerPlay(){
    while(1){
        let selected = window.prompt("Choose among rock paper scissor ")
        
        if(selected === null){
            //checking if the prompt was cancelled
            alert("Cannot be submitted blank")
            continue
        }

        selected = selected.toLowerCase().trim()

        if(selected === "rock" || selected === "paper" || selected ==="scissor"){
            //checking if the right text has been entered
            return selected
        }

        alert("Enter corrext choice")
    }

}


//funtion to play a round
// 0 -> player lost, 1->match tied, 2->player won

function playRound(playerSelection, computerSelection){

    //first checking for a tie, then checking for individial test cases

    if(playerSelection === computerSelection){
        console.log(`Its a Tie!! You both chose ${playerSelection}`)
        return 1
    }else if(playerSelection === "rock"){
        if(computerSelection === "paper"){
            console.log(`You lose!! ${computerSelection} beats ${playerSelection}`)
            return 0
        }else{
            console.log(`You win!! ${playerSelection} beats ${computerSelection}`)
            return 2
        }
    } else if(playerSelection === "paper"){
        if(computerSelection === "scissor"){
            console.log(`You lose!! ${computerSelection} beats ${playerSelection}`)
            return 0
        }else{
            console.log(`You win!! ${playerSelection} beats ${computerSelection}`)
            return 2
        }
    }else{
        if(computerSelection === "rock"){
            console.log(`You lose!! ${computerSelection} beats ${playerSelection}`)
            return 0
        }else{
           console.log(`You win!! ${playerSelection} beats ${computerSelection}`)
           return 2
        }

    }
}


//function to play 5 rounds of the game and decide the winner
function game(){
    console.log("Lets play rock paper scissor")
    let playerScore = 0
    let computerScore = 0
    let flag =0 //each round keeps track of the value returned by the playRound
    for(let i=1; i<=5; i++){
        const playerSelection = playerPlay()
        const computerSelection = computerPlay()
        console.log(`For round ${i}, Player chose ${playerSelection} and computer chose ${computerSelection}`)
        console.log(`Result of round ${i} are : `)
        flag = playRound(playerSelection, computerSelection)
        if(flag === 0){
            computerScore +=2
        }else if(flag === 2){
            playerScore +=2
        }else{
            computerScore+=1
            playerScore+=1
        }
        console.log(`Player score = ${playerScore} \nComputer score = ${computerScore}\n`)
    }

    if(playerScore > computerScore){
        console.log("The player has won")
    }else if(playerScore < computerScore){
        console.log("The computer has won")
    }else{
        console.log("Its a tie, nobody won")
    }
}

game()


