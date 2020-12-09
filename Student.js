const students = [
    {
        stid: 100,
        stName: " Akshay",
        Course: "Java Script",
        status: true
    },
    {
        stid: 102,
        stName: " Naresh",
        Course: "React",
        status: false
    },
    {
        stid: 100,
        stName: " Kumar",
        Course:
        {
            cid: "c101",
            name: "Angular",
        },
        Enrolled_course: ['Java', 'MicroServices', 'Angular'],

        status: true
    }
]


//console.log(students[2].Enrolled_course[0]);

for (let student of students) {
    console.log(student.Course);
}

function sample(a, b) {
    console.log("Welocme" + a)
}

//sample(25, 35);

const sample2 = a => { console.log("welcome2 " + a) }


//sample2(10);

const names = students.map(student => {
    return student.Course;
})

const currentStudents = students.filter(student => {
    return student.status == true
}
)


const studentnames = students.filter(student => {
    return student.status == true
}).map(student => {
    return student.stName;
})

//console.log(names)

console.log(studentnames)