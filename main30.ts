let userName : string [] = ["admin","ayesha","maryam","amber","alishba"];
userName.forEach(userName =>{
    if(userName === "admin"){
      console.log("Hello",userName,"would you like to see a status report")  
    }else{
        console.log("Hello",userName, "thank you for logging in again.") 
    }
        
})