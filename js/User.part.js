/**
 * Created by andreasbach on 21/01/2017.
 */

$(document).ready(function () {

    /*
     Bøger der kan hentes ned
      */
    SDK.Book.getAll(function (err, data) {
        if (err) throw err;


        var $booksTableBody = $("#booksTableBody");
        data.forEach(function (book, i) {

            $booksTableBody.append(
                "<tr>" +
                "<td>" + book.title + "</td>" +
                "<td>" + book.edition + "</td>" +
                "<td>" + book.author + "</td>" +
                "<td>" + book.isbn + "</td>" +
                "</tr>");
        });

        /*
         Mulighed for at slette bøger
          */
        $(".deleteBookButton").on("click", function () {

            var $button = $(this);

            var postRequest = {
                isbn: $button.data("bookid")
            };

            console.log(postRequest);

        });

    });

    /*
     Annoncer der kan hentes ned
      */
    SDK.allAds.getAll(function (err, data) {
        if (err) throw err;

        var $addsTableBody = $("#addsTableBody");
        data.forEach(function (ad, i) {

            $addsTableBody.append(
                "<tr>" +
                "<td>" + ad.isbn + "</td>" +
                "<td>" + ad.price + "</td>" +
                "<td>" + ad.rating + "</td>" +
                "<td><button class='reserveAdButton' data-adId=" + ad.adId + ">Reserver</Button></td>" +
                "</tr>");
        });

        /*
         Dette giver muligheden for at reseverer annoncer
          */

        $(".reserveAdButton").on("click", function () {

            var $reserveAd = $(this);

            var adId = {
                id: $reserveAd.data("adid")
            };


            SDK.allAds.reserve(adId, function (err) {
                if (err) throw JSON.stringify(err);
                location.reload();
            });
        });
    });

    /*
     Nu kan brugeren oprette en ny annonce
      */
    $("#AdNewButton").on("click", function () {


        $("#newAdModal").css("display", "block");

        var $isbn = parseInt($("#inputAdisbn").val())

        var $price = parseInt($("#inputAdprice").val())

        var $rating = parseInt($("#inputAdrating").val())

        var $comment = ($("#inputAdcomment").val())

        /*
        JSON object til ovenstående kode
         */

        var Ad = {

            isbn: $isbn,
            price: $price,
            rating: $rating,
            comment: $comment,

        };

        /*
        Afslutter med at oprette AD
         */
        SDK.allAds.create(Ad, function (err) {
            if (err) throw err;

            window.alert("Din annonce er nu oprettet");

            window.location.href = "user.html";
        });
    });

});

/*
 Dette vil give brugeren mulighed for at hente egne annoncer
  */
SDK.allAds.myads(function (err, data) {
    if (err) throw err;

    var $myadsTableBody = $("#myadsTableBody");
    data.forEach(function (ad, i) {

        $myadsTableBody.append(
            "<tr>" +
            "<td>" + ad.isbn + "</td>" +
            "<td>" + ad.price + "</td>" +
            "<td>" + ad.rating + "</td>" +
            "<td>" + ad.comment + "</td>" +
            "<td><button class='deleteAdButton' data-adId=" + ad.adId + ">Fjern Annonce</Button></td>" +
            "<td><button class='unlockAdButton' data-adId=" + ad.adId + ">Frigiv</Button></td>" +
            "</tr>");
    });

    /*
     Mulighed for at fjerne ens annonce
      */
    $(".deleteAdButton").on("click", function () {

        var $deleteAd = $(this);

        var adId = {
            id: $deleteAd.data("adid")
        };


        SDK.allAds.delete(adId, function (err) {
            if (err) throw JSON.stringify(err);
            location.reload();
        });
    });


/*
 Mulighed for at frigive ens annonce
  */
    $(".unlockAdButton").on("click", function () {

        var $unlockAd = $(this);

        var adId = {
            id: $unlockAd.data("adid")
        };


        SDK.allAds.unlockreservation(adId, function (err) {
            if (err) throw JSON.stringify(err);
            location.reload();
        });
    });
});

