 function make$Element( input ) {

  var options = input || {};
  var $tag;

  if (options.hasOwnProperty('tagName')) {
    var tagName = "<" + options.tagName + ">";
    $tag = $(tagName);

  }  else {
    $tag = $("<div>");
  }

  if (options.hasOwnProperty('className')) {
    var className = options.className;
    $tag.addClass(className);
  }

  if (options.hasOwnProperty('id')) {
    var idName = options.id;
    $tag.attr("id", idName);
  }
  return $tag;
}


function Model(options) {
  this.options = options || {};
}

Model.prototype.get = function(property) {
  return this.options[property];
};

Model.prototype.set = function(options) {
  for (var opt in options) {
    this.options[opt] = options[opt];
  }
};

