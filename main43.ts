let Magician_list2 : string[] = ["dynamo","roy horn","david copper field","david blaine"]
// make a copy array
let Magician_listcopy : string[] =[...Magician_list2]; 

    function show_magician(great:string,){
        let withgreating = "";
        for (let item of Magician_listcopy){
            withgreating = `${great} ${item}\n`
        
    }
    return withgreating;
    
};
let mygreatimg = show_magician("Hello");
let makeArray = mygreatimg.split(`\n`);
    console.log(makeArray);
// orginal array
console.log(Magician_list2)