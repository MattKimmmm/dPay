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

  var data = await response.json();
  if(data.error!=undefined){
    alert(data.error);
    return null
  }
  console.log(data);
  return response;
}

export {Login};