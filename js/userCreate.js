$(document).ready(function () {

 $("#createUserButton").on("click", function(){

/*
Min create user
 */
     var $username = $("#inputUsername").val()

     var $password = $("#inputPassword").val()

     var $email = $("#inputEmail").val()

     var $phonenumber = parseInt($("#inputPhonenumber").val())

     var $address = $("#inputAddress").val()


     var mobilepayIsChosen = 0;
     if ($("input[name=mobilepay]:checked").val()) {
         mobilepayIsChosen = 1;

     }

     var cashIsChosen = 0;
     if ($("input[name=cash]:checked").val()) {
         cashIsChosen = 1;
     }

     var transferIsChosen = 0;
     if ($("input[name=transfer]:checked").val()) {
         transferIsChosen = 1;
     }

     // Create user

     SDK.User.create(user, function (err) {
         if (err) throw JSON.stringify(err);

         window.alert("Bruger oprettet");

         window.location.href = "index.html";


     });
 });

});




