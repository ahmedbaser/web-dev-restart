const lyrics = 'Tumi bondhu kala pakhi ami jeno ki. bosonto kale tomai bolte pari ni.';

const searchString = 'PaKhi';
// const doesExist = lyrics.includes('pakhi');
// const doesExist = lyrics.includes(searchString);
const doesExist = lyrics.toLowerCase().includes(searchString.toLowerCase());
console.log(doesExist);

// ------------------------------//
//   indexof 

console.log(lyrics.indexOf('kaila'));
console.log(lyrics.indexOf('Tumi'));

if(lyrics.indexOf('sada') !==-1) {
    // console.log('exist insiede the string')
} else {
    // console.log('cannot find it');
}

// startWith

console.log(lyrics.startsWith('2mi'));

// ensdWith
const fileName = 'mybiodata.pdf';
const otherFile = 'mypic.png';
fileName.endsWith('pdf');

console.log(fileName.endsWith('pdf'));