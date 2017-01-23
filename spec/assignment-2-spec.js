describe("Assignment 2", function() {
  beforeEach(function() {
    var Rect1 = new Rectangle(20,30,40,11);
    var Rect2 = new Rectangle(50,22,26,36);
    var Rect3 = new Rectangle(10,10,30,20);
    var Rect4 = new Rectangle(45,10,12,4);
  });

  describe("Find all 4 corners of rectangle", function() {
    it("Rectangle 1 has these 4 corners", function() {
      var Rect1 = new Rectangle(20,30,40,11);
      expect(Rect1.findCorners()).toEqual([[20,30],[20,41],[60,30],[60,41]]);
    });
    it("Rectangle 4 has these 4 corners", function() {
      var Rect4 = new Rectangle(45,10,12,4);
      expect(Rect4.findCorners()).toEqual([[45,10],[45,14],[57,10],[57,14]]);
    });
  });

  describe("check if rectangles intersect", function() {
    it("Rect 1 and Rect 2", function() {
      var Rect1 = new Rectangle(20,30,40,11);
      var Rect2 = new Rectangle(50,22,26,36);
      expect(Rect1.intersectsWith(Rect2)).toEqual(true);
    });
    it("Rect 1 and Rect 3", function() {
      var Rect1 = new Rectangle(20,30,40,11);
      var Rect3 = new Rectangle(10,10,30,20);
      expect(Rect1.intersectsWith(Rect3)).toEqual(true);
    });
    it("Rect 1 and Rect 4", function() {
      var Rect1 = new Rectangle(20,30,40,11);
      var Rect4 = new Rectangle(45,10,12,4);
      expect(Rect1.intersectsWith(Rect4)).toEqual(false);
    });
    it("Rect 2 and Rect 3", function() {
      var Rect2 = new Rectangle(50,22,26,36);
      var Rect3 = new Rectangle(10,10,30,20);
      expect(Rect2.intersectsWith(Rect3)).toEqual(false);
    });
    it("Rect 2 and Rect 4", function() {
      var Rect2 = new Rectangle(50,22,26,36);
      var Rect4 = new Rectangle(45,10,12,4);
      expect(Rect2.intersectsWith(Rect4)).toEqual(false);
    });
    it("Rect 3 and Rect 4", function() {
      var Rect3 = new Rectangle(10,10,30,20);
      var Rect4 = new Rectangle(45,10,12,4);
      expect(Rect3.intersectsWith(Rect4)).toEqual(false);
    });
  });
});
