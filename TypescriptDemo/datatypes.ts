let lname: string;

lname = "Santosh";

let newname = lname.toUpperCase();

console.log(newname);

//----------------------------------------------------------

let age: number;

age = 25;
age = 25.5;

let dob = "25";
// age = "20"; // Type 'string' is not assignable to type 'number'.ts(2322)

let result = parseInt("dob");

//----------------------------------------------------------

let isValid: boolean = false;
console.log(isValid);
//----------------------------------------------------------

let empList: string[];
empList = ["Suraj", "Suraj1", "Suraj3", "Suraj"];

let deptList: Array<string>;

let numList: Array<number>;
numList = [1, 2, 3, 4, 5];

// let newNum = numList[5];

let results = numList.filter((num) => num > 2);
let num = numList.find((num) => (num === 2));
console.log(results);
console.log(num);


let emp = empList.filter((emp) => emp === "Suraj");
let emps = empList.find((emp) => emp === "Suraj");
console.log(emp);
console.log(emps);


let sum = numList.reduce((acc, num) => acc + num);
console.log(sum);
//----------------------------------------------------------

const enum Color {
    Red,
    Green,
    Blue
}

let c: Color = Color.Blue;
//----------------------------------------------------------

let swapNumbs : [number, number];

function swapNumbers(num1: number, num2: number) : [number, number] {
    return [num2, num1];
}

swapNumbs = swapNumbers(10, 20);

swapNumbs[0];
swapNumbs[1];
//----------------------------------------------------------

let department : any;
department = "IT";
department = 10;
//----------------------------------------------------------


