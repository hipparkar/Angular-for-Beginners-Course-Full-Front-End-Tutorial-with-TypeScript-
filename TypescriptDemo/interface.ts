export interface User {
    name: string;
    age?: number; // ? makes it optional
    id: number;
    email: string;
}
let user: User = { name: "John", id: 1, email: "" };

let { name: userName, email: userLogin }: User = {
    name: "John",
    id: 1,
    email: "",
}; //Objet Destructuring: only name and email can be accessed

// user.name;
// user.email;
// userLogin

interface Employees extends User {
    salary: number;
}

let employee: Employees = {
    name: "John",
    // age: 25;
    id: 1,
    email: "",
    salary: 10000,
};

export interface Login {
    login(): User; //method defination
}

let [user1, user2, ...restUsers]: User[] = [
    { name: "John", id: 1, email: "" },
    { name: "John1", id: 2, email: "" },
    { name: "John2", id: 3, email: "" },
    { name: "John3", id: 4, email: "" },
];

console.log(user1);
console.log(user2);
console.log(restUsers);

let result = restUsers.filter((user) => user.id > 3);
console.log(result);



//----------------Decorators----------------
// @Component({})
// class Component {
//     constructor(public name: string) { }
// }
