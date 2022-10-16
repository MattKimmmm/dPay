//getNearbyShops: function (lat, lng, callback) {
//    var url = 'http://localhost:3000/api/shops/nearby?lat=' + lat + '&lng=' + lng;
import sampleShops from '../sampleShops.js';
export async function getNearbyShops(lat,long) {
  return sampleShops;
}
