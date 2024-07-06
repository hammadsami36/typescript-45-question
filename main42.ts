let Magician_list : string[] = ["dynamo","roy horn","david copper field","david blaine"]

    function show_magician(great:string,){
        for (let item of Magician_list){
        console.log(great,item);
    }
    
}
show_magician("Hello,how are you Mr.")
show_magician("Hello")