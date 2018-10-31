//Constructors
var Pencil = function(rating, length) {
  this.sharpness = rating;
  this.durability = rating;
  this.length = length;
};
var Paper = function() {
  this.text = ''
};
//Pencil functions
Pencil.prototype.write = function(words, paper) {
  if(this.sharpness >= words.length) {
    this.dullThePencil(words);
  }
  else {
    words = this.writeAsMuchAsYouCan(words);
  }
  paper.text = paper.text + words;
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
Pencil.prototype.writeAsMuchAsYouCan = function(words) {
  let pointOfDullarity = 0;
  for (let i = 0; this.sharpness > 0; i++) {
    if (words.charAt(i) == '\s' ) {
    }
    else if (words.charAt(i) != words.charAt(i).toLowerCase()) {
      this.sharpness = this.sharpness -2;
    }
   else {
      this.sharpness = this.sharpness - 1;
    }
    pointOfDullarity++;
  }
  let unwrittenString = words.slice(pointOfDullarity);
  unwrittenString = unwrittenString.replace(/[a-zA-Z0-9]/g, ' ');
  words = words.slice(0, pointOfDullarity) + unwrittenString;
  return words;
};
Pencil.prototype.sharpen = function() {
    this.sharpness = this.durability;
};


//Paper functions
Paper.prototype.scrapIt = function () {
  this.text = '';
};
