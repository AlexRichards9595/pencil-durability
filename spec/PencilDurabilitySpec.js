describe("Pencil", function() {
  var pencil = new Pencil();
  var paper = new Paper();

  it("should write what you tell it to write", function(){
    var actual = pencil.write("Knowledge comes, ", paper);
    expect(actual).toBe("Knowledge comes, ");
  });
});


describe("Paper", function(){
  var pencil = new Pencil();
  var paper = new Paper();
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
