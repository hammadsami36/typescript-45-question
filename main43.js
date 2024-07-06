var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Magician_list2 = ["dynamo", "roy horn", "david copper field", "david blaine"];
// make a copy array
var Magician_listcopy = __spreadArray([], Magician_list2, true);
function show_magician(great) {
    var withgreating = "";
    for (var _i = 0, Magician_listcopy_1 = Magician_listcopy; _i < Magician_listcopy_1.length; _i++) {
        var item = Magician_listcopy_1[_i];
        withgreating = "".concat(great, " ").concat(item, "\n");
    }
    return withgreating;
}
;
var mygreatimg = show_magician("Hello");
var makeArray = mygreatimg.split("\n");
console.log(makeArray);
// orginal array
console.log(Magician_list2);
