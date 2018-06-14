// On click select character needed
// Remaining characters placed into 'Vesus' field
// On click choose an opponent
// Character given option to defend (on click button)
// Opponent's automatically generates defense afterward
// Opponent's HP at zero = new character select


    var win = 0;
    var loss = 0;
    var damage = 0;
    var HP = 100;
    var HPopponent = 100;
    var counter = 10;
    var counter2 = 15;
    var counter3 = 20;

    var opponent1 = false;
    var opponent2 = false;
    var opponent3 = false;
    var opponent4 = false;

    var option1 = Math.floor(Math.random() * 11 + 1);
    var option2 = Math.floor(Math.random() * 11 + 1);
function hidden() {
    $('.opponent1').hide();
}

hidden();

    $(".pick1").click(function() {
        $("#select1").click(function() {
            $('.opponent1').show();
            $('#select2').html("");
            $('#select3').html("");
    $('#select4').html("");
        });

      $("#select2").click(function() {
        $('.opponent1').show();
            $('#select1').html("");
            $('#select3').html("");
    $('#select4').html("");
        });

          $("#select4").click(function() {
            $('.opponent1').show();
            $('#select1').html("");
            $('#select3').html("");
    $('#select2').empty();
        });

          $("#select3").click(function() {
            $('.opponent1').show();
            $('#select2').html("");
            $('#select1').html("");
    $('#select4').html("");
        });
        });
// Opponents ==============================================

          $(".opponent1").click(function() {
        $("#select5").click(function() {
            $('#select6').html("");
            $('#select7').html("");
    $('#select8').html("");
    battle();
        });

      $("#select6").click(function() {
            $('#select5').html("");
            $('#select7').html("");
    $('#select8').html("");
    battle();
        });

          $("#select7").click(function() {
            $('#select5').html("");
            $('#select6').html("");
    $('#select8').empty();
    battle();
        });

          $("#select8").click(function() {
            $('#select5').html("");
            $('#select6').html("");
    $('#select7').html("");
    battle();
        });
    });

    function battle(){
        $(".button").click(function() {
        HP = HP - option1;
        HPopponent = HPopponent - option2;
        // console.log(HP, HPopponent);
        // enable();
        $('#HP').text("Your current HP is: " + HP);
        $('#HPopponent').text("Opponent's current HP is: " + HPopponent);
        if (HP <= 0 && HPopponent > 0){
            $('#total').text("You lost")
            loss++;
            $("#loss").text("Loss: " + loss)
            
            $('#HP').text("");
        $('#HPopponent').text("");
            resetGame();
         
        }
        if (HPopponent <= 0 && HP > 0){
            $('#total').text("You won! The game has reset. Click to play again!")
            win++;
            $("#wins").text("Wins: " + win)
        
            $('#HP').text("");
        $('#HPopponent').text("");
            resetGame();
            

        }

         if (HPopponent < 0){
            $('#total').text("You won! The game has reset. Click to play again!")
            win++;
            $("#wins").text("Wins: " + win)
         
            $('#HP').text("");
        $('#HPopponent').text("");
            resetGame();
            
         }
    });
}
function resetGame(){
    $('#select1').html('<img src="assets/images/luke.png" />');

$('#select2').html('<img src="assets/images/solo.png" />');

$('#select3').html('<img src="assets/images/leia.png" />');

$('#select4').html('<img src="assets/images/lando.png" />');


   HP = 100;
   HPopponent = 100;
     
        // disable();
    
}


// function disable(){
//     $(".button").prop("disabled",true);
// }

// function enable(){
//     $(".button").prop("disabled",false);
// }