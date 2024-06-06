console.log('this is seperate file');
// Option: 1 directly add on buton

{/* <button onclick="document.body.style.backgroundColor='yellow'">Make Yellow</button> */}


// option 2: add onclick function ----> WE WILL USE THHIS SOME TIME
   
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

//option 2: add onclick function
   
   const makeBlueButton = document.getElementById('make-blue')
   makeBlueButton.onclick = makeBlue;


   function makeBlue() {
    document.body.style.backgroundColor = 'lavender';
   }

// option 3: add onclick function

    const purpleButton = document.getElementById('make-purple');
    purpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'skyblue';
   }

// option 4:   
 
const pinkButton = document.getElementById('make-pink')
pinkButton.addEventListener('click', makePink);


function makePink() {
  document.body.style.backgroundColor = 'pink';
}

// option 4: another

const makeGreenButton = document.getElementById('make-green');

makeGreenButton.addEventListener('click', function makeGreen(){
  document.body.style.backgroundColor = 'green';
});

// option 4: Final ---> WE WILL USE THIS

document.getElementById('make-gold').addEventListener('click', function(){
    document.body.style.backgroundColor = 'gold';
  })


