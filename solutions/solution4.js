var string = "I am happy to be here today";

var replaceSpace = function (str) {
  var newString = string.replace(/ /g, "%20");
  console.log(newString);
};

replaceSpace(string);