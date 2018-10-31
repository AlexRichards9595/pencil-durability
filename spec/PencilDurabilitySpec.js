describe("A Pencil and a piece of paper", function(){
  var pencil = new Pencil(50);
  var paper = new Paper();
  beforeEach(function(){
    paper.scrapIt();
    pencil.sharpness = 50;
  });

  describe("Pencil", function() {
    it("should write what you tell it to write", function(){
      var actual = pencil.write("Knowledge comes, ", paper);
      expect(actual).toBe("Knowledge comes, ");
    });
    it("should have the sharpness you ask for", function() {
      let superSharpPencil = new Pencil(100);
      expect(superSharpPencil.sharpness).toEqual(100);
    });
    it("should lose sharpness as it writes", function(){
      pencil.write("down5", paper);
      expect(pencil.sharpness).toEqual(45);
    });
    it("should not lose sharpness for spaces", function(){
      pencil.write("down 5", paper);
      expect(pencil.sharpness).toEqual(45);
    });
    it("should not lose sharpness for new lines", function(){
      pencil.write("down \n 5", paper);
      expect(pencil.sharpness).toEqual(45);
    });
    it("should lose double sharpness for capital letters", function(){
      pencil.write("DOWN 9", paper);
      expect(pencil.sharpness).toEqual(41);
    });
    it("should stop writing after the pencil goes dull", function(){
      let badPencil = new Pencil(4);
      var actual = badPencil.write("goodbye", paper);
      expect(actual).toBe("good   ");
    });
    it("should not include spaces in its count when it stops writing", function(){
      let badPencil = new Pencil(8);
      var actual = badPencil.write("this is the end", paper);
      expect(actual).toBe("this is th     ");
    });
    it("should count capital letters when it stops writing", function(){
      let badPencil = new Pencil(8);
      var actual = badPencil.write("THIS IS THE", paper);
      expect(actual).toBe("THIS       ")
    });
    it("should have a durability and length", function(){
      var newPencil = new Pencil(50, 8)
      expect(newPencil.durability).toBe(50);
      expect(newPencil.length).toBe(8);
    });
  });



  describe("Paper", function(){
    it('should not lose the next written on it from before', function(){
      pencil.write("Knowledge comes, ", paper);
      var actual = pencil.write("but Wisdom lingers.", paper);
      expect(actual).toBe("Knowledge comes, but Wisdom lingers.");
    });
    it("should reset the paper when you scrapIt", function(){
      pencil.write("something wrong", paper);
      paper.scrapIt();
      var actual = pencil.write("something... write haha", paper);
      expect(actual).toBe("something... write haha");
    });
  });
});
