    // var letters = "abcdefghijklmnopqrstuvwxyz' ".split("");
    var answers = ["computer", "screen", "mouse", "paint", "file", "save", "delete", "app", "program", "windows"];

    var guess = [];
    var incorrect = [];
    var letterSpace = [];
    var answerKey = [];

    var guessLimit = 7; 
    var wins = 0;
    var loss = 0;
    var guesskey = 0;

    var wordPick = "";
    var userText = "";
    // = answers[Math.floor(Math.random() * answers.length)];
    // var lettersLeft = wordPick.length;
    var letterTexts = false;
    var gameActive = true;

    var guessUpdate = document.getElementById("guess");
    var winUpdate = document.getElementById("wins");
    var lossUpdate = document.getElementById("loss");
    var underScore = document.getElementById("test");
    var incorrectText = document.getElementById("incorrect");


function update(){
    winUpdate.innerHTML = "Wins: " + wins;
    lossUpdate.innerHTML = "Losses " + loss;
    guessUpdate.innerHTML = "Number of Guesses Remaining: " + guessLimit;
    underScore.innerHTML = letterSpace.join(" ");
    incorrectText.innerHTML = "Letters Already Guessed: " + incorrect.join(" ");
    // letterSpace = [];
    // incorrect = [];
    // guessLimit = 7
}

  document.onkeyup = function(event){
        var userText = event.key;
       userText = userText.toLowerCase();
         letterTest(userText);
      gameOver(); 
};


// $( function() {
//     $( "#box" ).resizable();
//   } );


function myFunction(event) {
    var x = event.clientX;
    var y = event.clientY;
    var coor = x + ", " + y + "px";
    var footers = document.getElementById("footerText");
    footers.innerHTML = coor;
}

function clearCoor() {
    footers.innerHTML = "";
}


    //  console.log(answers);
    //window.onload = 
function game(){
    
    letterSpace = [];
    incorrect = [];
    guessLimit = 7;
    wordPick = answers[Math.floor(Math.random() * answers.length)];
        guess = wordPick.split("");
    // console.log(guess);
        guesskey = guess.length;
    for (var i = 0; i < guesskey; i++){
        // letterSpace[i] = "_";
        letterSpace.push("_");
    }
    // document.getElementById("answer").innerHTML = answerKey.join(" ");
    //    wins = 0;
    //     loss = 0;
// console.log(guess);
// console.log(guesskey);
// console.log(answers);
// // console.log(answerKey);

// console.log(letterSpace);


       update();
    }

 function gameOver(){
    
update();
//won't work without toString
if (gameActive){
     if(guess.toString() === letterSpace.toString()){
         wins++;
         winUpdate.innerHTML = "Wins: " + wins;
         alert("You won! The word was " + letterSpace.join(""));
        game();
     }
     else if(guessLimit === 0){
         loss++;
     alert("You lost, please try again.");
    lossUpdate.innerHTML = "Losses: " + loss;
         game();

        //  gameActive = false;
     }}
 }

//  function myFunc(theObject)

// function commentTest(yes){
//     yes.color = "orange";
  
// }
// var colorList = {color: "blue"};
// var a, b;

// b = colorList.color;
// console.log(b);
// commentTest(colorList);
// a = colorList.color;
// console.log(a);

 function letterTest(testing){
    // if (event.keyCode >= 65 && event.keyCode <= 90) {
//  if (event.keyCode >= 97 && event.keyCode <= 122) {

for (var i = 0; i <= guesskey; i++){
if (wordPick[i] === testing){
  letterTexts = true;

     }
    }
    if (letterTexts){
    for (i = 0; i < guesskey; i++){
        if (wordPick[i] === testing){
            letterSpace[i] = testing;
            
        }
  
 }}
    // if(wordPick[i]) 
    else {
        // letterTexts = false;
        incorrect.push(testing);
          guessLimit--;
          //Game won't count losses after a win
    } 
    incorrectText.innerHTML = "Letters Already Guessed: " + incorrect.join(" ");
 
    // console.log(letterSpace);
    update();
   
 }

// }
    
 

//           if(letterTexts){
//             for (var i = 0; i < guesskey; i++){
//           if (wordPick[i] === testing){
//               letterSpace[i].testing;
//           }
//           }
// }


// <!-- 
//     function gameOver();
//     {
//         resultUpdate();
//         if
//         win++;
//         else
//   loss++;
//     }

//     function resultUpdate{

//     } -->

    // console.log(answers, letters);


//     function winCheck(){
//         if (guessLimit === 0){
//             alert("You lost :/");
//         }
//         else if(wordPick === answerKey){
//         alert("You won!")
//     }
//     }
game();

  
// if(wordPick.indexOf)

//         winCheck();
//     });
