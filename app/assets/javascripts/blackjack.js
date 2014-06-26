


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
  function restart_game(){
    playerCards = []
    computerCards = []

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
    dealerHit : dealerHit,
    restart_game : restart_game
  }

})()

View = function(){

}
View.prototype = {
  restart : function(){
    $('.players').text(Deal.revealPlayerCards());
    $('.dealer').text(Deal.revealDealer());
    console.log("hi")
    $('play_again').css("display","none")
    $('.action_buttons').css("visibility","initial");
  },
  update : function(){
    $('.players').text(Deal.revealPlayerCards());
    $('.dealer').text(Deal.revealFirstComputerCard());
  },
  hit : function(){
    $('.players').text(Deal.revealPlayerCards());
  },
  playerbust : function(){
    $('.bust').text("bust!!");
    $('#action_buttons').hide()
    $('.play_again').show();
  },
  showDealer : function(dealer){
    $('.dealer').text(dealer);
  },
  showWinner : function(dealerWins){
    if (dealerWins) {
      $('.winner').text("You Lost")
    } else {
      $('.winner').text("You Win")
    }
  }

}



var restartGameController = function(view){
  this.view = view
}

restartGameController.prototype = {
  restart_game : function(){
    Deal.restart_game();
    this.view.restart();
  }
}








var program = (function(){
  var view = new View
  restart = new restartGameController(view)

  function listeners(){
    $('.play_again').click(function(){
      restart.restart_game()
    })
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
