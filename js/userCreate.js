$(document).ready(function () {


    /*
     Min create user
     */

 $("#createUserButton").on("click", function(){



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


     //JSON object
     var user = {

         username: $username,
         password: $password,
         phonenumber: $phonenumber,
         address: $address,
         email: $email,
         mobilepay: mobilepayIsChosen,
         cash: cashIsChosen,
         transfer: transferIsChosen
     };


     // Create user

     SDK.User.create(user, function (err) {
         if (err) throw err;

         window.alert("Bruger oprettet");

         window.location.href = "index.html";

     });
 });

});




