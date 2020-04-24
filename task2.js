let student1 = {
    name: "A",
    age: 18,
    school: "X",
    subjectList: ["Physics", "Maths", "English"],
    marks: [90, 100, 96],
    printDetails: () => {
        console.log("Name: " +student1.name);
        console.log("Age: " +student1.age);
        console.log("School: " +student1.school);
    }
};

let student2= {
    name: "B",
    age: 17,
    school: "Y",
    subjectList: ["Physics", "Maths", "English"],
    marks: [95, 90, 85],
    printDetails: () => {
        console.log("Name: " +student2.name);
        console.log("Age: " +student2.age);
        console.log("School: " +student2.school);
    }
};

let student3 = {
    name: "C",
    age: 19,
    school: "Z",
    subjectList: ["Physics", "Maths", "English"],
    marks: [88, 94, 93],
    printDetails: () => {
        console.log("Name: " +student3.name);
        console.log("Age: " +student3.age);
        console.log("School: " +student3.school);
    }
};


function average(obj){
    obj.printDetails();
    console.log("Average Marks: " +(obj.marks[0]+obj.marks[1]+obj.marks[2])/3);
}
average(student1);
average(student2);
average(student3);

