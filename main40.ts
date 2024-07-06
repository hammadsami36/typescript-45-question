// It doesnot include track number. 
function make_album1 (artistName:string, albumTittle:string){
    return{artistName,albumTittle}
}
let album1 = make_album1("Ali zafar", "psl song");
let album2 = make_album1("Atif aslam", "ipl song");
let album3 = make_album1("Asim azhar", "cpl song");

console.log(album1)
console.log(album2)
console.log(album3)



// // It include track number. 
function make_album2 (artistName:string, albumTittle:string,numberoftracks:number){
    return{artistName,albumTittle,numberoftracks}
}
let album4 = make_album2("Ali zafar", "psl song",30);
let album5 = make_album2("Atif aslam", "ipl song",20);
let album6 = make_album2("Asim azhar", "cpl song");

console.log(album4)
console.log(album5)
console.log(album6)