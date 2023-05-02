import axios from "axios";

const API_KEY = 'AIzaSyBrmeSWaNvX73IdNh5N_bPld7OlIJmYM58';

export const googleMapsAutoComplete = async text => {
    try {
      const { data } = await axios.request({
        method: "post",
        url: `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=${API_KEY}&input=${text}&fields=geometry`
      });
      console.log(data);
      return data.predictions;
    } catch (e) {
      console.log(e);yar
    }
  };
  
  export const getLatLongOfPlace = async placeId => {
    try {
      const { data } = await axios.request({
        method: "get",
        url: `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${API_KEY}&fields=geometry`
      });
    //   console.log(reverse geocode ${data});
      return data;
    } catch (e) {
    //   console.log(error: ${e});
    }
  };





export const getNearbyBars = async (lat, lng) => {
  const configNearby = {
    method: "get",
    url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${API_KEY}&location=${lat}%2C${lng}&rankby=distance&type=hair_care`,
    headers: {}
  };
  try {
    const response = await axios(configNearby);
    const dataResult = response?.data?.results;
    if(response?.status == '200')
    return dataResult;

    // const nearbyBarsResult = response.data?.results.map(async item => {
    //   return {
    //     venue_lat: item.geometry?.location?.lat,
    //     venue_lng: item.geometry?.location?.lng,
    //     venue_name: item.name,
    //     venue_address: item.vicinity,
    //     price_level: item.price_level,
    //     rating: item.rating,
    //     photo: `${
    //       item?.photos
    //         ? https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${item.photos[0].photo_reference}&key=${apiKey}
    //         : https://images.unsplash.com/photo-1525268323446-0505b6fe7778?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80
    //     }`,
    //     ...(await getBestTimeDataByVenue(item.name, item.vicinity)),
    //     ...(await getBarDistance(
    //       "driving",
    //       lat,
    //       lng,
    //       item.geometry?.location?.lat,
    //       item.geometry?.location?.lng
    //     )),
    //     ...(await getBarDistance(
    //       "walking",
    //       lat,
    //       lng,
    //       item.geometry?.location?.lat,
    //       item.geometry?.location?.lng
    //     ))
    //     // ...(await getBarCategory(
    //     //   item.name,
    //     //   item.geometry?.location?.lat,
    //     //   item.geometry?.location?.lng
    //     // ))
    //   };
    // });
    // const nearbyBarsResultPromise = Promise.all(nearbyBarsResult);
    // const barsResult = await nearbyBarsResultPromise;
  } catch (e) {
    console.log("There was an error on nearby bars: ", e);
  }
};

export default getNearbyBars;