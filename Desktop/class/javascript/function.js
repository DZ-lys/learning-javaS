// function addNumbers(n1, n2){
//     console.log("addition complete");
//     return n1 + n2;
// }
// let addition = addNumbers(7, 3);
// console.log(addition); 

// function printNumbers(n) {
//     for (let i = 1;i <=n; i++){
//         console.log(i);
//     }
// }

// printNumbers(100);


// function toCelsius(fahrenheit) {
//     return (5 / 9) * (fahrenheit - 32);
// }

// let value=toCelsius(86);
// console.log("celsius", value);

// let max = (a, b, c, d) => {
//     if (a >= b && a >=c && a >= d) return a;
//     if (b >= a && b >=c && b >= d) return b;
//     if (c >= a && c >=b && c >= d) return c;
//     return d;
// }

// function max4() {
//     let m = max(a, b, c, d);

//     let m4 = m * 3;
//     console.log(m4);
// }

// console.log(max(10, 25, 20, 15));

// const leapYear = (year) => {
//     if (year % 400 == 0) return console.log(year, "is a leap year");
//     if (year % 100 == 0) return console.log(year, "is not a leap year");
//     if (year % 4 == 0)  return console.log(year, "is a leap year");
//     return console.log(year, "is not a leap year");
// }

// leapYear(2100);

const min = (a, b) =>{
    if (a <= b) return a;
    return b;
}

const gcd = (a, b) => {
    let m = min(a, b);

    while(true){
        if (a % m===0 && b % m===0) return (m);
        m--;
        
    }
}
   
console.log(gcd(121, 132));