// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {

  var passwordCriteria = "Password Length will be ";

  var PasswordLength = prompt("Enter the Length of Password");
  passwordCriteria = passwordCriteria + PasswordLength;

  if(PasswordLength < 8 || PasswordLength > 128){
    alert("wrongLength");
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




    
    
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);