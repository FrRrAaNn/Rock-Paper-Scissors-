const computerChoiceDisplay = document.getElementById("computer-choice")
const userChoiceDisplay = document.getElementById("user-choice")
const resultDisplay = document.getElementById("result")
const possibleChoices = document.querySelectorAll("button")
const countResult = document.getElementById("countRounds")
let userChoice
let computerChoice 
let result 
let count = 0;


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id 
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) +1
    console.log(randomNumber)

    if (randomNumber === 1) {
        computerChoice = "rock"
    }

    if (randomNumber === 2) {
        computerChoice = "scissors"
    }

    if (randomNumber === 3) {
        computerChoice = "paper"
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice){
        result = "It's a draw!"
    }
    if (computerChoice === "rock" && userChoice === "paper"){
        result = "You Win!!"
    }
    if (computerChoice === "rock" && userChoice === "scissors"){
        result = "You Lose"
    }
    if (computerChoice === "paper" && userChoice === "scissors"){
        result = "You Win!!"
    }
    if (computerChoice === "paper" && userChoice === "rock"){
        result = "You Lose"
    }
    if (computerChoice === "scissors" && userChoice === "rock"){
        result = "You Win"
    }
    if (computerChoice === "scissors" && userChoice === "paper"){
        result = "You Lose"
    }
    resultDisplay.innerHTML = result
    
}
 
function ah(){
    possibleChoices.addEventListener("click", count++, true);
    countResult.innerHTML = count
}


//I am lost 

//display the running score, and announce a winner of the game once one player reaches 5 points.
// maybe use count++; 

//In out new UI the player should be able to play the game by clicking on buttons rather than typing their answer in a prompt. 
// a. for now remove the logic that plays exactly five rounds 
//b. create three buttons, one for each selection. Add an event listener to the buttons that call your playRounds function with the correct playersSelection everytime a button is clicked. (you can keep the console.logs from this step)
//c. add a div for displaying results and change all of your console.logs into DOM methods
//d. display the running score, and announce a winner of the game once the player reaches 5 points 
//e. you will likely have to refactor (rework/rewrite)your orignal code to make it work for this. thats okay! reworking old code is an important part of a programmers life. 
//f. once youre all done with your UI and made sure everythings satisfactory commit your changes to the rps-ui branch 

//Now lets take a look at how we can merge the changes from our rps-ui branch back to our main branch 
//a. checkout the branch we want to merge INTO i.e. main with the commit git checkout main
//b. now lets merge our rps-ui branch into main, our current branch, with git merge rps-ui
//c. if everything goes fine, our rps-ui branch is now successfully merged with main! Use git log and youll see all the commits youve made to your feature branch on top of the commits you made to the main branch. Now for our final step! 
//d. let push our main branch into our remote repo by running git push orgin main. Go to your Github repo and youll see that our main branch will have all the changes and commits you made to the rpe-ui branch. Congratulations! youve successfully pushed your first feature into your production branch! 
//e. now that we have all our code in the main branch, we dont really need our rps-ui branch anymore. lets do some cleanup, both locally and in the remote repo. Delete the branch from our local repo with git branch -d rps-ui and also delete it from the remote repo on GitHub with git push --delete origin rps-ui. Congrats, were all done with our cleanup! 
