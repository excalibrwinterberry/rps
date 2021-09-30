let playerScore = 0
let computerScore = 0

const score = document.querySelector("#score")
score.textContent = `player score: ${playerScore}   computer score: ${computerScore}`


const outcome = document.querySelector("#outcome")


const res = document.querySelector("#result")

const buttons = [...document.querySelectorAll(".playerMove")]
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

document.querySelector("#reset").addEventListener("click", ()=>{
    playerScore = 0
    computerScore = 0
    score.textContent = `player score: ${playerScore}   computer score: ${computerScore}`
    outcome.textContent = ''
    res.textContent = ''
    buttons.forEach((btn) => {
        btn.disabled = false
    })

})

//funtion to play a round
// 0 -> player lost, 1->match tied, 2->player won

function playRound(playerSelection, computerSelection){
    // console.log(`Player chose ${playerSelection} and computer chose ${computerSelection}`)

    const p = document.createElement('p')
    let status = `Player chose ${playerSelection} and computer chose ${computerSelection} ==> `
    let resultGame = 0
    //first checking for a tie, then checking for individial test cases

    if(playerSelection === computerSelection){
        status += `Its a Tie!! You both chose ${playerSelection}`
        resultGame= 1
    }else if(playerSelection === "rock"){
        if(computerSelection === "paper"){
            status += `You lose!! ${computerSelection} beats ${playerSelection}`
            resultGame= 0
        }else{
            status += `You win!! ${playerSelection} beats ${computerSelection}`
            resultGame= 2
        }
    } else if(playerSelection === "paper"){
        if(computerSelection === "scissor"){
            status += `You lose!! ${computerSelection} beats ${playerSelection}`
            resultGame= 0
        }else{
            status += `You win!! ${playerSelection} beats ${computerSelection}`
            resultGame= 2
        }
    }else{
        if(computerSelection === "rock"){
            status += `You lose!! ${computerSelection} beats ${playerSelection}`
            resultGame= 0
        }else{
           status += `You win!! ${playerSelection} beats ${computerSelection}`
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
    const result = (computerScore > playerScore) ? "Computer won" : "player won"

    outcome.textContent = result

    buttons.forEach((btn) => {
        btn.disabled = true
    })
}



