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
  function showCards(){
    return (playerCards)
  }
  function revealFirstCard(){
    return (computerCards[0])
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
    bust : bust

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
  }

}





var program = (function(){
  var view = new View
  function listeners(){
    $(".hit").click(function(){
      Deal.hit()
      view.hit()
      if (Deal.bust()){
        console.log("bust")
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




$(document).ready(function(){
 program.listeners()
 

})


;
