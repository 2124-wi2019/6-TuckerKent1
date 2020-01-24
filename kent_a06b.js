/*
Tucker Kent
kent_a06b.js
19WI_INFO 2124_WW - Online - Javascript I
Thoendel
24 January 2020
*/

const standardInput = process.stdin;
standardInput.setEncoding('utf-8');

const story = 
    `You're walking along Dodge Street minding your own business
and your suddenly run into the Wizard of Benson standing
in on the corner of 50th and Dodge.

Do you (C)ontinue walking? (S)top and ask for some magical help?
(T)rip and fall into a pot hole?
`;

clearScreen();
console.log(story);

standardInput.on('data', function(text) {
    //This line will remove line breaks 
    //\n\r in window, \r in macOS
    text = text.replace('\n', '').replace('\r', '');
    /* WRITE YOUR SOLUTION BETWEEN THIS LINE */
if(text === "c" || text === "C"){ // OR logical operator used to process either case of c
    clearScreen(); // calling clearScreen method -- clearing screen prior to response
    console.log(`You non-challantly walk past the Wizard of Benson with the smug 
confidence of a person who don't need no stinkin' Wizard, lest the 
Wizard of Benson.`); //logging response of "c/C" to console
    console.log("\n");
    endGame(); // calling endGame method to display game over
} else if (text === "s" || text === "S") { // OR logical operator used to process either case of s
    clearScreen(); // calling clearScreen method -- clearing screen prior to response
    console.log(`You walk up to the Wizard, hands sweaty with anticipation. As 
you approach, you note the Wizard is wearing a Hawkeyes hat. Your disappointment 
proves more powerful than your desire to engage a Wizard, and instead you 
turn left to buy a nice, warm Runza.`); // logging response for "s/S" to console
    console.log("\n");
    endGame(); // calling endGame method to display game over
} else if (text === "t" || text === "T") { //OR logical operator used to process either case of t
    clearScreen(); // calling clearScreen method -- clearing screen prior to response
    console.log(`You begin approaching the Wizard, hands sweaty with anticipation, 
mouth dry from general dehydration. As you take one step forward, you place 
your entire weight upon the forward leg but your foot fails to make contact 
with solid ground. As the entirety of your uncontrolled body's weight continues 
forward and downward simultaneously, your mind begins considering what 
precisely the $50,000 increase in your home's assessment and matching tax 
increase is paying for.`); // logging response for "t/T" to console
    console.log("\n");
    endGame(); //calling endGame method to display game over
} else {
    clearScreen(); // calling clearScreen method -- clearing screen prior to response
    console.log(`The Wizard watches as you approach. Determining you're not 
cool enough to hang with him, the Wizard smugly smiles and 
walks into a vape shop. You blew your chance.`); //outputting any other possible response to console
    console.log("\n");
    endGame(); // calling endGame method to display game over
}
    /* AND THIS LINE */
});

function endGame() {
    console.log("Game Over\n\n\n");
    process.exit();
}

function clearScreen() {
    console.log('\033[2J');
}