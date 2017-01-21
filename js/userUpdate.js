
//Opdatering af user

$(document).ready(function () {

    $("#updateUserButton").on("click", function(){


        var user = {

            username: $("#inputUsername").val(),

            password: $("#inputPassword").val(),

            phonenumber: +$("#inputPhonenumber").val(),

            address: $("#inputAddress").val(),

            email: $("#inputEmail").val(),



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

        };

        /*
        JSON object
         */
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

        // Update User

        SDK.User.update(user, function (err) {
            if (err) throw err;

            window.alert("Brugeren er nu opdateret");

            window.location.href = "index.html";


        });
    });

});