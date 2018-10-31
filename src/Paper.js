var Paper = function() {
  this.text = ''
};


//Functions
Paper.prototype.scrapIt = function () {
  this.text = '';
};

Paper.prototype.edit = function(words) {
  let index = this.text.indexOf("  ") ;
  if (index != -1) {
    index = index + 1;
    for (let i = 0; i < words.length; i++) {
      if (this.text.charAt(index) == ' '){
        this.text = this.text.substr(0,index) + words.charAt(i) + this.text.substr(index+1);
      }
      else {
        this.text = this.text.substr(0,index) + "@" + this.text.substr(index+1);
      }
      index++;
    }
  }
};
