var Deal = (function(){
  playerCards = [];
  computerCards = [];

  function OneCard(){
    playerCards.push((Math.floor(Math.random() * 13) + 1))
  }
  function showCards(){
    return (playerCards)
  }
  return {
    deal: function(){
      OneCard()
    },
    revealPlayerCards: showCards
  }
})()



var program = (function(){
  function listeners(){
    $( ".start" ).click(function(){
      Deal.deal();
      Deal.deal();
      $('.players').text(Deal.revealPlayerCards());
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
