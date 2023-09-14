import inquirer from 'inquirer';
let chance = 0;
let GeneratedNum = Math.round(Math.random() * 10);
for (let i = 0; i < 3; i++) {
    let userInput = await inquirer.prompt({
        message: 'Guess the Number between 1-10',
        type: 'number',
        name: 'Guessing'
    });
    if (userInput.Guessing == GeneratedNum) {
        console.log('congrats you win with' + chance + "attempt");
        break;
    }
    else {
        console.log('try again');
    }
    chance++;
}
console.log('You loss this game');
console.log(GeneratedNum);
// console.log("Congrats You Win with "+ chance + "attempt")
