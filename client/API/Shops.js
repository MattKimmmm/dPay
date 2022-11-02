//getNearbyShops: function (lat, lng, callback) {
//    var url = 'http://localhost:3000/api/shops/nearby?lat=' + lat + '&lng=' + lng;
import sampleShops from '../sampleShops.js';
export async function getNearbyShops(lat,long) {
    var url = "http://localhost:3000/shops";

    var response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    var data = await response.json();
    if (data.error != undefined) {
      alert(data.error);
      return null;
    }
    console.log(data);
    return data;
}

