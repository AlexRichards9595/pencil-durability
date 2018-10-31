var Pencil = function(sharpness) {
  this.sharpness = sharpness;
};
var Paper = function() {
  this.text = ''
};

Pencil.prototype.write = function(words, paper) {
  paper.text = paper.text + words;
  this.sharpness = this.sharpness - words.replace(/\s/g, '').length;
  for (let i = 0; i < words.length; i++) {
    if (words.charAt(i) != words.charAt(i).toLowerCase()) {
      this.sharpness = this.sharpness -1;
    }
  }
  return paper.text;
};


Paper.prototype.scrapIt = function () {
  this.text = '';
};
