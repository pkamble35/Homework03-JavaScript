// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {

  var criteriaCount = 0;

  var upperCasecharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  var lowerCasecharacters = 'abcdefghijklmnopqrstuvwxyz';

  var numericCharacters = '0123456789';

  var specialCharacters = "~`!#$%^&*+=-[]\\\';,/{}|\":<>?";
  var passwordText = document.querySelector("#password");

 

  var passwordGenerated = '';

 

var PasswordLength = prompt("Enter the Length of Password");

 

  if(PasswordLength < 8 || PasswordLength > 128 ){

                  alert('Password Length should be more than 8 and less than 128');
                  passwordText.value = "Your Secure Password";
                  return;

  }

 

var LowercaseNeeded = confirm("Do you want lowercase in password!");

  if(LowercaseNeeded)criteriaCount++;



  var UppercaseNeeded = confirm("Do you want uppercase in password!");

  if(UppercaseNeeded) criteriaCount++;



  var numericNeeded = confirm("Do you want numeric in password");

  if(numericNeeded) criteriaCount ++;



  var specialCharacterNeeded = confirm("Do you want special Character in password");

  if(specialCharacterNeeded) criteriaCount++;

 

  if(criteriaCount === 0){

                  alert("You must select at least one criteria. Try again!");
                  passwordText.value = "Your Secure Password";
                  return;

  }

                 

 

  // Calculate the distribution.

  var remainingCount = PasswordLength % criteriaCount;

  var characterShare = (PasswordLength - remainingCount)/criteriaCount;

 

  if(LowercaseNeeded){

                  for (var i = 0 ; i < characterShare; i++){

                                  passwordGenerated = passwordGenerated + lowerCasecharacters.charAt(Math.floor(Math.random() * characterShare));

                  }

                  criteriaCount = criteriaCount - 1;

                  if(criteriaCount == 0 ){

                                  for(var i = 0 ; i < remainingCount ; i++){

                                  passwordGenerated = passwordGenerated + lowerCasecharacters.charAt(Math.floor(Math.random() * remainingCount));

                                  }

                  }

                 

  }

 

  if(UppercaseNeeded){

                  for (var i = 0 ; i < characterShare; i++){

                                  passwordGenerated = passwordGenerated + upperCasecharacters.charAt(Math.floor(Math.random() * characterShare));

                  }

                  criteriaCount = criteriaCount - 1;

                  if(criteriaCount == 0 ){

                                  for(var i = 0 ; i < remainingCount ; i++){

                                  passwordGenerated = passwordGenerated + upperCasecharacters.charAt(Math.floor(Math.random() * remainingCount));

                                  }

                  }                                                             

  }

 

  if(numericNeeded){

                  for (var i = 0 ; i < characterShare; i++){

                                  passwordGenerated = passwordGenerated + numericCharacters.charAt(Math.floor(Math.random() * characterShare));

                  }

                  criteriaCount = criteriaCount - 1;

                  if(criteriaCount == 0 ){

                                  for(var i = 0 ; i < remainingCount ; i++){

                                  passwordGenerated = passwordGenerated + numericCharacters.charAt(Math.floor(Math.random() * remainingCount));

                                  }

                  }                                                             

  }

 

  if(specialCharacterNeeded){

                  for (var i = 0 ; i < characterShare; i++){

                                  passwordGenerated = passwordGenerated + specialCharacters.charAt(Math.floor(Math.random() * characterShare));

                  }

                  criteriaCount = criteriaCount - 1;

                  if(criteriaCount == 0 ){

                                  for(var i = 0 ; i < remainingCount ; i++){

                                  passwordGenerated = passwordGenerated + specialCharacters.charAt(Math.floor(Math.random() * remainingCount));

                                  }

                  }                                                             

  }

  alert('The password is : ' + passwordGenerated);

  

  passwordText.value = passwordGenerated;

}





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);