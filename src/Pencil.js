//Constructors
var Pencil = function(rating, length) {
  this.sharpness = rating;
  this.durability = rating;
  this.length = length;
  this.eraser = 10;
};

//Functions
Pencil.prototype.write = function(words, paper) {
  words = this.writeAsMuchAsYouCan(words);
  paper.text = paper.text + words;
  return paper.text;
};
Pencil.prototype.writeAsMuchAsYouCan = function(words) {
  let pointOfDullarity = 0;
  for (let i = 0; this.sharpness > 0 && i < words.length; i++) {
    if (words.charAt(i) == ' ' ||  words.slice(i, i+2).search(/\n/) != -1) {
    }
    else if (words.charAt(i) != words.charAt(i).toLowerCase()) {
      this.sharpness = this.sharpness -2;
    }
   else {
      this.sharpness = this.sharpness - 1;
    }
    pointOfDullarity++;
  }
  words = words.slice(0, pointOfDullarity) +  words.slice(pointOfDullarity).replace(/[a-zA-Z0-9]/g, ' ');;
  return words;
};
Pencil.prototype.sharpen = function() {
  if (this.length > 0){
    this.sharpness = this.durability;
    this.length--;
  }
};
Pencil.prototype.erase = function(words, paper) {
  const indexOfFirstLetter = paper.text.lastIndexOf(words);
  if (indexOfFirstLetter != -1){
    for (let i = indexOfFirstLetter + words.length - 1; i >= indexOfFirstLetter && this.eraser > 0; i--) {
      if ((paper.text.charAt(i) != ' ') && (paper.text.charAt(i) != '\t') && (paper.text.charAt(i) != '\n')){
        this.eraser--;
      }
      paper.text = paper.text.substr(0,i) + " " + paper.text.substr(i+1);
    }
  }
};
