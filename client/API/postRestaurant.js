export default async function postRestaurantAPI( user, userID, name, address ) {
  console.log(user, userID, name, address);
  var url = "http://localhost:3000/shops/create";
  var response = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: user,
      ownerId: userID,
      name: name,
      location: address,
    }),
  });
  var data = await response.json();
  if (data.error != undefined) {
    alert(data.error);
    return null;
  }
  console.log(data);
  return data;
}
