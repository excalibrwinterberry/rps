let playerScore = 0
let computerScore = 0

const score = document.querySelector("#score")
score.textContent = `player score: ${playerScore}   computer score: ${computerScore}`

const buttons = [...document.querySelectorAll("button")]
buttons.forEach((btn)=> {
    btn.addEventListener("click", (e)=>{
        const outcome = playRound(e.target.getAttribute("id"), computerPlay())
        if(outcome === 2){
            playerScore +=1
        }else if(outcome === 0){
            computerScore +=1
        }

        score.textContent = `player score: ${playerScore}   computer score: ${computerScore}`

        if(playerScore ===5 || computerScore === 5){
            gameOutcome()
        }
    })
})

//funtion to play a round
// 0 -> player lost, 1->match tied, 2->player won

function playRound(playerSelection, computerSelection){
    // console.log(`Player chose ${playerSelection} and computer chose ${computerSelection}`)

    const res = document.querySelector("#result")
    const p = document.createElement('p')
    let status = ''
    let resultGame = 0
    //first checking for a tie, then checking for individial test cases

    if(playerSelection === computerSelection){
        status = `Its a Tie!! You both chose ${playerSelection}`
        resultGame= 1
    }else if(playerSelection === "rock"){
        if(computerSelection === "paper"){
            status = `You lose!! ${computerSelection} beats ${playerSelection}`
            resultGame= 0
        }else{
            status = `You win!! ${playerSelection} beats ${computerSelection}`
            resultGame= 2
        }
    } else if(playerSelection === "paper"){
        if(computerSelection === "scissor"){
            status = `You lose!! ${computerSelection} beats ${playerSelection}`
            resultGame= 0
        }else{
            status = `You win!! ${playerSelection} beats ${computerSelection}`
            resultGame= 2
        }
    }else{
        if(computerSelection === "rock"){
            status = `You lose!! ${computerSelection} beats ${playerSelection}`
            resultGame= 0
        }else{
           status = `You win!! ${playerSelection} beats ${computerSelection}`
           resultGame= 2
        }

    }

    p.textContent = status
    res.appendChild(p)

    return resultGame



}

//choose a random object from the gameItems for computer's play
function computerPlay(){
    const items = ["rock", "paper","scissor"]
    return items[Math.floor(Math.random() * items.length)]
}

function gameOutcome(){
    const outcome = document.querySelector("#outcome")
    let result = ''

    if(computerScore > playerScore){
        result = "Computer won"
    }else{
        result = "Player won"
    }

    outcome.textContent = result

    buttons.forEach((btn) => {
        btn.disabled = true
    })
}



