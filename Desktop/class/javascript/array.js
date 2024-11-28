// let numbers = [11, 12, 13, 14, 15, 16, 18, 17, 19, 20, 21, 22, 23, 24, 25];

// function findOddNumbers(input) {
//     let oddNumbers = [];
//     for(let i = 0; i < numbers.length; i++) {
//         if (input[i] % 2 === 0) oddNumbers.push(input[i]);
//     }
//     return oddNumbers;
// }

// let answer = findOddNumbers(numbers);
// console.log(answer);

// function findMaxNum(input) {
//     let max = answer[0];
//     for(let i = 0; i < answer.length; i++) {
//         if (input[i] > max) max = input[i];
//     }
//     return max;
// }

// let max = findMaxNum(answer);
// console.log(max);

let TransActions = [-5000, 25000, -15000, -3000, 2500, -1, 10000, -100000, 50];

let income = (transfers) => {
    let income = [];
    for(let i = 0; i < TransActions.length; i++) {
        if (transfers[i] > 0) income.push(transfers[i]);
    }
    return income;
}

let expenses = (transfers) => {
    let expenses = [];
    for(let i = 0; i < TransActions.length; i++) {
        if (transfers[i] < 0) expenses.push(transfers[i]);
    }
    return expenses;
}

let spent = expenses(TransActions);
let gains = income(TransActions);

console.log(spent);
console.log(gains);