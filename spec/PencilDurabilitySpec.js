describe("A Pencil and a piece of paper", function(){
  var pencil = new Pencil();
  var paper = new Paper();
  beforeEach(function(){
    paper.scrapIt();
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
