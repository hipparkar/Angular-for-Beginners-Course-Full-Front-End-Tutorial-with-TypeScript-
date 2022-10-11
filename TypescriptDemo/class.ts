import {Login, User} from './interface';
// import {User} from './interface';
// import * as UserLogin from './interface';


interface Address {
    street: string;
    city: string;
    state: string;
    pin: string;
}


class Employee implements Login {
    #id: number; //# is nothing but same as private keyword
    protected name: string;

    address: Address;

    //getter
    get empId(): number {
        return this.#id;
    }

    //setter
    set empId(id: number) {
        this.#id = id;
    }

    static getEmployeeCount(): number {
        return 50;
    }

    constructor(id: number, name: string, address: Address) {
        this.#id = id;
        this.name = name;
        this.address = address;
    }
    login(): User {
        return {name: "John", id: 1, email: ""};
    }

    getNameWithAddress(): string {
        return `${this.name} stays at ${this.address}`; //string literals
    }
}

let john = new Employee(1, 'John', {
    street: "ABC",
    city: "Bangalore",
    state: "Karnataka",
    pin: "123456"
});

// Employee.getEmployeeCount();
john.empId = 100;
console.log(john.empId);


class Manager extends Employee {
    constructor(id: number, name: string, address: Address) {
        super(id, name, address);
    }
    // getNameWithAddress(): string {
    //     return `${this.name} is a manager at ${this.address}`;
    // }
}
// john.id = 1;
// john.name = 'John';
// john.address = 'Highway 21';

console.log(john);

let address = john.getNameWithAddress();
console.log(address);

// let mike = new Manager(2, 'Mike', 'Cherise Drive');
// console.log(mike.getNameWithAddress()); //inheritance
