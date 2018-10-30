var Pencil = function() {

};
var Paper = function() {
  this.text = ''
};

Pencil.prototype.write = function(words, paper) {
  paper.text = paper.text + words;
  return paper.text
};
