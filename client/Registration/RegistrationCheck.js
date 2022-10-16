//create a function to check username and password
import { validateUsername, validatePassword, validateEmail } from "../Login/Validation.js";
import { Registration } from "../API/Registration.js";
const RegistrationCheck = (username, password, email, { setPageID, setUserNameGlobal, setPasswordGlobal })  => {
    setUserNameGlobal("");
    setPasswordGlobal("");
    var usernamePrompt = validateUsername(username);
    var passwordPrompt = validatePassword(password);
    var emailPrompt = validateEmail(email);
    if (usernamePrompt !== null) {
        alert(usernamePrompt);
    }
    else if (passwordPrompt !== null) {
        alert(passwordPrompt);
    }
    else if (emailPrompt !== null) {
        alert(emailPrompt);
    }
    else {
        //register in database
        var deviceID=null
        var user = Registration(username, password, email, deviceID);
        alert("Registration Successful");
        setPageID("login");
    }
}
export default RegistrationCheck