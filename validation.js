//login validation
let userEmail = document.querySelector(".user-email");
let userPwd = document.querySelector(".user-password");
let btn = document.querySelector(".login-submit");
let cnfmPwd =  document.querySelector(".cnfrm-password")
let emailError = document.querySelector("#email-error");
let pwdError = document.querySelector("#pwd-error");
let cnfmPwdError = document.querySelector("#cnfrmPwd-error");
let userName = document.querySelector(".user-name");
let userNameError  = document.querySelector("#username-error")
let form = document.querySelector("form")

//email
function emailValidation(){
    let emailInput = userEmail.value;
    if(emailInput == ""){
        btn.disabled = true;
        emailError.textContent = "Please fill the input fields"
        return false;
    }
    if(!emailInput.match(/^[A-Za-z]{3,}\@[a-z]{3,}\.[a-z]{2,3}$/)){
        btn.disabled = true;
        emailError.textContent = "Please enter the valid email";
        return false;
    }
    btn.disabled = false;
    emailError.innerHTML = `<i class="fas fa-check checkmark"></i>`;
    return true;
}
userEmail.addEventListener("keyup",emailValidation);
userEmail.addEventListener("blur",emailValidation);

//password
function pwdValidation(){
    let pwdInput =  userPwd.value;
    if(pwdInput == ""){
        btn.disabled = true;
        pwdError.textContent = "Please fill the input fields";
        return false;
    }
    if(!pwdInput.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!?&])[A-Za-z\d@$!?&]{8,}$/)){
        btn.disabled = true;
        pwdError.textContent = "Please enter the valid password"
        return false;
    }
    btn.disabled = false;
    pwdError.innerHTML = `<i class="fas fa-check checkmark"></i>`;
    return true;    
}
userPwd.addEventListener("keyup",pwdValidation);
userPwd.addEventListener("blur",pwdValidation)

//confirm password
function cnfmPwdValidation(){
    let cnfrmPwdInput = cnfmPwd.value;
    if(cnfrmPwdInput == ""){
        btn.disabled = true;
        cnfmPwdError.textContent = "Please fill the input fields";
        return false;
    }
    if(userPwd.value != cnfrmPwdInput){
        btn.disabled =  true;
        cnfmPwdError.textContent = "Password doesn't match";
        return false;
    }
    btn.disabled = false;
    cnfmPwdError.innerHTML = `<i class="fas fa-check checkmark"></i>`;
    return true;
}
cnfmPwd.addEventListener("keyup", cnfmPwdValidation);
cnfmPwd.addEventListener('blur',cnfmPwdValidation);

function userNameValidation(){
    let userInput = userName.value;
    if(userInput == ""){
        btn.disabled =  true;
        userNameError.textContent = "Please fill the input fields";
        return false;
    }
    if(!userInput.match(/^[a-zA-Z]{3,6}\d{2,4}$/)){
        btn.disabled =  true;
        userNameError.textContent = "Please enter the valid username";
        return false;
    }
    btn.disabled =  false;
    userNameError.innerHTML = `<i class="fas fa-check checkmark"></i>`;
    return true;
}
userName.addEventListener("keyup",userNameValidation);
userName.addEventListener("blur",userNameValidation);
//preventing default behaviour of button
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    if(!emailValidation() || !pwdValidation() || !cnfmPwdValidation() || !userNameValidation()){
        return false;
    }
    form.submit()
})

