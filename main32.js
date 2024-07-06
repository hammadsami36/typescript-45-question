var currentusers = ["admin", "ayesha", "amber", "maryam", "alishba"];
var newusers = ["admin", "ayesha", "amber", "iqra", "varda"];
for (var _i = 0, newusers_1 = newusers; _i < newusers_1.length; _i++) {
    var new_users = newusers_1[_i];
    var lowercase_new_users = new_users.toLowerCase();
    if (currentusers.map(function (user) { return user.toLowerCase(); }).includes(lowercase_new_users)) {
        console.log("the username ".concat(new_users, "  is not available"));
    }
}
{
    console.log("the username ".concat(new_users, "  is available"));
}
