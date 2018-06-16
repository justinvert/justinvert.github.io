// Variables needed to keep track of which answers are correct

// Start button needed to initiate the game

// Page shows questions and clickable options

// Timer added to entire page

// Submit button needed to check answers

// Function to check which answers were right and which answers were wrong - Displays on screen


    //
    var counters =  document.getElementById("counter");
    var checkActive = 0;
    var correctAnswer3 = true;
    var correctAnswer4 = true;
// var countdownstart = false;
//    var counterHTML = document.getElementById("counter").style.display = 'none';
    var quiz1 = ["CMLL (Mexico)","NJPW (Japan)","WWE (US)", "Impact Wrestling (Canada)"];
    var quiz2 = ["WWE (US)","Impact Wrestling (Canada)","ROH (US)"];
    var quiz3 = ["Korakuen Hall","The Tokyo Dome","Osaka-Jo Hall", "Madison Square Garden"];
    var quiz4 = ["Florida Championship Wrestling","Deep South Wrestling","Ohio Valley Wrestling", "NXT"];

    var countdown = 120;
 

    document.getElementById("question").addEventListener("click", startGame);

    function startGame(){
       fullGame();
       counting();
       quiz();
       
       var countFast = setInterval(counting, 1000);
    //  var clickCounter = document.getElementById("counter").style.display = 'inline';
       onClick = this.style.display = 'none';
    }
    
    function fullGame(){
        document.getElementById("start").innerHTML = "<div style='display:inline;'>Pro-Wrestling Trivia Quiz</div>";
       
     
    }
    
    function counting(){
    //    countdownstart = true; 
   
        if (countdown > 0){

        countdown--;
       counters.innerHTML = "Time Remaining: " + countdown + " seconds";
}

else if (countdown = 0){
    clearInterval(counting);
    disable();
    // return quizCheck();

}
else {
        clearInterval(counting);
    
        disable();
              document.getElementById("start").innerHTML = "Thank you for playing.";
              return quizCheck();
         }
         
        
    }

