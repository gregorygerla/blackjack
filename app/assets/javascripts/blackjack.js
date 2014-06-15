


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
  //--calculations
  var calculations = (function(){
  function check(){
    // if (Deal.total(revealDealer) < (Deal.total(showCards)){
    //   console.log("good")
    // } 
    
  }
  return {
    check : check
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
    total : total
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
  }

}





var program = (function(){
  var view = new View
  function listeners(){
    $('.stay').click(function(){
        view.showDealer(Deal.revealDealer());
        Deal.calculations.check();
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




$(document).ready(function(){
 program.listeners()
 

})


;
