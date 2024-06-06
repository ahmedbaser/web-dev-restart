const student = {
    name: 'Kodom Ali',
    money: 5000,
    study: 'Math',
    subject: ['calculus', 'algebra', 'geometry'],
    exam: function() {
        return this.name + 'is praticipating in an exam';
    },
    improveExam: function(subject) {
        this.exam();
        return `${this.name} is taking improvement exam on ${subject}`
    },
    treatDay: function(amount, tips) {
        this.money = this.money - amount - tips;
        return this.money;
    }
}

const output = student.exam();
// console.log(output);
const reExam = student.improveExam('algebra');
// console.log(reExam);

const remaining = student.treatDay(900, 100);
console.log(remaining);
const dolaremaning = student.treatDay(500, 50);
console.log(dolaremaning);