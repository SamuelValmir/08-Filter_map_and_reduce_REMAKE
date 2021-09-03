let newStudent = (register, name, age) => { return { register, name, age }; }

let students = [
    newStudent(1000, "Samuel", 20),
    newStudent(1001, "Higor", 20),
    newStudent(1002, "Baiha", 19),
    newStudent(1003, "Isabely", 18),
    newStudent(1004, "Gabriel", 15),
]

let getAdults = student => {
    if (student.age >= 18) {
        return student;
    }
}

let getChildren = student => {
    if (student.age < 18) {
        return student;
    }
}

//* Building my own filter
function myFilter(callback) {
    let filteredList = [];
    for (let student of this) {
        if (callback(student)) {
            filteredList.push(student);
        }
    }
    return filteredList;
}

students.myFilter = myFilter;


// Filter is responsible for to filter a list. Result some filtered content.
console.log(students.myFilter(getAdults));


let firstLetter = student => {
    return student.name[0];
}

//* Building my own map
function myMap(callback) {
    let mappedList = [];
    for (let student of this) {
        mappedList.push(callback(student));
    }
    return mappedList;
}

students.myMap = myMap;

// Map is responsible for to filter a list doing some changes. Make another list based on another one.
console.log(students.myMap(firstLetter));



let allNames = (total, student) => total + " " + student.name;

let sumAges = (total, student) => total + student.age;

//* Building my own reduce
function myReduce(callback, initialValue) {
    let total = initialValue;

    for (let student of this) {
        total = callback(total, student);
    }
    return total;
}

students.myReduce = myReduce;

// Reduce is responsible for to reduce a list in a simple result. 
console.log(students.myReduce(sumAges, 1));