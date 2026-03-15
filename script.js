let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess(){

let guess = Number(document.getElementById("guessInput").value);

attempts++;

if(guess > randomNumber){
    document.getElementById("message").innerText = "Too High ⬆️";
}
else if(guess < randomNumber){
    document.getElementById("message").innerText = "Too Low ⬇️";
}
else{
    document.getElementById("message").innerText = "Correct Guess 🎉";
}

document.getElementById("attempts").innerText = "Attempts: " + attempts;

}

function resetGame(){

randomNumber = Math.floor(Math.random() * 100) + 1;
attempts = 0;

document.getElementById("message").innerText = "";
document.getElementById("attempts").innerText = "Attempts: 0";
document.getElementById("guessInput").value = "";

}