const addToLocalStroage = () => {
    const idInput = document.getElementById('stroage-id');
    const id = idInput.value;
    const valueInput = document.getElementById('stroage-value');
    const value = valueInput.value;

if(id && value) {
    localStorage.setItem(id, value);
}

   
    idInput.value = '';
    valueInput.value = '';
}