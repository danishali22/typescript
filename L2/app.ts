// Object, Array, Tupple, Enum

console.log("Object, Array, Tupple, Enum")

enum Role {ADMIN, AUTHOR, USER};

const person : {
    name: string;
    age: number;
    job: {
        designation: string;
        salary: number;
    }
    skills: string[];
    product: [number, string];
    role: Role
} = {
    name: "Danish Ali",
    age: 25,
    job: {
        designation: "Software Engineer",
        salary: 200
    },
    skills: ["Frontend", "Backend", "Database"],
    product: [5, "Shirt"],  // Tupple:- Fixed array of two types
    role: Role.ADMIN
}

console.log("person", person);
if (person.role === Role.AUTHOR) {
    console.log("Author");
} else if (person.role === Role.ADMIN) {
    console.log("Admin");
} else if (person.role === Role.USER) {
    console.log("User");
}

let favLanguage1: string[];
favLanguage1 = ["Urdu", "English"];

let favLanguage2: any[];  // lose ts powers by using any
favLanguage2 = ["Urdu", "English", true, 35];
