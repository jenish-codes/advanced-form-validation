
const form = document.getElementById('form');
const fullname = document.getElementById('name');
const email = document.getElementById('email');
const mobile = document.getElementById('mobile');
const gender = document.getElementById('gender');
const nationality = document.getElementById('nationality');
const state = document.getElementById('state');
const languages = document.getElementById('languages');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const checkAgreement = document.getElementById('checkAgreement');


form.addEventListener('submit', (e)=> {
    e.preventDefault();
    validateForm();
});


function validateForm(){

    const fullnameValue = fullname.value.trim();
    const emailValue = email.value.trim();
    const mobileValue = mobile.value.trim();
    const genderValue = gender.value.trim();
    const nationalityValue = nationality.value.trim();
    const stateValue = state.value;
    const languagesValue = languages.value;
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const checkAgreementValue = checkAgreement.value;


}

// function to set success and Error in input field
function setErrorForInput(id, message) {


}


function setSuccessForInput(id){

}


function setErrorForSelect(id, message) {

}


function setSuccessForSelect(id){

}