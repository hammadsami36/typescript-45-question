// array is a parameter
function mySandwiches(...item:string[]){
     return `I want sandwiches of ${item}`;

};
let collection1 = mySandwiches("clipart", "chicken", "cheeze"); 
// can add as many you wish
let collection2 = mySandwiches("grilled", "ham");
let collection3 = mySandwiches();   

console.log(collection1)
console.log(collection2)
console.log(collection3)