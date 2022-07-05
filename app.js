let scoreBoard = document.querySelector("input[type = number]");
let firstButton = document.getElementById("btnPlayer1");
let secondButton = document.querySelector("#btnPlayer2");
let resetButton = document.querySelector("#btnReset");
let firstPlayerScore = document.getElementById("spanPlayer1");
let secondPlayerScore = document.getElementById("spanPlayer2");
let result = document.getElementsByTagName("h1")[0];
let finalResult = document.getElementsByTagName("h1")[1];
let note = document.getElementById("note");
let targetScore = scoreBoard.value;

scoreBoard.addEventListener("change", () => {

            targetScore = scoreBoard.value;

           if (targetScore <= 0) {
                alert("You have entered a negative number. Target score will be set to 10");
                targetScore = 10; 
                scoreBoard.value = 10;
            }
                });

        firstButton.addEventListener("click", () => {
               
            if (firstPlayerScore.innerText == targetScore - 1) {
                result.innerText = "Player-1 won!";
                firstPlayerScore.innerText = targetScore;
                firstPlayerScore.style.color = "green";
                secondPlayerScore.style.color = "red";
                finalResult.style.textAlign = "center";
                firstButton.disabled = true;
                firstButton.style.cursor = "not-allowed";
                secondButton.disabled = true;
                secondButton.style.cursor = "not-allowed";
                scoreBoard.disabled = true; 
                resetButton.disabled = false;
                resetButton.style.cursor = "pointer";
                note.style.visibility = "visible";
                return;
            }

            let score1 = Number(firstPlayerScore.innerText);
            score1 += 1;
            firstPlayerScore.innerText = score1;
        });

        secondButton.addEventListener("click", increaseByOne);

        function increaseByOne() {

            if (secondPlayerScore.innerText == targetScore - 1) {
                result.innerText = "Player-2 won!";
                secondPlayerScore.innerText = targetScore;
                secondPlayerScore.style.color = "green";
                firstPlayerScore.style.color = "red";
                finalResult.style.textAlign = "center";
                firstButton.disabled = true;
                firstButton.style.cursor = "not-allowed";
                secondButton.disabled = true;
                secondButton.style.cursor = "not-allowed";
                scoreBoard.disabled = true;
                resetButton.disabled = false;
                resetButton.style.cursor = "pointer";
                note.style.visibility = "visible";
                return;
            }

            let score2 = +(secondPlayerScore.innerText);
            score2 += 1;
            secondPlayerScore.innerText = score2;
        }

        resetButton.addEventListener("click", () => {
            if (targetScore <= 0) {
                targetScore = 10;
            }
            firstPlayerScore.innerText = 0;
            secondPlayerScore.innerText = 0;
            result.innerText = "Scores";
            firstButton.disabled = false;
            secondButton.disabled = false;
            firstButton.style.cursor = "pointer";
            secondButton.style.cursor = "pointer";
            firstPlayerScore.style.color = "black";
            secondPlayerScore.style.color = "black";
            scoreBoard.removeAttribute("disabled");
            resetButton.disabled = true;
            resetButton.style.cursor = "not-allowed";
            note.style.visibility = "visible";
        });