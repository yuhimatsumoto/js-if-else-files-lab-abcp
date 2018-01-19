// var index = require("./index.js")

var name = "Joe"
var height = "74"

countStringNumberOf(name);

if (name === "Susan") {

    console.log("The name is correct")
} else {
    console.log("Expected: Susan, Received: "　+ name)
}



if (height === 70) {
    console.log("The height is correct")
} else {
    console.log("Expected: 70, Received: "+ height)
}


function countStringNumberOf(word) {
  console.log("The word count result ->>>> " + word.length);
}


// function countElements(giraffe, duck) {
//   print
// }