function disable(){
  document.getElementById('submitbutton').setAttribute("disabled", "disabled");
  document.getElementById('a').setAttribute("disabled", "disabled");
  document.getElementById('b').setAttribute("disabled", "disabled");
  document.getElementById('c').setAttribute("disabled", "disabled");
  document.getElementById('d').setAttribute("disabled", "disabled");
  document.getElementById('a2').setAttribute("disabled", "disabled");
  document.getElementById('b2').setAttribute("disabled", "disabled");
  document.getElementById('c2').setAttribute("disabled", "disabled");
  document.getElementById('a3').setAttribute("disabled", "disabled");
  document.getElementById('b3').setAttribute("disabled", "disabled");
  document.getElementById('c3').setAttribute("disabled", "disabled");
  document.getElementById('d3').setAttribute("disabled", "disabled");
  document.getElementById('aNew').setAttribute("disabled", "disabled");
  document.getElementById('bNew').setAttribute("disabled", "disabled");
  document.getElementById('cNew').setAttribute("disabled", "disabled");
  document.getElementById('dNew').setAttribute("disabled", "disabled");
}

    function quiz(){
        document.getElementById("question1").innerHTML = 
        "<b>" + "Which choice below is currently the oldest wrestling promotion in existence?" + " </b>" +"</br>" +
        "<form id ='quiz' name = 'quiz'>" +
        "<input type='radio' name='firstQuestion' value='A' id='a' />" + quiz1[0]  +
        "<input type='radio' name='firstQuestion' value='B' id='b' />"  + quiz1[1]  +
        "<input type='radio' name='firstQuestion' value='C' id='c' />"  + quiz1[2]  +
        "<input type='radio' name='firstQuestion' value='D' id='d' />"  + quiz1[3]  +
        "</form>" ;

         document.getElementById("question2").innerHTML = 
        "<b>" + "Which promotion currently uses a 20 count when the competitors leave the ring?" + " </b>" +"</br>" +
        "<form id ='quiz2' name = 'quiz2'>" +
        "<input type='radio' name='secondQuestion' value='A' id='a2' />"  + quiz2[0]  +
        "<input type='radio' name='secondQuestion' value='B' id='b2' />"  + quiz2[1] +
        "<input type='radio' name='secondQuestion' value='C' id='c2' />"  + quiz2[2] +
        "</form>" ;

           document.getElementById("question3").innerHTML = 
        "<b>" + "New Japan Pro-Wrestling hosts a show every January 4th in:" + " </b>" +"</br>" +
        "<form id ='quiz3' name = 'quiz3'>" +
        "<input type='radio' name='thirdQuestion' value='A' id='a3' />"  + quiz3[0]  +
        "<input type='radio' name='thirdQuestion' value='B' id='b3' />"  + quiz3[1] +
        "<input type='radio' name='thirdQuestion' value='C' id='c3' />"  + quiz3[2] + 
        "<input type='radio' name='thirdQuestion' value='D' id='d3' />"  + quiz3[3] +
        "</form>" ;

          document.getElementById("question4").innerHTML = 
        "<b>" + "In 2018, WWE's developmental brand uses the name:" + " </b>" +"</br>" +
        "<form id ='quiz4' name = 'quiz4'>" +
        "<input type='radio' name='fourthQuestion' value='A' id='aNew' />"  + quiz4[0]  +
        "<input type='radio' name='fourthQuestion' value='B' id='bNew' />"  + quiz4[1] +
        "<input type='radio' name='fourthQuestion' value='C' id='cNew' />"  + quiz4[2] +
        "<input type='radio' name='fourthQuestion' value='D' id='dNew' />"  + quiz4[3] +'<br>' +
        "<input type='submit' name='submit' value='Submit' id='submitbutton' onclick='quizCheck()' />"  +
        "</form>" ;

        // document.getElementById("testAnswers").innerHTML = quiz1;
      
      
 }
    function quizCheck(){
      
        var correctAnswer1 = document.quiz.firstQuestion.value;
        var correctAnswer2 = document.quiz2.secondQuestion.value;
        var correctAnswer3 = document.quiz3.thirdQuestion.value;
        var correctAnswer4 = document.quiz4.fourthQuestion.value;
        var correct = 0;
        if (correctAnswer1 === "A"){
            // console.log("Correct");
            document.getElementById("testAnswers").innerHTML = quiz1[0] + " is the correct answer!";
            document.getElementById("question1").style.color = 'green';
            correct++;
   
    }

   if (correctAnswer1 === "B"){
        document.getElementById("testAnswers").innerHTML = quiz1[1] + " is incorrect.";
        document.getElementById("question1").style.color = 'red';
     
    }

      if (correctAnswer1 === "C"){
        document.getElementById("testAnswers").innerHTML = quiz1[2] + " is incorrect.";
        document.getElementById("question1").style.color = 'red';
   
    }

          if (correctAnswer1 === "D"){
        document.getElementById("testAnswers").innerHTML = quiz1[2] + " is incorrect.";
        document.getElementById("question1").style.color = 'red';
   
    }

if (correctAnswer2 === "A"){
            // console.log("Correct");
            document.getElementById("testAnswers2").innerHTML = quiz2[0] + " is incorrect.";
            document.getElementById("question2").style.color = 'red';
            
   
    }

   if (correctAnswer2 === "B"){
        document.getElementById("testAnswers2").innerHTML = quiz2[1] + " is incorrect.";
        document.getElementById("question2").style.color = 'red';
     
    }

      if (correctAnswer2 === "C"){
        document.getElementById("testAnswers2").innerHTML = quiz2[2] + " is the correct answer!";
        document.getElementById("question2").style.color = 'green';
        correct++;
   
    }

    if (correctAnswer3 === "A"){
            // console.log("Correct");
            document.getElementById("testAnswers3").innerHTML = quiz3[0] + " is incorrect.";
            document.getElementById("question3").style.color = 'red';
            
   
    }

   if (correctAnswer3 === "B"){
      document.getElementById("testAnswers3").innerHTML = quiz3[1] + " is the correct answer!";
        document.getElementById("question3").style.color = 'green';
        correct++;
     
    }

      if (correctAnswer3 === "C"){
      
       document.getElementById("testAnswers3").innerHTML = quiz3[2] + " is incorrect.";
        document.getElementById("question3").style.color = 'red';
    }

     if (correctAnswer3 === "D"){
        document.getElementById("testAnswers3").innerHTML = quiz3[3] + " is incorrect.";
        document.getElementById("question3").style.color = 'red';
   
    }

     if (correctAnswer4 === "A"){
            // console.log("Correct");
            document.getElementById("testAnswers4").innerHTML = quiz4[0] + " is incorrect.";
            document.getElementById("question4").style.color = 'red';
            
   
    }

   if (correctAnswer4 === "B"){
      document.getElementById("testAnswers4").innerHTML = quiz4[1] + " is incorrect.";
        document.getElementById("question4").style.color = 'red';
     
    }

      if (correctAnswer4 === "C"){
      
       document.getElementById("testAnswers4").innerHTML = quiz4[2] + " is incorrect.";
        document.getElementById("question4").style.color = 'red';
    }

     if (correctAnswer4 === "D"){
      
     document.getElementById("testAnswers4").innerHTML = quiz4[3] + " is the correct answer!";
        document.getElementById("question4").style.color = 'green';
        correct++;
    }
    else{
        document.getElementById("question1").style.color = 'red';

        document.getElementById("question2").style.color = 'red';

        document.getElementById("question3").style.color = 'red';

        document.getElementById("question4").style.color = 'red';

      
        
    }

document.getElementById("stats").innerHTML = correct + " out of 4 correct!";
    stopCount();
    disable();
    document.getElementById("retry").innerHTML = 
    "<form id ='quizReset' name = 'quizReset'>" +
        "<input type='submit' name='retry' value='Retry' id='retrybutton' onclick='quiz()' />" +
        "</form"
    }

    function stopCount(){
        countdown = 0;
        counters.innerHTML = "";
        document.getElementById("start").innerHTML = "<div style='display:inline;'>Pro-Wrestling Trivia Quiz</div>";

    }

    // function quizReveal(){
    //     document.getElementById("testAnswers").innerHTML ="Yes";
    // }
