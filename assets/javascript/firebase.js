

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCE4zBOqk1l3pLFxcTiRU6fa-HrJvEW_bQ",
    authDomain: "contact-c366b.firebaseapp.com",
    databaseURL: "https://contact-c366b.firebaseio.com",
    projectId: "contact-c366b",
    storageBucket: "contact-c366b.appspot.com",
    messagingSenderId: "100352747868"
  };
  firebase.initializeApp(config);

  $("#submitbutton").on("click", function(e){
    event.preventDefault();

    var name = "";
    var email = "";
    var message = "";


name = $("#name").val();
email = $("#email").val();
message = $("#message").val();



dataRef.ref().push({
    name: name,
    email: email,
message:message

});
