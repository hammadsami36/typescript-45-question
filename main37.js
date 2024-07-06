var size = ["medium", "large"];
var defaultmessage = "I love TypeScript";
var mediumshirt = ("size of shirt is : ".concat(size[0], ",").concat(defaultmessage));
var largeshirt = ("size of shirt is : ".concat(size[1], ",").concat(defaultmessage));
var smallshirt = ("size of shirt is : small and I like painting");
var extralargeshirt = ("size of shirt is : extralarge and I like haiking");
function make_tshirt() {
    var simplefunction = (largeshirt);
    console.log(simplefunction);
    return simplefunction;
}
var respone = make_tshirt();
console.log(respone);
