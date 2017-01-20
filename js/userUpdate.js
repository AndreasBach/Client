
//Opdater user

$(document).ready(function () {

    $("#updateUserButton").on("click", function(){


        var user = {

            username: $("#inputUsername").val(),

            password: $("#inputPassword").val(),

            phonenumber: +$("#inputPhonenumber").val(),

            address: $("#inputAddress").val(),

            email: $("#inputEmail").val(),

            mobilepay: +$("#inputMobilePay").prop("checked"),

            cash: +$("#inputCash").prop("checked"),

            transfer: +$ ("#inputTransfer").prop("checked")

        };

        // Update User

        SDK.User.update(user, function (err) {
            if (err) throw JSON.stringify(err);

            window.alert("Brugeren er nu opdateret");

            window.location.href = "index.html";


        });
    });

});