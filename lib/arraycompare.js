Array.prototype.compare = function(array) {
  if(this.length !== array.length) return false;

  for(var i = 0; i < array.length; i++) {
    if(this[i] !== array[i])
      return false;
  };
  return true;
};
