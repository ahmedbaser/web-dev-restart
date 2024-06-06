const KodomAli = {
    name: 'Kodom Ali',
    money: 5000,
    study: 'Math',
    subject: ['calculus', 'algebra', 'geometry'],
    exam: function() {
        return this.name + ' is praticipating in an exam';
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

const result = KodomAli.exam();
const badamAli = {
    name: 'kacha badam',
    money: 8000 
}


const result2 = KodomAli.exam.call(badamAli);
// console.log(result2)

const badamMoney = KodomAli.treatDay.call(badamAli, 400, 40);
console.log(badamAli);

const badamMoney2 = KodomAli.treatDay.apply(badamAli, [1000, 100]);
console.log(badamMoney2);

const badamAliTreat = KodomAli.treatDay.bind(badamAli);
const remaining = badamAliTreat(1000, 100);
console.log(remaining);