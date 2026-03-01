let randomNumber = Math.floor(Math.random() * 21)


const checkBtn = document.querySelector(`.check`);
const messageEl = document.querySelector(`.message`);
const againbutton = document.querySelector(`.again`);
let score = Number(document.querySelector('.score').textContent);
let highScore = Number(document.querySelector('.highscore').textContent);



checkBtn.addEventListener(`click`, function() {
  const guess = Number(document.querySelector('.guess').value);   
  console.log('Guess:', guess, typeof guess);

  if (!guess) {
    messageEl.textContent = 'No number 🚫';
    return;
  }
  if(score <= 0)
    {
        messageEl.textContent = '💥 You lost the game!';
            document.querySelector('body').style.backgroundColor = 'red';

        return;
    }
if(guess > randomNumber)
    {
        messageEl.textContent = ' number is to high ↗️';
         score = score -1;
    document.querySelector('.score').textContent = score;
    }
    
else if(guess < randomNumber)
    {
        messageEl.textContent = ' number is to low ↘️';
        
    score = score -1;
    document.querySelector('.score').textContent = score;
    } 
else
    {
    messageEl.textContent = ' correct✅';
    document.querySelector(`body`).style.backgroundColor=`green`;
    if(score>highScore){
   highScore = score; 
      document.querySelector('.highscore').textContent = highScore;} 
      document.querySelector(`.number`).textContent=randomNumber;
    }
});

againbutton.addEventListener(`click`, function() {
        randomNumber = Math.floor(Math.random() * 21); 
        messageEl.textContent = 'Start guessing...';
        score = 20;
        document.querySelector('.score').textContent = score
        document.querySelector('body').style.backgroundColor = '#222'; 
        document.querySelector('.guess').value = ''; 
        document.querySelector(`.number`).textContent=`?`;

});

