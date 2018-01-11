var Serial = function () {
  var max = 1000;

  this.generate = function () {
    return Math.floor(Math.random() * max);
  };

};

module.exports =  Serial;
