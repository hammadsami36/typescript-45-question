let currentusers : string [] = ["admin","ayesha","amber","maryam","alishba"];
let newusers : string [] =     ["admin","ayesha","amber","iqra","varda"];

for(let new_users of newusers){
    const lowercase_new_users = new_users.toLowerCase();

    if(currentusers.map(user => user.toLowerCase()).includes(lowercase_new_users)){
 console.log(`the username ${new_users}  is not available`);
}
}
else{
    console.log(`the username ${new_users}  is available`);
}