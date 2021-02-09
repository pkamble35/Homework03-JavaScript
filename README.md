# Password Generator 
This project generates a password, based on a user's criteria what i have done is down below.
- Prompt the user to get the desired length of Password.
- Made a condition (if & else). check if the input doesn't meet the critria alert the user about it and exit.
- Then confirmed where user can choose the characters like lowercase, uppercase, numeric and/or special characters.
- show user a series of confirm options for lowercase, uppercase, numeric & special character.
- If the user doesn't select any options showed and alert you have to selct atlease one option and exit.
- while generating the password I check the lenght of the password requested by the user and also save the number of criteria the user selected.
- Based on that , I decide how many characters will go in each criteria. and whatever is remainging I assign it to the last criteria.
- For example , if the user entered the lenght of password as 13 and the criteria as uppercase , lowercase and numeric , I will create password with 4 uppercase , 4 lowercase and 5 numeric value.
- Alert and display the generated password.