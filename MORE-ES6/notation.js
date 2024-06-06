const student = {
    name: 'Kolim Udding',
    age: 15,
    class: 'Ten',
    marks: {
        math: 78,
        physics: 89,
        chemistry: 65
    },


}

const marks = student.marks;
const math = student.marks.math;

const chemistry = student['marks']['chemistry'];
console.log(chemistry);


const subject = 'math';
const subjectMarks = student.marks[subject];
console.log(subjectMarks);


// it's show error because subject is a veriable. it will be like that marks[subject]
const subjectTwo = student.marks.subject;
// console.log(subjectTwo);
