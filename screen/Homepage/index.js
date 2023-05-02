import React, { useEffect, useState } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Animated,
  Image,
  Dimensions,
} from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import StarRating from "./StarRating";
import MapView, { Marker } from "react-native-maps";
import { getLatLongOfPlace, getNearbyBars } from "./API";
import { async } from "@firebase/util";

const Images = [
  {
    uri: "https://barber-shop.vn/wp-content/uploads/2019/09/barber-shop-tphcm-4rau-barber.jpg",
  },
  {
    uri: "https://toplistvietnam.com/upload/media/entries/2021-10/05/132-entry-0-1633405650.jpg",
  },
  {
    uri: "https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/December2020/wisepass.jpg",
  },
  {
    uri: "https://img.vietcetera.com/wp-content/uploads/2017/07/Featured-2.jpg",
  },
  {
    uri: "https://images.squarespace-cdn.com/content/v1/5b8bf301e2ccd13e972a0ab4/1553502581235-TNFA849CSLNWVFIDCCP7/thiet-ke-barber-shop-06.jpg",
  },
  {
    uri: "https://classic.vn/wp-content/uploads/2022/12/313975704-1150637589181676-4805115046566185835-n-1022x800.jpeg",
  },
  {
    uri: "https://barber-shop.vn/wp-content/uploads/2019/08/barber-shop-la-gi-3.png",
  },
  {
    uri: "https://media.loveitopcdn.com/25225/tranh-dan-tuong-barber-shop-co-dien-phong-cach-2.jpg",
  },
  {
    uri: "https://bklyner.com/content/images/bklyner/wp-content/uploads/2019/01/Georges-Barbershop-has-been-in-Brooklyn-for-nearly-forty-years.-The-new-Fort-Greene-location-is-their-third-shop-in-the-neighborhood.jpg",
  },
  {
    uri: "https://mensfolio.vn/wp-content/uploads/2021/10/20211007-MFOnline-tiem-barber-sai-gon-Mekong-Barbershop-1.jpg",
  },
];

const { width, height } = Dimensions.get("window");

const CARD_HEIGHT = 220;
const CARD_WIDTH = width * 0.8;
const markers = [
  {
    coordinate: {
      latitude: 10.850822,
      longitude: 106.75494,
    },
    title: "The 4K&V Barbershop",
    rating: 5,
    reviews: 178,
    description: "This is the best barber shop",
    image: Images[0],
  },
  {
    coordinate: {
      latitude: 10.851316,
      longitude: 106.75477,
    },
    title: "Second Barber",
    rating: 5,
    reviews: 300,
    description: "This is the second barber",
    image: Images[1],
  },
  {
    coordinate: {
      latitude: 10.849409,
      longitude: 106.753706,
    },
    title: "Third Barber",
    rating: 4,
    reviews: 178,
    description: "This is the third barber",
    image: Images[2],
  },
  {
    coordinate: {
      latitude: 10.851947,
      longitude: 106.75673,
    },
    title: "Fourth Barber",
    rating: 3,
    reviews: 178,
    description: "This is the fourth barber",
    image: Images[3],
  },
  {
    coordinate: {
      latitude: 10.854181,
      longitude: 106.754734,
    },
    title: "The 5th barber",
    rating: 1,
    reviews: 178,
    description: "This is the best barber shop",
    image: Images[4],
  },
  {
    coordinate: {
      latitude: 10.851473,
      longitude: 106.75715,
    },
    title: "The 6th Barbershop",
    rating: 4,
    reviews: 178,
    description: "This is the best barber shop",
    image: Images[5],
  },
  {
    coordinate: {
      latitude: 10.850822,
      longitude: 106.75494,
    },
    title: "The 4K&V Barbershop 7th",
    rating: 2,
    reviews: 178,
    description: "This is the best barber shop",
    image: Images[6],
  },
  {
    coordinate: {
      latitude: 10.852348,
      longitude: 106.754863,
    },
    title: "The 4K&V Barbershop 8th",
    rating: 3,
    reviews: 178,
    description: "This is the best barber shop",
    image: Images[7],
  },
  {
    coordinate: {
      latitude: 10.850967,
      longitude: 106.75173,
    },
    title: "The 4K&V Barbershop 9th",
    rating: 3,
    reviews: 178,
    description: "This is the best barber shop",
    image: Images[8],
  },
  {
    coordinate: {
      latitude: 10.849714,
      longitude: 106.755389,
    },
    title: "The 4K&V Barbershop 10th",
    rating: 4,
    reviews: 178,
    description: "This is the best barber shop",
    image: Images[9],
  },
];
const region = {
  latitude: 10.850822,
  longitude: 106.75494,
  latitudeDelta: 0.005,
  longitudeDelta: 0.005,
};

