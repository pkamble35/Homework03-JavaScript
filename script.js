// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {

  var passwordCriteria = "Password Length will be ";

  var PasswordLength = prompt("Enter the Length of Password");
  passwordCriteria = passwordCriteria + PasswordLength;

  if(PasswordLength < 8 || PasswordLength > 128){
    alert("The password length should be between 8 to 128 characters");
    return;
  }
  var LowercaseNeeded = confirm("Do you want lowercase in password!");
  
  if(LowercaseNeeded){
    passwordCriteria = passwordCriteria + " will contain lowercase ";
  }
   else{
    passwordCriteria = passwordCriteria + " will not contain lowecase ";
   }
   alert(passwordCriteria);

   var UppercaseNeeded = confirm("Do you want uppercase in password!");
   
   if(UppercaseNeeded){
    
    passwordCriteria = passwordCriteria + " and contain uppercase"
  }
   else{
    passwordCriteria = passwordCriteria + " and not contain uppercase"
   }
   alert(passwordCriteria);

   var numericNeeded = confirm("Do you want numeric in password");

   if(numericNeeded){
    passwordCriteria = passwordCriteria + " will contain numeric value for eg: 1,2,3 etc";
   }
   else{
    passwordCriteria = passwordCriteria + " will not contain  numeric value "; 
   }
   alert(passwordCriteria);

   var specialCharacter = confirm("Do you want specialCharacte in password");

   if(specialCharacter){
    passwordCriteria = passwordCriteria + " will contain specialCharacter for eg: #,&,* etc";
   }
   else{
    passwordCriteria = passwordCriteria + " will not contain  specialCharacte value "; 
   }
   alert(passwordCriteria);

   if(!LowercaseNeeded && !UppercaseNeeded && !numericNeeded && !specialCharacter){
     alert("you must select atleast one criteria try again!" );
   }
   
   var password = generatePassword();
   var passwordText = document.querySelector("#password");
   
   passwordText.value = password;
   return;

}
function generatePassword(){
  
  return "Pwd";
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);