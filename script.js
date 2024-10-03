/* 
create a function that makes the computer choose 
and return its choice
*/


/*
make the user enter its choice that is case insesetive

*/

/*
create a function that takes users choice and 
compare it to the computer's choice and return 
the winner
*/
let humanScore = 0;
let computerScore = 0;
/*
f
} 
    */

function playGame() {
    function getComputerChoice() {
        const choices = ["rock", "paper", "scissors"]
        const randomIndex = Math.floor(Math.random() * 3)
        let computerChoice = choices[randomIndex]
        console.log(computerChoice)
        return computerChoice;
    }
    // console.log(getComputerChoice())
    
    function getHumanChoice() {
    
        let choice = prompt("Enter your choice (rock, paper or scissors): ").toLowerCase()
    
        while(!["rock", "paper", "scissors"].includes(choice)){
            choice = prompt("Invalid choice. Please enter rock, paper , or scissors:").toLowerCase();
        }
        console.log(choice);
        return choice;
        
    }
    //console.log(getHumanChoice());
    const computer = getComputerChoice();
    const human = getHumanChoice();
    
    function winner(computer,human){
    if (computer === human) {
        console.log("its a tie");
    }
        
    
    if ((human === "rock" && computer === "scissors")
        ||
       ( human === "paper" && computer === "rock")
        ||
       (human === "scissors" && computer === "paper")
    ) { 
        humanScore++;
        console.log("You win!");
    
    }
    else {
        computerScore++;
        console.log("Computer wins!");
    } 
    }
    winner(computer,human);
    
}

for(let i =0 ; i<5 ; i++) {
playGame()
   }
   console.log("you won " + humanScore + " times");
   console.log("Computer won " + computerScore +" times.")