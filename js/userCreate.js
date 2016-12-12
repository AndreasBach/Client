$(document).ready(function () {

 $("#createUserButton").on("click", function(){



     var user = {

         username: $("#inputUsername").val(),

         password: $("#inputPassword").val(),

         phonenumber: + $("#inputPhonenumber").val(),

         address: $("#inputAddress").val(),

         email: $("#inputEmail").val(),

         mobilepay: + $("#inputMobilepay").prop("checked"),

         cash: +$("#inputCash").prop("checked"),

         transfer: + $ ("#inputTransfer").prop("checked")

};

     // Creater User

     SDK.User.create(user, function (err) {
         if (err) throw err;

         window.alert("Bruger oprettet");

         window.location.href = "index.html";


     });
 });

});




