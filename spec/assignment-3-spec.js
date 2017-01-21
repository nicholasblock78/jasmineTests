describe("Assignment 3", function() {
  it("Function should return correct number for given string", function() {
    expect(yourAssignment3("leepdag")).toEqual(680131662011);
  });
  it("Function should return correct number for my given string", function() {
    var numWeWant = 667734139064;
    expect(yourAssignment3("d")).toEqual(numWeWant);
  });
});
