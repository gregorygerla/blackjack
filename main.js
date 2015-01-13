

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
  function bust(hand){

    total = 0 
    for (i=0;i<hand.length;i++){
      total += hand[i] 
    }
    if (total > 21) {
      return (true)
    }else {
      return (false)
    }
  }
  return {
    deal: function(){
      OneCard();
      OneCard();
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
  begin : function(){
    $('#action_buttons').show();
    $('.play-buttons').show();
    $('.play_again').hide();
    $('.winner').hide();
    $('.bust').hide();
    $('.start').hide();
  },
  restart : function(){
    $('.players').text(Deal.revealPlayerCards());
    $('.dealer').text(Deal.revealDealer());
  
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
  end: function(){
    $('.play-buttons').hide();
    $('.winner').show();
    $('.play_again').show();
    

  },
  playerbust : function(){
    $('.bust').show();
    $('.bust').text("bust!!");
    
    this.end();
  },
  showDealer : function(dealer){
    $('.dealer').text(dealer);
  },
  showWinner : function(dealerlost){
    if (dealerlost) {
      $('.winner').text("You Win")
    } else {
      $('.winner').text("You Lose")
    }
  }

}



var restartGameController = function(view){
  this.view = view
}

restartGameController.prototype = {
  restart_game : function(){
    Deal.restart_game();
    Deal.deal();
    this.view.begin();
    // this.view.restart();
    this.view.update();
  },
  end_of_game : function(){
    this.view.end();
  },
  player_win : function(){
    if (Deal.bust(computerCards)){
      return(true);
    }
    if(Deal.calculations.dealerlower()){
      console.log("you win");
      return(false);
    } else {
      return (true)
    }
  }
}








var program = (function(){

  var view = new View
  restart = new restartGameController(view)

  function listeners(){
    $('.play_again').click(function(){
      restart.restart_game();
      view.begin();
    })
    $('.stay').click(function(){
        view.showDealer(Deal.revealDealer());
        // while (Deal.total(computerCards) < 21) {
          while  (Deal.total(computerCards) < 16) {
            Deal.dealerHit();
            view.showDealer(Deal.revealDealer());
          }
     restart.player_win(); 
     view.showWinner(restart.player_win());
     restart.end_of_game();
    })
    ,
    $(".hit").click(function(){
      Deal.hit()
      view.hit()
      if (Deal.bust(playerCards)){
        view.playerbust();
      }
    }),
    $( ".start" ).click(function(){
      restart.restart_game();
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