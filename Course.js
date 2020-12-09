class Course {
    constructor(courseId, courseName, fees) {
        this.courseId = courseId;
        this.courseName = courseName;
        this.fees = fees;


    }

    getCourseDetails() {
        console.log(this.courseId + "" + this.courseName + "" + this.fees)
    }


}

const java = new Course(101, "Java", 10000)
const cShapp = new Course(102, "C#", 10000)
const ms = new Course(103, "MicroServices", 15000)

java.getCourseDetails();
cShapp.getCourseDetails();
ms.getCourseDetails();


