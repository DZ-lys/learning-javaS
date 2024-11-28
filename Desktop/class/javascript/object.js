let student = {
    name: "boldo",
    age: 15,
    school: "oyunlag",
    gender: "male",
    grades: [80, 90, 50],
};
student.age = 16;
student.grades[1] = 100;
// console.log(student);

let students = [
    {name: "alex", age: 15, gender: "male"},
    {name: "alyx", age: 18, gender: "female"},
    {name: "alexa", age: 23, gender: "female"},
    {name: "andy", age:13, gender: "male"},
    {name: "anton", age:31, gender: "male"},
]

let findAdults = (input) => {
    let adults = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i].age >= 18) adults.push(input[i]);
    }
    return adults;
}

let findMinors = (input) => {
    let minors = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i].age < 18) minors.push(input[i]);
    }
    return minors;
}

let adultList = findAdults(students);
let minorList = findMinors(students);
// console.log(ageResult);
console.log(minorList);

let findMales = (input) => {
    let males = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i].gender === "male") males.push(input[i]);
    }
    return males;
}

let findFemales = (input) => {
    let females = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i].gender === "female") females.push(input[i]);
    }
    return females
}

let maleList = findMales(students);
let femaleList = findFemales(students);
// console.log(maleList);
// console.log(femaleList);