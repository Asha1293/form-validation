let firstNameError = document.getElementById("firstname-error")
let lastNameError = document.getElementById("lastname-error")
let numberError = document.getElementById("number-error")
let emailError = document.getElementById("email-error")
let messageError = document.getElementById("message-error")
let submitError = document.getElementById("submit-error")



function validationFname(){
    let fName = document.getElementById("fname").value

    if(fName.length == 0 ){
        firstNameError.innerHTML = "FirstName required"
        return false
    }
        firstNameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
        return true
    

    }

function validationLname(){
        let lName = document.getElementById("lname").value
    
        if(lName.length == 0 ){
            lastNameErrorNameError.innerHTML = "SecondName required"
            return false
        }
            lastNameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
            return true
        
        
        }


function validationContactno(){
    let contactNo = document.getElementById("cnumber").value
    if(contactNo.length === 0){
        numberError.innerHTML = "ContactNo required"
        return false
    }
    if(contactNo.length !== 10){
        numberError.innerHTML = "ContactNo should be 10 digits"
        return false
    }
    if(!contactNo.match(/^[0-9]{10}$/)){
        numberError.innerHTML = "Only digits please"
        return false
    }
    
        numberError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
        return true
    
}        

function validationEmailid(){
    let email= document.getElementById("Email").value
    if(email.length === 0){
        emailError.innerHTML = "Email-id required"
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = "Email-id invalid"
    }
    
        emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
        return true
    

}

function validateMessage(){
    var message = document.getElementById("message").value
    var required = 30
    var left = required - message.length
    
if(left > 0){
    messageError.innerHTML = left + " more characters required"
    return false
}

    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
    return true


}

function validateForm(){
    if(!validationFname() || !validationLname() || !validationContactno() || !validationEmailid() || !validateMessage()){
        submitError.style.display = "block";
        submitError.innerHTML = 'please fix the error to submit'
        setTimeout(function(){submitError.style.display = 'none';} , 3000);
        return false
    }
}