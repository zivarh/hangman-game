const letters = "abcdefghijklmnopqrstuvwxyz";
let lettersArray = Array.from(letters);

let lettersContainer = document.querySelector(".letters");

lettersArray.forEach(letter => {

  let span = document.createElement("span");
  let theLetter = document.createTextNode(letter);
  span.appendChild(theLetter);
  span.className = 'letter-box';
  lettersContainer.appendChild(span);

});


const words = {
  programming: ["php", "javascript", "html", "css","r", "mysql", "python"],
  movies: ["Prestige", "Inception", "Parasite", "Interstellar", "Whiplash", "Memento", "Coco", "Up"],
  countries: ["Azerbaijan", "Russian", "Netherland", "Italy", "France"],
  items:["apple", "banana", "pen", "phone", "book", "buble"]
}



let allKeys = Object.keys(words);


let randomPropNumber = Math.floor(Math.random() * allKeys.length);

let randomPropName = allKeys[randomPropNumber];

let randomPropValue = words[randomPropName];

let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);

let randomValueValue = randomPropValue[randomValueNumber];


document.querySelector(".game-info .category span").innerHTML = randomPropName;

let lettersGuessContainer = document.querySelector(".letters-guess");


let lettersAndSpace = Array.from(randomValueValue);

lettersAndSpace.forEach(letter => {

 
  let emptySpan = document.createElement("span");

  if (letter === ' ') {

   
    emptySpan.className = 'with-space';

  }

  lettersGuessContainer.appendChild(emptySpan);

});


let guessSpans = document.querySelectorAll(".letters-guess span");


let wrongAttempts = 0;


let theDraw = document.querySelector(".hangman-draw");


document.addEventListener("click", (e) => {

  let theStatus = false;

  if (e.target.className === 'letter-box') {

    e.target.classList.add("clicked");

    
    let theClickedLetter = e.target.innerHTML.toLowerCase();

  
    let theChosenWord = Array.from(randomValueValue.toLowerCase());

    theChosenWord.forEach((wordLetter, WordIndex) => {
      if (theClickedLetter == wordLetter) {

       
        theStatus = true;

      
        guessSpans.forEach((span, spanIndex) => {

          if (WordIndex === spanIndex) {

            span.innerHTML = theClickedLetter;

          }

        });

      }

    });

   
    if (theStatus !== true) {

     
      wrongAttempts++;


      theDraw.classList.add(`wrong-${wrongAttempts}`);

      if (wrongAttempts === 8) {

        endGame();

        lettersContainer.classList.add("finished");

      }

    } else {

      
      lettersContainer.classList.add("successed");

    }

  }

});

function endGame() {


  let div = document.createElement("div");

 
  let divText = document.createTextNode(`Game Over, The Word Is ${randomValueValue}`);


  div.appendChild(divText);


  div.className = 'popup';

 
  document.body.appendChild(div);

}