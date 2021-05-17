const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const password2=document.getElementById('password2');

form.addEventListener('submit',(e)=>{
e.preventDefault();
 checkInputs();
 
});

function checkInputs(){
    //get the value
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value =password2.value.trim();

    if(usernameValue ===""){
        setErrorFor(username, "username cannot be blank");}
        else {
            setSuccessFor(username);
        }
        if(emailValue ===""){
            setErrorFor(email, "email cannot be blank");}  
         else if(!isEmail(emailValue)) {
            setErrorFor(email, "email is not valid!");
         } 
         else{
            setSuccessFor(email); 
         }  

         if(passwordValue ===""){
            setErrorFor(password, "password cannot be blank");}
            else {
                setSuccessFor(password);
            }
        
        if(password2Value ===""){
                setErrorFor(password2, "password check cannot be blank");
            }else if(passwordValue != password2Value){
                setErrorFor(password2, "passwords does not match");
            } else{
                    setSuccessFor(password2);
             }
            
            }


    function setErrorFor(input, message){
        const formControl=input.parentElement;//.form-control
        const small= formControl.querySelector('small');

        small.innerText=message;
        formControl.className ="form-control error";
    }

    function setSuccessFor(input){
        const formControl=input.parentElement;//.form-control
        formControl.className ="form-control success";

}
function isEmail(email){
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(email);
}

