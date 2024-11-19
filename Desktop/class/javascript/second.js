let too = 19283752;
let leftover = too % 2;
if(leftover == 0) {
    console.log("even");
} else {
    console.log("odd");
}

let too1 = 19283751;
if(too1 % 7 == 0){
    console.log("can be divided");
} else {
    console.log("cant be devided");
}

// can be devided by 7 and 11
// can be devided by 7 but cant be devided by 11
// cant be devided by 7 but can be devided by 11
// cant be devided by either 7 and 11

let username = "andy";
let password = 1234;
if (username == "andy") {
    if (password == 1234){
        console.log("logging in");
    } else {
        console.log("incorrect password")
    }
} else {
    console.log("the username is incorrect");
}