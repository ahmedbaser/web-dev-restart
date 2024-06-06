function greeting(greetingHandeler, name) {
   greetingHandeler(name)
}
// const name = 'Halim mama';
// const numbers = [45, 54, 78];
// const laptop = {price: 45000, brand: 'lenovo', memory: '8gb'}

function greetingHandeler(name) {
   console.log('Good morning',name) 
}

function greetNight(name) {
   console.log('Good Night', name)
}

function greetEvening(name) {
   console.log('Good Evening', name);
}


greeting(greetingHandeler, 'Tom Hanks');
greeting(greetingHandeler, 'Tom Brady');
greeting(greetingHandeler, 'Tom Cruise');
greeting(greetingHandeler, 'Tom Solaiman');
greeting(greetEvening,'Tom Salman');
greeting(greetNight, 'Tom Nice')


function submitHandeler() {
   console.log('submit button clcked')
}
document.getElementById('btn-submit').addEventListener('click', submitHandeler)