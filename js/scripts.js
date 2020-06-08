const cardNumbers = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"]
const cardSuits = [" of clubs", " of diamonds", " of spades", " of hearts"]


$(document).ready(function() {

  cardSuits.forEach(function(cardSuit) {
    cardNumbers.forEach(function(cardNumber) {      
      $("#card-list").append(
        "<li>" + cardNumber + cardSuit + "</li>"
      );
    });
  });
});