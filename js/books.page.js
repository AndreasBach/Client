$(document).ready(function () {

  //Fires on page-load
  SDK.Book.getAll(function(err, data){
    if(err) throw err;
      
    var $booksTableBody = $("#booksTableBody");
    data.forEach(function (book, i) {

      $booksTableBody.append(
        "<tr>" +
          "<td>" + book.title + "</td>" +
          "<td>" + book.subtitle  + "</td>" +
          "<td>" + printAuthors(book.authors) + "</td>" +
          "<td>" + book.publisher.name + "</td>" +
          "<td>Kr. " + book.price + ",-</td>" +
        "</tr>");
    });

  });

});

