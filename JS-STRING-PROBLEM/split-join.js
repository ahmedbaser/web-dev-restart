const lyrics = '  Tumi bondhu kala pakhi ami jeno ki. bosonto kale tomai bolte pari ni.';
const parts = lyrics.split(' ');
const sentence = lyrics.split('.');
const chars = lyrics.split('');
// console.log(lyrics);
// console.log(parts);
// console.log(sentence);
// console.log(chars);

const partial = lyrics.slice(5,8);
// console.log(partial);

const partical2 = lyrics.substring(5, 8);
const partial3 = lyrics.charAt(5,9);
// const partical5 = lyrics.trim();

// console.log(partical2);
// console.log(partical4);
// console.log(lyrics.trim());
// console.log(lyrics);


const lines = [
     'Tumi bondhu kala pakhi ami jeno ki', 
     'bosonto kale tomai bolte pari ni.',
    'kala kala sad sada'];
     const newSong = lines.join(' : ')
     console.log(newSong);

