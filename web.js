let scoreStr = localStorage.getItem('Score');
        let score;
        resetScore(scoreStr);
        function resetScore(scoreStr) {
            score = scoreStr ? JSON.parse(scoreStr) : {
                win: 0,
                lost: 0,
                tie: 0,
            };
           
            
            score.displayScore = function () {
                return `won : ${score.win}   Lost : ${score.lost}   Tie : ${score.tie}`;   
            };
            showResult();
        }
        

        let computerChoice;
        let resultMsg;
        function gnrtComputerchic() {
            let randomNumber = Math.floor(Math.random() * 3 + 1)
            if (randomNumber > 0 && randomNumber <= 1) {
                computerChoice = 'Bat';
            } else if (randomNumber > 1 && randomNumber <= 2) {
                computerChoice = 'Stump';
            }
            else {
                computerChoice = 'Ball';
            }
        }
        function getResult(userMove, computerMove) {
            if (userMove === 'Bat') {
                if (computerMove === 'Ball') {
                    score.win++;
                    return 'user won the game !';
                } else if (computerMove === 'Bat') {
                    score.tie++;
                    return 'game is tie bhomm ';
                }
                else if (computerMove === 'Stump') {
                    score.lost++;
                    return 'Computer is wonnn the game !';
                }
            }
            else if (userMove === 'Ball') {
                if (computerMove === 'Ball') {
                    score.tie++;
                    return 'game is tie bhomm ';
                } else if (computerMove === 'Bat') {
                    score.lost++;
                    return 'Computer is wonnn the game !';
                }
                else if (computerMove === 'Stump') {
                    score.win++;
                    return 'user won the game !';
                }
            }
            else {
                if (computerMove === 'Ball') {
                    score.win++;
                    return ' user won the game !';
                } else if (computerMove === 'Bat') {
                    score.lost++;
                    return ' Computer is wonnn the game !! ';
                }
                else if (computerMove === 'Stump') {
                    score.tie++;
                    return 'game is tie bhomm';
                }
            }
        }
        function showResult(userMove, computerMove, result) {
            localStorage.setItem('Score', JSON.stringify(score));
            document.querySelector('#user-move').innerText =
                userMove !== undefined ? `My choise is ${userMove}` : ''; 
            document.querySelector('#computer-move').innerText =
                computerMove !== undefined ? `computer Choice is ${computerMove}` : ''; 
            document.querySelector('#result').innerText =
                result !== undefined ? `${result}` : ''; 
            document.querySelector('#score').innerText =`${score.displayScore()}`;

            // alert(`My choise is ${userMove}. computer Choice is ${computerMove}
            // ${result}
            // ${score.displayScore()}
            // `);
        }