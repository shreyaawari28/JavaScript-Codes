// Create a game where you start with a random game number. 
// Ask the user to keep guessing the game number until the user enters correct value

let game_number = 28;
let i =1;
var user_ip = prompt("Guess game number")
let check = (game_number==user_ip);

if(check == true){
    alert("Hurray !! You guessed the number right");
}
else{
    while( game_number!=user_ip)
    {
        
       user_ip=prompt("Oops ! Wrong guess. Try again");
       i++;
    }
alert("Hurray !! You guessed the number right");
}

 


