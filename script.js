let num = Math.floor(Math.random() * 100) + 1;
console.log(num)
let body = document.body
document.getElementById("guessButton").addEventListener("click", function(){
    const userGuess = parseInt(document.getElementById("guessInput").value);
    const resultMessage = document.getElementById("resultMessage");

    if (!userGuess || userGuess < 1 || userGuess > 100){
    resultMessage.textContent = "not cool, its illegal"
    }
    else{
    if (userGuess === num){
resultMessage.textContent = "amazing"
body.style.background= "green" 

    }

    else if (userGuess > num){
        resultMessage.textContent = "too big"
        body.style.background= "red" 
    }

    else{
        resultMessage.textContent = "too small"
        body.style.background= "red" 
    }

    }
 

})


