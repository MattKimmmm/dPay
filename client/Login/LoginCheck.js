//create a function to check username and password
import {validateUsername, validatePassword} from "./Validation.js"
import {Login} from "../API/Login.js"
import AsyncStorage from "@react-native-async-storage/async-storage";
import {getTransactions} from "../API/Transaction.js"
const LoginCheck = (username,password, {setUser,setPageID, setTransactions}) =>{

    var usernamePrompt= validateUsername(username)
    var passwordPrompt = validatePassword(password)
    var loginSuccessful=false;
    var userID=null
    if (usernamePrompt !== null) {
        alert(usernamePrompt)
        
    }
    else if (passwordPrompt !== null) {
        alert(passwordPrompt)
    }
    else {
        //check database for username and password
        const user = Login(username,password)
        user.then((user)=> {
            if (user != null) {
              try {
                AsyncStorage.setItem("userName", username);
                AsyncStorage.setItem("password", password);
              } catch (error) {
                alert(error);
              }
              const transaction=getTransactions(user.id)
              transaction.then((transactionValue) =>{
                console.log(transactionValue)
                setTransactions(transactionValue)
              })
              alert("Login Successful");
              setUser(user);
              setPageID("home");
            } else {
              //store username and password in local storageKey
              alert("Login Unsuccessful");
            }
        })
        
        
        
    }
}

//export function LoginCheck
export {LoginCheck}