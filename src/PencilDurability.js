var Pencil = function(sharpness) {
  this.sharpness = sharpness;
};
var Paper = function() {
  this.text = ''
};

Pencil.prototype.write = function(words, paper) {
  paper.text = paper.text + words;
  this.sharpness = this.sharpness - words.replace(/\s/g, '').length;
  return paper.text;
};


Paper.prototype.scrapIt = function () {
  this.text = '';
};
