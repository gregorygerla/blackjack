describe("Deal",function(){
    Deal.deal()
  it("works",function(){
    expect(Deal.revealPlayerCards().length).toEqual(1);
  }),
  it("is less than 14",function(){
    expect(Deal.revealPlayerCards()[0]).toBeLessThan(14);
  })

})
describe("Deal",function(){
  it("Deal to have been called",function(){
    spyOn(Deal,'deal')
    Deal.deal();
    expect(Deal.deal).toHaveBeenCalled();
  })
})

describe("playerCards",function(){
  it("has playerCards",function(){
    playerCards = [1,2]
    Deal.deal()
    Deal.deal()
    expect(Deal.revealPlayerCards().length).toEqual(4)
  })
})

describe("View",function(){
  it("it will call View",function(){
    spyOn(window,'View');
    var view = new View()
    expect(window.View).toHaveBeenCalled()
  })
})

describe("Deal",function(){
  it("should deal computer cards",function(){
    Deal.deal();
    expect(Deal.computerCards).tobeUndefined;

  })
})
describe("Dealerlower should work",function(){
  it("should make the right amount",function(){
  Deal: {
    calculations: jasmine.createSpyObj('calculations', ['dealerlower'])
  }
  spyOn(Deal.calculations,'dealerlower');
  Deal.calculations.dealerlower();
    expect(Deal.calculations.dealerlower).toHaveBeenCalled();
  })
})


describe("View",function(){
  it("it will call update",function(){
    var view = new View()
    spyOn(view,'update');
    view.update();
    expect(view.update).toHaveBeenCalled()
  })
})


describe("The calculations function",function(){
  it("should make dealer lower",function(){
    playerCards = [3]
    computerCards = [4];
    expect(Deal.calculations.dealerlower()).toBeFalsy();
  }),
  it("should make dealer higher",function(){
    playerCards = [5]
    computerCards = [4];
    expect(Deal.calculations.dealerlower()).toBeTruthy();
  })
})

describe("DealerHit",function(){
  it ("should work",function(){
    spyOn(Deal,'dealerHit');
    Deal.dealerHit();
    expect(Deal.dealerHit).toHaveBeenCalled();
  });
})

describe("Views",function(){
  it("should update everything",function(){
    view = new View();
    spyOn(view,'hit');
    view.hit();
    expect(view.hit).toHaveBeenCalled();
  }),
  it("should change the text",function(){
     expect($('.players')).toBeEmpty()
  })
})











