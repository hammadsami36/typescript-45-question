var sizeofshirt = ["small", "medium", "large"];
var shirt1 = "This shirt is for casual wearing";
var shirt2 = "This shirt is for farmal wearing";
var shirt3 = "This shirt is for party wearing";
function make_tshirt() {
    var simplefunction = "This is a ".concat(sizeofshirt[0], "shirt, and").concat(shirt1);
    console.log(simplefunction);
    return (simplefunction);
}
var respone = make_tshirt();
console.log(respone);
