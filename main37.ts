let size : string[] = ["medium","large"];
let defaultmessage = "I love TypeScript"
let mediumshirt = (`size of shirt is : ${size[0]},${defaultmessage}`)
let largeshirt = (`size of shirt is : ${size[1]},${defaultmessage}`)
let smallshirt = (`size of shirt is : small and I like painting`)
let extralargeshirt = (`size of shirt is : extralarge and I like haiking`)

function make_tshirt(){
    let simplefunction = (mediumshirt)
    console.log(simplefunction)
    return simplefunction
}
let respone = make_tshirt()
console.log(respone)
