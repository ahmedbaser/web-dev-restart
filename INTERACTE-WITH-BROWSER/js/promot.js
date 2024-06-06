// alert('How are You');
const showAlert = () => {
    alert('Do you have any money for cardit') 
}


const lendMoney = () => {
  const result =  confirm('Will you lend me 500 taka')
  console.log(result);
  if(result === true) {
    alert('this is the best form me')
  } else {
    console.log('this is not good for me but not bed')
  }
}


const getInfo = () => {
const name =   prompt('tell me your name') 
 if(name === null) {
    alert('This is not good thing to keep empty name placed')
 } else {
    console.log('This is good thing for me');
 }
}





