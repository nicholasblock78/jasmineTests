
describe("Assignment 1", function() {

  it("Greatest Difference of Array 1", function() {
    array = new MyArray([1,4,2,8]);
    expect(array.greatestDifference()).toEqual(7);
  });

  it("Greatest Difference of Array 2", function() {
    array = new MyArray([0,9,1,3,7]);
    expect(array.greatestDifference()).toEqual(9);
  });

  it("Greatest Difference of Array 3 - triple digit numbers", function() {
    array = new MyArray([88,99,100]);
    expect(array.greatestDifference()).toEqual(12);
  });

  it("Greatest Difference of Array 4 - negative numbers", function() {
    array = new MyArray([0,3,-5]);
    expect(array.greatestDifference()).toEqual(8);
  });
});
