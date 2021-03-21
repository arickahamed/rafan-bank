const loginForm = document.getElementById('login-form');
const loginBtn = document.getElementById('login-btn');
const input = document.getElementsByTagName('input');
const gotoSignup = document.getElementById('goto-signup');
const signupForm = document.getElementById('signup-form');
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
    loginForm.style.display = 'none';
    dashboard.style.display = 'block';
    e.preventDefault();
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
})