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


describe("View",function(){
  it("it will call update",function(){
    var view = new View()
    spyOn(view,'update');
    view.update();
    expect(view.update).toHaveBeenCalled()
  })
})
