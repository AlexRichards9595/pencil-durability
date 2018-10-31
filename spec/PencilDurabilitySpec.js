describe("A Pencil and a piece of paper", function(){
  var pencil = new Pencil(50, 8);
  var paper = new Paper();
  beforeEach(function(){
    paper.scrapIt();
    pencil.sharpness = 50;
    pencil.eraser = 10;
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
    it("should sharpen when sharpened", function(){
      var originalSharpness = pencil.durability;
      pencil.write("four", paper);
      expect(pencil.sharpness).toBe(originalSharpness - 4);
      pencil.sharpen();
      expect(pencil.sharpness).toBe(pencil.durability);
    });
    it("should lose length when sharpened", function(){
      var originalLength = pencil.length;
      pencil.sharpen();
      expect(originalLength).toBe(pencil.length + 1);
    });
    it("should not sharpen if its length is 0", function(){
      let reallyShortPencil = new Pencil(50, 0);
      reallyShortPencil.write("four", paper);
      var preSharpenedSharpness = reallyShortPencil.sharpness;
      reallyShortPencil.sharpen();
      expect(reallyShortPencil.sharpness).toBe(preSharpenedSharpness);
    });
    it("should erase the last occurence of the word its told to erase", function(){
      pencil.write("erase erase erase", paper);
      pencil.erase("erase", paper);
      expect(paper.text).toBe("erase erase      ");
    });
    it("can't erase something that isn't there", function(){
      pencil.write("erase erase erase", paper);
      pencil.erase("never!", paper);
      expect(paper.text).toBe("erase erase erase");
    });
    it("has a default eraser life when new", function(){
      var newEraser = new Pencil();
      expect(newEraser.eraser).toBe(10);
    });
    it("should not erase after the eraser is gone", function(){
      pencil.eraser = 3;
      pencil.write("erase erase", paper);
      pencil.erase("erase", paper);
      expect(paper.text).toBe("erase er   ");
    });
    it("should not count spaces against its erase degradation", function(){
      pencil.write("erase it", paper);
      preErase = pencil.eraser;
      pencil.erase("se it", paper);
      expect(pencil.eraser).toBe(preErase-4);
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
