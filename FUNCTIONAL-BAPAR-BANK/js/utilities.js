function getInputFieldValueById(InputFieldId) {
    const InputField = document.getElementById(InputFieldId);
    const InputFieldValueString = InputField.value;
    InputField.value = '';
    const InputFieldValue = parseFloat(InputFieldValueString);
    return InputFieldValue;
}

function getTextElementValueById(elementId) {
    const textElement =  document.getElementById(elementId);
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);
    return textElementValue;
}


function setTextElementValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}


