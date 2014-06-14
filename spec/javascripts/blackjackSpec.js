describe("Deal",function(){
  it("works",function(){
    Deal.deal()
    expect(Deal.revealPlayerCards().length).toEqual(1);

  })
})
