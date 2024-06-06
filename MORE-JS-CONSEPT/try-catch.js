function checkAge() {
   const ageField = document.getElementById('age');
   const ageText = ageField.value;
   const errorTag = document.getElementById('error');

   try {
    const age = parseFloat(ageText);
    if(isNaN(age)){
        throw " Please enter a number"
    } else if(age < 18) {
        throw 'bacha kaccha not allowed'
    } else if(age > 30) {
        throw 'bura manus aikhan aisen na';
    }
    errorTag.innerHTML = '';




   } catch(err) {
    console.log('ERROR', err)
    errorTag.innerHTML ='something is wrong'
   }
   finally {
    console.log('all done inside try')
   }
  
}