var replaceSpace = function (str) {
  str = str.replace(/ /g, "%20");
  console.log(str);
};

replaceSpace("I am happy to be here today");

// Without JS replace method
var replaceSpaces = function (s) {
    // create empty array to push into
    var newS = [];
    // iterate over string
    for (var i = 0; i < s.length; i++) {
        // check for chars in string
        if (s[i] !== " ") {
            // push chars into empty array
            newS.push(s[i]);
        } else {
            // for each white space, push %20 into array
            newS.push("%20");
        }
    }
     // return array newS as string using join
    return newS.join("");
};

replaceSpaces(s);
replaceSpaces("a b c");
replaceSpaces("  test  ");