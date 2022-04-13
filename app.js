const form = doccument.getElementById('form');
const username = doccument.getElementById('username');
const email = doccument.getElementById('email');
const password = doccument.getElementById('password');
const password2 = doccument.getElementById('password2');

// show error message
function showError(input, message){
    const formcontrol = input.parentElement;
    formcontrol.className='form-control error';
    const small = formcontrol.querySelector('small');
    small.innerText = message;
}



// Event listeners

form.addEventListener('submit', function(e){
    e.preventDefault();
    if(username.value === ''){
        showError(username, 'Username is required');
    }
    else{
        showsuccess(username);
    }
}