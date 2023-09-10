var email =  document.getElementById('email');
var btn = document.getElementById('button');
var message = document.getElementById('small')

btn.addEventListener('click', e => { 

    e.preventDefault();
    const emailVal = email.value; 
    
    email.classList.remove('error') 

    if(!validateEmail(emailVal)){ 
        email.classList.add('error');
        message.style.display='flex';

    }
    else{ 
        email.classList.remove('error')  
        message.style.display='none';
    }
})

function validateEmail(mail){
    var re =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return re.test(String(mail).toLocaleLowerCase());
}