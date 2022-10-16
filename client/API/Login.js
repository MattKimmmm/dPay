const Login = async (username, password) => {

  var url = "http://localhost:3000/login";
  var response = await fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: username,
      password: password,
    })
  });
  response.then((response) => {
    console.log(response);
  });
  console.log(response)

  return response.json();
}

export {Login};