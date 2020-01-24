/*
Tucker Kent
kent_a06c.js
19WI_INFO 2124_WW - Online - Javascript I
Thoendel
24 January 2020
*/

//winning numbers: 22, 42, 43, 47, 61;

let lottoPicks = [];
let powerBallPick = getLottoNumber(); 
let winnings = 0; 

/* WRITE YOUR SOLUTION BETWEEN THIS LINE */
let pickCounter = 0; // created pickCounter to iterate while loop and array element position
while (pickCounter < 5){ //while loop to fill lottoPicks array
    lottoPicks[pickCounter] = getLottoNumber(); //filling array element with get getLottoNumber method
    pickCounter++; // postfix increment for iteration variable
}
/* used this for loop and logged powerball to check that everything was working properly

for(const pick of lottoPicks){
    console.log(pick);
}
console.log(`PB - ${powerBallPick}`);*/

for (let i = 0; i < (lottoPicks.length); i++) { //using for loop based on length of lottoPicks array -- in case we wanted to change the size
    switch (lottoPicks[i]) { //switch statement within for loop to check each array element 
        case 22: // defined case
            winnings += 10; // increment winnings with compound operator
            console.log("Matched 22!"); // displaying case match for readablility
            break; // break statement to end switch statement iteration
        case 42: // defined case
            winnings += 10; // increment winnings with compound operator
            console.log("Matched 42!"); // displaying case match for readablility
            break; // break statement to end switch statement iteration
        case 43: // defined case
            winnings += 10; // increment winnings with compound operator
            console.log("Matched 43!"); // displaying case match for readablility
            break; // break statement to end switch statement iteration
        case 47: // defined case
            winnings += 10; // increment winnings with compound operator
            console.log("Matched 47!"); // displaying case match for readablility
            break; // break statement to end switch statement iteration
        case 61: // defined case
            winnings += 10; // increment winnings with compound operator
            console.log("Matched 61!"); // displaying case match for readablility
            break; // break statement to end switch statement iteration
        case powerBallPick: // defined case with variable for power ball
            winnings += 100; // increment winnings with compound operator
            console.log("Matched the PowerBall!"); // displaying case match for readablility
            break;
   } 
}
if (winnings > 0){ // if statement for output based on amount of winnings
    console.log(`Congratulations! You won $${winnings}!`); //displaying for greater than 0 winnings value
}   else {
    console.log(`Sorry, you didn't win anything. Better luck next time!`); // 0 or less winnings value display
} 
/* AND THIS LINE */

function getLottoNumber() {
    //returns a random number between 1 and 100;
    const min = Math.ceil(1);       //Minimum value;
    const max = Math.floor(100);    //Maximum value;
    return Math.floor(Math.random() * (max - min)) + min;
}