export default Homepage = () => {
  const [coordination, setCoordination] = useState(null);
  const [barberShopData, setBarberShopData] = useState([]);

  useEffect(() => {
    // this.animation.addListener(({ value }) => {
    //   let index = Math.floor(value / CARD_WIDTH + 0.3);
    //   if (index >= this.state.markers.length) {
    //     index = this.state.markers.length - 1;
    //   }
    //   if (index <= 0) {
    //     index = 0;
    //   }
    //   clearTimeout(this.regionTimeout);
    //   this.regionTimeout = setTimeout(() => {
    //     if (this.index !== index) {
    //       this.index = index;
    //       const { coordinate } = this.state.markers[index];
    //       this.map.animateToRegion(
    //         {
    //           ...coordinate,
    //           latitudeDelta: this.state.region.latitudeDelta,
    //           longitudeDelta: this.state.region.longitudeDelta,
    //         },
    //         350
    //       );
    //     }
    //   }, 10);
    // });
  });

  const handleDataLocation = async (coordination) => {
    const data = await getNearbyBars(coordination.lat, coordination.lng);
  };

  const selectAutoCompleteOption = async (data, details = null) => {
    console.log("🚀 ~ file: index.js:210 ~ selectAutoCompleteOption ~ data:", data)
    // setSearchTerm(data.description.replace(", USA", ""));
    // setTagSelected(false);
    // setIsLoading(true);
    const latLongOfPlace = await getLatLongOfPlace(data.place_id);
    if (latLongOfPlace) {
      const CoordinatioResult = latLongOfPlace?.result?.geometry?.location;
      setCoordination({
        latitude: CoordinatioResult?.lat,
        longitude: CoordinatioResult?.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      });
      const data = await getNearbyBars(
        CoordinatioResult.lat,
        CoordinatioResult.lng
      );
      console.log(
        "🚀 ~ file: index.js:206 ~ selectAutoCompleteOption ~ data",
        data
      );
      setBarberShopData(data);
    }

    // setSearchLatLng(latLong.result.geometry.location);
    // if (searchToggleValue === 1) {
    //   getData(latLong.result.geometry.location);
    // } else if (searchToggleValue === 2) {
    //   getNearbyBarsData(latLong.result.geometry.location);
    // }
  };
  const interpolations = markers.map((marker, index) => {
    const inputRange = [
      (index - 1) * CARD_WIDTH,
      index * CARD_WIDTH,
      (index + 1) * CARD_WIDTH,
    ];
    // const scale = this.animation.interpolate({
    //   inputRange,
    //   outputRange: [1, 2.5, 1],
    //   extrapolate: "clamp",
    // });
    // const opacity = this.animation.interpolate({
    //   inputRange,
    //   outputRange: [0.35, 1, 0.35],
    //   extrapolate: "clamp",
    // });
    // return { scale, opacity };
  });
 

  return (
    <View style={styles.container}>
      <MapView
        // ref={map => this.map = map}
        initialRegion={coordination}
        style={styles.container}
      >
      
        
        <GooglePlacesAutocomplete
          placeholder="Search"
          onPress={() =>selectAutoCompleteOption}
          query={{
            key: "AIzaSyBrmeSWaNvX73IdNh5N_bPld7OlIJmYM58",
            language: "vn",
            components: "country:vn",
          }}
        />
        <Marker
          coordinate={{ latitude: 10.851199, longitude: 106.75482 }}
          title={"MY LOCATION"}
          description={"I'm here"}
        ></Marker>
        {barberShopData.length > 0 &&
          barberShopData.map((marker, index) => {
           
            const coordinateShop = {
              latitude: marker?.geometry?.location?.lat,
              longitude: marker?.geometry?.location?.lng,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
            };
            

            return (
              <Marker key={index} coordinate={coordinateShop}>
                <Animated.View>
                  <Animated.View style={[styles.ring]} />
                  <View style={styles.marker} />
                </Animated.View>
              </Marker>
            );
          })}
      </MapView>
      {/* <Animated.ScrollView
            horizontal
            scrollEventThrottle={1}
            showsHorizontalScrollIndicator={false}
            snapToInterval={CARD_WIDTH}
            onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    // x: this.animation,
                  },
                },
              },
            ],
            { useNativeDriver: true }
          )}
          style={styles.scrollView}
          contentContainerStyle={styles.endPadding}
        >
          {markers.map((marker, index) => (
            <View style={styles.card} key={index}>
              <Image
                source={marker.image}
                style={styles.cardImage}
                resizeMode="cover"
              />
              <View style={styles.textContent}>
                <Text numberOfLines={1} style={styles.cardtitle}>{marker.title}</Text>
                <StarRating ratings={marker.rating} reviews={marker.reviews} />
                <Text numberOfLines={1} style={styles.cardDescription}>
                  {marker.description}
                </Text>
              </View>
            </View>
          ))}
        </Animated.ScrollView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  endPadding: {
    paddingRight: width - CARD_WIDTH,
  },
  card: {
    padding: 10,
    elevation: 2,
    backgroundColor: "#FFF",
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: "hidden",
  },
  cardImage: {
    flex: 3,
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
  textContent: {
    flex: 1,
  },
  cardtitle: {
    fontSize: 12,
    marginTop: 5,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 12,
    color: "#444",
  },
  markerWrap: {
    alignItems: "center",
    justifyContent: "center",
  },
  marker: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(130,4,150, 0.9)",
  },
  ring: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "rgba(130,4,150, 0.3)",
    position: "absolute",
    borderWidth: 1,
    borderColor: "rgba(130,4,150, 0.5)",
  },
});
