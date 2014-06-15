


var Deal = (function(){
  playerCards = [];
  computerCards = [];

  function OneCard(){
    playerCards.push((Math.floor(Math.random() * 10) + 1))
    computerCards.push((Math.floor(Math.random() * 10) + 1))
  }
  function hit(){
    playerCards.push((Math.floor(Math.random() * 10) + 1))
  }
  function dealerHit(){
    computerCards.push((Math.floor(Math.random() * 10) + 1))
  }
  //--calculations
  var calculations = (function(){
  function dealerlower(){
    if (Deal.total(Deal.revealDealer()) < Deal.total(Deal.revealPlayerCards()) ){
      return(true)
    } else {
      return(false)
    }
  }
  function findWinner(){

  }
  return {
    dealerlower : dealerlower,
    findWinner : findWinner
  }
})()
//--calculations
  function showCards(){
    return (playerCards)
  }
  function revealFirstCard(){
    return (computerCards[0])
  }
  function revealDealer(){
    return (computerCards)
  }
  function total(person){

    total = 0 
    for (i=0;i<person.length;i++){
      total += person[i] 
    }
    return total
  }
  function bust(){

    total = 0 
    for (i=0;i<playerCards.length;i++){
      total += playerCards[i] 
    }
    if (total > 21) {
      return (true)
    }else {
      return (false)
    }
  }
  return {
    deal: function(){
      OneCard()
    },
    revealPlayerCards: showCards,
    revealFirstComputerCard: revealFirstCard,
    hit : hit,
    bust : bust,
    revealDealer : revealDealer,
    calculations : calculations,
    total : total,
    dealerHit : dealerHit
  }

})()

View = function(){

}
View.prototype = {
  update : function(){
    $('.players').text(Deal.revealPlayerCards());
    $('.dealer').text(Deal.revealFirstComputerCard());
  },
  hit : function(){
    $('.players').text(Deal.revealPlayerCards());
  },
  playerbust : function(){
    $('.bust').text("bust!!");
  },
  showDealer : function(dealer){
    $('.dealer').text(dealer);
  },
  showWinner : function(dealerWins){
    debugger;
    if (dealerWins) {
      $('.winner').text("You Lost")
    } else {
      $('.winner').text("You Win")
    }
  }

}




var program = (function(){
  var view = new View
  function listeners(){
    $('.stay').click(function(){
        view.showDealer(Deal.revealDealer());
        console.log(Deal.calculations.dealerlower())
        while (Deal.calculations.dealerlower()) {
          Deal.dealerHit();
          view.showDealer(Deal.revealDealer());
        }
     view.showWinner(Deal.calculations.dealerlower());
    })
    ,
    $(".hit").click(function(){
      Deal.hit()
      view.hit()
      if (Deal.bust()){
        view.playerbust();
      }
    }),
    $( ".start" ).click(function(){
      Deal.deal();
      Deal.deal();
      
      view.update()
    })
  }
  return {
    listeners: listeners,

  }
})()

Deal.dealerHit();


$(document).ready(function(){
 program.listeners()
})


;
