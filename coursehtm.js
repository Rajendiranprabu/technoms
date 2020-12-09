class Course {
    constructor(courseId, courseName, fees) {
        this.courseId = courseId;
        this.courseName = courseName;
        this.fees = fees;
        status = boolean;
    }

    getCourseDetails() {
        console.log(this.courseId + "" + this.courseName + "" + this.fees)
    }

}

class CourseHTM {
    static addCourse(course) {
        const form = document.getElementById('form1');
        const courselist = document.createElement('ul');
        courselist.innerHTML = `<li>${course.courseId} &nbsp; <input type='button' value=delete> </li>`
        const submit = document.getElementById('submit');

        form.appendChild(courselist, submit)


    }
}

class LocalStore {




    static addtoLocal(course) {

        let courses = this.getCourses();

        courses.push(course)
        localStorage.setItem('courses', JSON.stringify(courses))
        CourseHTM.addCourse(course);


        // localStorage.removeItem('name')
        console.log(course);

    }

    static getCourses() {

        let courses;
        if (localStorage.getItem('courses') === null) {
            courses = [];
        }
        else {
            courses = JSON.parse(localStorage.getItem('courses'));
        }
        return courses;

    }

}
document.getElementById('submit').addEventListener('click', (e) => {
    const cid = document.getElementById('cid').value;
    const cname = document.getElementById('cname').value;
    const fees = document.getElementById('fees').value;

    const course = new Course(cid, cname, fees);

    //const coursehtm = new courseHTM();
    //coursehtm.addtoLocal(course);

    LocalStore.addtoLocal(course);

    let courses = LocalStore.getCourses();
    console.log(courses)
    e.preventDefault();
})

document.getElementById('form1').addEventListener('click', (e) => {
    // console.log(e.target.parentElement.textContent);
    e.target.parentElement.remove();

    let courses = LocalStore.getCourses();

    courses.forEach((course, i) => {

        let id = e.target.parentElement.textContent.trim();
        console.log(id);
        if (course.courseId == id) {
            console.log(course.courseId);
            courses.splice(i, 1);
        }

    })  // }
    localStorage.setItem('courses', JSON.stringify(courses));
})

function loadCourses() {
    const courses = LocalStore.getCourses();
    courses.forEach(element => {
        CourseHTM.addCourse(element);
    });
    console.log("welcome")
}

document.getElementById('DOMContentLoaded', loadCourses());