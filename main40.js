// It doesnot include track number. 
function make_album1(artistName, albumTittle) {
    return { artistName: artistName, albumTittle: albumTittle };
}
var album1 = make_album1("Ali zafar", "psl song");
var album2 = make_album1("Atif aslam", "ipl song");
var album3 = make_album1("Asim azhar", "cpl song");
console.log(album1);
console.log(album2);
console.log(album3);
// // It include track number. 
function make_album2(artistName, albumTittle, numberoftracks) {
    return { artistName: artistName, albumTittle: albumTittle, numberoftracks: numberoftracks };
}
var album4 = make_album2("Ali zafar", "psl song", 30);
var album5 = make_album2("Atif aslam", "ipl song", 20);
var album6 = make_album2("Asim azhar", "cpl song");
console.log(album4);
console.log(album5);
console.log(album6);
