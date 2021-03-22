const loginForm = document.getElementById('login-form');
const loginBtn = document.getElementById('login-btn');
const loginEmail = document.getElementById('login__email');
const loginPass = document.getElementById('login__pass');
const gotoSignup = document.getElementById('goto-signup');
const signupForm = document.getElementById('signup-form');
const signupFname = document.getElementById('signup__fname');
const signupLname = document.getElementById('signup__lname');
const signupEmail = document.getElementById('signup__email');
const signupMobile = document.getElementById('signup__mobile');
const signupBtn = document.getElementById('signup-btn');
const gotoLogin = document.getElementById('goto-login');
const dashboard = document.getElementById('dashboard');
const goBack = document.getElementById('go-back');

gotoSignup.addEventListener('click', function(){
    loginForm.style.display = 'none';
    gotoSignup.style.display = 'none';
    gotoLogin.style.display = 'block';
    signupForm.style.display = 'block';
})

gotoLogin.addEventListener('click', function(){
    signupForm.style.display = 'none';
    gotoLogin.style.display = 'none';
    gotoSignup.style.display = 'block';
    loginForm.style.display = 'block';
})

loginBtn.addEventListener('click', function(e){
    if(loginEmail.value !== ''&& loginEmail.value !== 'null' && loginPass.value !== '' && loginPass !== 'null') {
        if (loginPass.value.length <= 5) {
            alert('Your Password should be grater than 5!');
        } else {
            loginForm.style.display = 'none';
            dashboard.style.display = 'block';
            e.preventDefault();
            console.log(loginEmail.value);
            console.log(loginPass.value);
        }
    }else {
        alert('Form should not be blanked, please fill it up.');
    }
})

signupBtn.addEventListener('click', function(e){
            signupForm.style.display = 'none';
            dashboard.style.display = 'block';
            e.preventDefault();
})

goBack.addEventListener('click', function(){
    dashboard.style.display = 'none';
    loginForm.style.display = 'block';
    gotoSignup.style.display = 'block';
    loginEmail.value = '';
    loginPass.value = '';
})