import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import styles from "./CardStyle"
import { StarIcon } from "react-native-heroicons/solid";
import { MapPinIcon } from "react-native-heroicons/outline";
const Restaurentcard = ({
  id,
  imageUrl,
  title,
  rating,
  dishes,
  genre,
  address,
  short_discription,
  long,
  lat,
}) => {
  return (
    <TouchableOpacity style={styles.cardContainer} >
    <Image 
    source={{
        uri: imageUrl
    }}
    style={styles.image}
    />
    <View style={styles.cardMain}>
        <Text style={styles.title}>
            {title}
        </Text>
        <View style={styles.ratingSec}>
            <StarIcon color="green" opacity={0.5} size={22}/>
            <Text>
                {rating} . {genre}
            </Text>
        </View>
        <View style={styles.locationSec}>
            <MapPinIcon size={22} opacity={0.4} color="gray"/>
            <Text style={styles.location}>
                Nearby . {address}
            </Text>
        </View>
    </View>
    </TouchableOpacity>
  );
};

export default Restaurentcard;
