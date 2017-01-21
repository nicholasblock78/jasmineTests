
describe("Assignment 1", function() {
  describe("Assignment 1 - first function", function() {
    it("Greatest Difference of Array 1", function() {
      array = new FirstArray([1,4,2,8]);
      expect(array.greatestDifference1()).toEqual(7);
    });

    it("Greatest Difference of Array 2", function() {
      array = new FirstArray([0,9,1,3,7]);
      expect(array.greatestDifference1()).toEqual(9);
    });

    it("Greatest Difference of Array 3 - triple digit numbers", function() {
      array = new FirstArray([88,99,100]);
      expect(array.greatestDifference1()).toEqual(12);
    });

    it("Greatest Difference of Array 4 - negative numbers", function() {
      array = new FirstArray([0,3,-5]);
      expect(array.greatestDifference1()).toEqual(8);
    });
  });

  describe("Assignment 1 - second function", function() {
    it("Greatest Difference of Array 1", function() {
      array = new SecondArray([1,4,2,8]);
      expect(array.greatestDifference2()).toEqual(7);
    });

    it("Greatest Difference of Array 2", function() {
      array = new SecondArray([0,9,1,3,7]);
      expect(array.greatestDifference2()).toEqual(9);
    });

    it("Greatest Difference of Array 3 - triple digit numbers", function() {
      array = new SecondArray([88,99,100]);
      expect(array.greatestDifference2()).toEqual(12);
    });

    it("Greatest Difference of Array 4 - negative numbers", function() {
      array = new SecondArray([0,3,-5]);
      expect(array.greatestDifference2()).toEqual(8);
    });
  });
});
