let fn = document.getElementById('fname');
let em = document.getElementById('email');
let msg = document.getElementById('message');

let ox = document.getElementById('submit');


// Event Handler:
function formValid() {
    let data = {};
    let errors = [];
    
    // Validating full name
    if (fn.value) {
        data.fullname = fn.value;
    } else {
        errors.push('Full name is missing!');
    }
    
    //Validating Email
    if (em.value) {
        data.email = em.value;
    } else {
        errors.push('Email is missing!');
    }
    
    // Validating message
    if (msg.value) {
        data.message = msg.value;
    } else {
        errors.push('Message name is missing!');
    }
    
    console.log(data, errors);
    
}

// Registering button for click event 
ox.addEventListener('click', formValid);
