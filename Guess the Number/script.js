let x = Math.floor (Math.random() * 101);

let guess = 1;

document.getElementById("submitguess").onclick = function() {
    var y =  document.getElementById("inputField").value;
    if (guess <= 5){

        if (x == y){
            alert("You have guessed correctly")
    } 
        else if (x>y){
            alert("Guess a higher number.")
            guess++;
    }
   
        else if (x<y){
            alert("Guess a lower number.")
            guess++;}}

    else{
        alert("Sorry you have run out of guesses")
}
}