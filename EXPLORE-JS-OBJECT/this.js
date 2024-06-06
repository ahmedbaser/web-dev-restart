// console.log(this)
const KodomAli = {
    name: 'Kodom Ali',
    money: 5000,
    study: 'Math',
    subject: ['calculus', 'algebra', 'geometry'],
    exam: function() {
        console.log(this);
        return this.name + ' is praticipating in an exam';
    },
    examArrow: () => {
        console.log(this);
    },

    examNested: () => {
        const arrow = () => {
            console.log(this);
        }
        arrow();
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
// KodomAli.exam();
const badamAli = {
    name: 'kacha badam',
    money: 8000 
}

badamAli.exam = KodomAli.exam;
badamAli.exam();

function clickHandler() {
    console.log('inside click handeler',this);
}

document.getElementById('btn-click').addEventListener('click', function() {
  console.log(this);
});
