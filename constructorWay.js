function Student(firstName, age) {

    this.firstName = firstName;
    this.age = age;
}

Student.prototype.getFirstName = function () {
    return this.firstName;
}

const student = new Student('Krithick', 12);
const student2 = new Student('Chandrav', 8)

console.log(Student);
