var _ = require('underscore');

Array.prototype.compare = function(array) {
  if(this.length !== array.length) return false;

  for(var i = 0; i < array.length; i++) {
    if(!_.contains(this, array[i]))
      return false;
  };
  return true;
};
