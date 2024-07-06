// array is a parameter
function mySandwiches() {
    var item = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        item[_i] = arguments[_i];
    }
    return "I want sandwiches of ".concat(item);
}
;
var collection1 = mySandwiches("clipart", "chicken", "cheeze");
// can add as many you wish
var collection2 = mySandwiches("grilled", "ham");
var collection3 = mySandwiches();
console.log(collection1);
console.log(collection2);
console.log(collection3);
