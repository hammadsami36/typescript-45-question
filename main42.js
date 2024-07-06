var Magician_list = ["dynamo", "roy horn", "david copper field", "david blaine"];
function show_magician(great) {
    for (var _i = 0, Magician_list_1 = Magician_list; _i < Magician_list_1.length; _i++) {
        var item = Magician_list_1[_i];
        console.log(great, item);
    }
}
show_magician("Hello,how are you Mr.");
show_magician("Hello");
