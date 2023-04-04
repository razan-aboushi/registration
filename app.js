function validateForm() 
{
    // Get form inputs
    let username = document.forms["registrationForm"]["username"].value;
    let password = document.forms["registrationForm"]["password"].value;
    let email = document.forms["registrationForm"]["email"].value;
    let phone = document.forms["registrationForm"]["phone"].value;



    // Validate username without spaces

    if (username.trim().length == 0)   //The trim() method removes whitespace from both ends of a string and returns a new string, without modifying the original string
     {
        alert("Username is required");
        return false;
    }
     else if (/\s/g.test(username)) //It will perform a test if the name contains spaces, it will give an alert message and return false
    {
        alert("Username can't contain spaces");
        return false;
    } 

    else if (sessionStorage.getItem(username) !== null)  // Check if username exists in session storage     //If the username is not equal to null, it means it exists

     {
        alert("Username already exists");
        return false;
    }

    // Validate password input 
    if (password.length < 8) 
    {
        alert("Password must be at least 8 characters long");
        return false;
    } 

    else if (!/[0-9]/.test(password)) //If it not contains numbers from the range 1-9

     {
        alert("Password must contain at least 1 number");
        return false;
    } 

    else if (!/[A-Z]/.test(password))
     {
        alert("Password must contain at least 1 uppercase letter");
        return false;
    }

     else if (!/[^A-Za-z0-9]/.test(password)) 
     {
        alert("Password must contain at least 1 special character");
        return false;
    }

    // Validate email
    if (!/\S+@\S+\.\S+/.test(email)) // search for at least non-whitespace characters
     {
        alert("E-mail must be in a valid format such as example@gmail.com");
        return false;
    }

    // Validate phone number to be " 10 digits starts with 07 "
    if (!/^07[0-9]{8}$/.test(phone))
     {
        alert("Phone number must be 10 digits starting with 07");
        return false;
    }

    //Here we Save form data to session storage
    sessionStorage.setItem(username, JSON.stringify({
        "password": password,
        "email": email,
        "phone": phone
    }));

    alert("Your registration has been successfully!");
    return false;
}