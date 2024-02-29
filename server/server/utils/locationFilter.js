const geo = require("geolib");

// this function return object to filter restaurants that are inside rectangle area on the map based on provided user location
function getNearbyRestaurantsSquareArea(location) {
  const latitude = Number.parseFloat(location[0], 10);
  const longitude = Number.parseFloat(location[1], 10);
  // this function is to calculate southWest and northEast ponts of rectangle from distance of provided coordinate
  const bounds = geo.getBoundsOfDistance(
    { latitude: latitude, longitude: longitude },
    4000, // we specify here the distance in meters
  );
  const minLat = bounds[0].latitude;
  const maxLat = bounds[1].latitude;
  const minLon = bounds[0].longitude;
  const maxLon = bounds[1].longitude;
  return {
    "location.0": { $gte: minLat, $lte: maxLat },
    "location.1": { $gte: minLon, $lte: maxLon },
  };
}

// this function is to filter the restaurants further more by excluding the restaurants that are farther than 5 KM
function getNearbyRestaurantsCircleArea(location, array) {
  const userLocation = {
    latitude: Number.parseFloat(location[0], 10),
    longitude: Number.parseFloat(location[1], 10),
  };
  // include only restaurants of distance 5KM or below
  const squareToCircle = array.filter((restaurant) => {
    const restauarantLocation = {
      latitude: restaurant.location[0],
      longitude: restaurant.location[1],
    };
    const distance = geo.getDistance(userLocation, restauarantLocation);
    if (distance <= 4000) return true;
    return false;
  });
  return squareToCircle;
}

module.exports = {
  getNearbyRestaurantsSquareArea,
  getNearbyRestaurantsCircleArea,
};
