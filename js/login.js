//step-1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click',function()
{
    //console.log('submit button clicked');
    //step-2: get the email address inside the email input field
    //always remember to use .(dot)value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email =  emailField.value;
    /*
    step 3: get password
    3a. set id on the html element
    3b. get the element
    3c. get the value from the element
    */
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    //console.log(email, password);
    //Step-4: verify email and password
    //Danger: (do not) verify email password on the client side with inspect consol, check whether valid user or not
    /**/
    if(email === 'sontan@baap.com' && password === 'secret'){
        //console.log('valid user');
        window.location.href = "bank.html";
    }
    else{
        //console.log('invalid user');
        alert('password bhul khene ba');
    }
    
}
)