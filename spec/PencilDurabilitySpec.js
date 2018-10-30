describe("Pencil", function() {
  var pencil = new Pencil();
  var paper = new Paper();

  it("should write what you tell it to write", function(){
    var actual = pencil.write("Knowledge comes, ", paper);
    expect(actual).toBe("Knowledge comes, ");
  });
});
