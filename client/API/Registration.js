const Registration = async (username, password, email, deviceId) => {
  var url = "http://localhost:3000/registration";
  //generate random string
  var randomString =
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);
  var response = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
      email: email,
      deviceId: randomString,
      // deviceID: deviceID
    }),
  });
  var data = await response.json();
  if(data.error!=undefined){
    alert(data.error);
    return null
  }
  console.log(data);
  return response;
};

export { Registration };
