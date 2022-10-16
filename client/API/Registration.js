
const Registration = async (username, password, email, deviceID) => {

    var url = "http://localhost:3000/registration";
    
    var response = await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password,
            email: email,
            // deviceID: deviceID
        })
    });
    response.then((response) => {
        console.log(response);
    });

    return response.json();
}

export default Registration;