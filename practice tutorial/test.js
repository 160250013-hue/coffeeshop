let targetnumber = 20;
let guessnumber = 0;
let guessCount = 0;
while (guessnumber !== targetnumber) {
    let userinput = Number(prompt("Guess a number between 1 and 100"));
     if (userinput === null) {
        console.log("Game cancelled by the user.");
        break; 
    }
    guessnumber = userinput;
    guessCount++;
    if (guessnumber < targetnumber){
        console.log("Too low! Try again.");
    } else if (guessnumber > targetnumber){
        console.log("Too high! Try again.");
    } else {
        console.log("Congratulations! You guessed the number.");
    }
}

