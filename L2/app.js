// Object, Array, Tupple, Enum
console.log("Object, Array, Tupple, Enum");
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["AUTHOR"] = 1] = "AUTHOR";
    Role[Role["USER"] = 2] = "USER";
})(Role || (Role = {}));
;
var person = {
    name: "Danish Ali",
    age: 25,
    job: {
        designation: "Software Engineer",
        salary: 200
    },
    skills: ["Frontend", "Backend", "Database"],
    product: [5, "Shirt"], // Tupple:- Fixed array of two types
    role: Role.ADMIN
};
console.log("person", person);
if (person.role === Role.AUTHOR) {
    console.log("Author");
}
else if (person.role === Role.ADMIN) {
    console.log("Admin");
}
else if (person.role === Role.USER) {
    console.log("User");
}
var favLanguage1;
favLanguage1 = ["Urdu", "English"];
var favLanguage2; // lose ts powers by using any
favLanguage2 = ["Urdu", "English", true, 35];
