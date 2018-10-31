var Pencil = function(sharpness) {
  this.sharpness = sharpness;
};
var Paper = function() {
  this.text = ''
};

Pencil.prototype.write = function(words, paper) {
  if(this.sharpness >= words.length) {
    paper.text = paper.text + words;
    this.dullThePencil(words);
  }
  else {
    let unwrittenString = words.slice(this.sharpness);
    unwrittenString = unwrittenString.replace(/[a-zA-Z0-9]/g, ' ');
    words = words.slice(0, this.sharpness) + unwrittenString
    paper.text = paper.text + words;
  }
  return paper.text;
};
Pencil.prototype.dullThePencil = function(words) {
  this.sharpness = this.sharpness - words.replace(/\s/g, '').length;
    for (let i = 0; i < words.length; i++) {
      if (words.charAt(i) != words.charAt(i).toLowerCase()) {
        this.sharpness = this.sharpness -1;
      }
    }
};


Paper.prototype.scrapIt = function () {
  this.text = '';
};
