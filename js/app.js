
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
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();



//name validation
    if(fullnameValue === ''){
        setErrorForInput(fullname,'Name cannot be Blank!');
    }
    else {
        setSuccessForInput(fullname);
    }


    // Email
    if(emailValue == ''){
        setErrorForInput(email,"Email cannot be Blank")
    }
    else if (!isEmail(emailValue)){
        setErrorForInput(email,"Enter a valid Email Address")
    }
    else{
        setSuccessForInput(email);
    }

//mobile no validation  
    if(mobileValue == ''){
        setErrorForInput(mobile,'Mobile Number Cannot be Blank')
    }
    else if (!mobCheck(mobileValue)){
        setErrorForInput(mobile,'Enter a Valid Mobile Number. Kindly avoid +91 or 0')
    }
    else {
        setSuccessForInput(mobile);
    }

//Gender validation

    // const male = document.getElementById('male');
    // const female = document.getElementById('female');
    // const other = document.getElementById('other');
    // if(gender == ''){
    //     setErrorForSelect(gender,'Select your gender!');
    // }
    // else{
    //     setSuccessForSelect(gender);
    // }


    // password validation
    if (passwordValue == ''){
        setErrorForInput(password,'Password Cannot be Blank');
    }
    else{
        setSuccessForInput(password);
    }


//confirm password

    if (password2Value == ''){
        setErrorForInput(password2,'Password cannot be Blank');
    }
    else if (passwordValue != password2Value){
        setErrorForInput(password2,'Password does not match')
    }
    else {
        setSuccessForInput(password2);
    }




}


//regx for validation


function isEmail(email){
    return /^[a-zA-Z]([a-zA-Z0-9]+)([\._]?)([a-zA-Z0-9]+)@[a-zA-Z]{3,}.([a-z]{2,3})((.[a-z]{2})?)$/.test(email);
}


function mobCheck(mobile){
    return /^[6-9][0-9]{9}$/.test(mobile);
}




// function to set success and Error in input field
function setErrorForInput(id, message) {

    const formControl = id.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.classList.add('error');
    formControl.classList.remove('success');


}


function setSuccessForInput(id){
    const formControl = id.parentElement;
    
    formControl.classList.add('success');
    formControl.classList.remove('error');
    
}


function setErrorForSelect(id, message) {
    const formSelect = id.parentElement;
    const small = formSelect.querySelector('small');

    small.innerText = message;

    formSelect.classList.add('error');
    formSelect.classList.remove('success');
}


function setSuccessForSelect(id){
    const formSelect = id.parentElement;
    
    formSelect.classList.add('success');
    formSelect.classList.remove('error');
}
