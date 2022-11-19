import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import Category from "../component/Category";
import FeaturedRow from "../component/FeaturedRow";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      // headerTitle:"Home",
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      {/* header */}
      <View style={styles.main}>
        <Image
          style={styles.logo}
          source={require("../assets/delivery-boy-vector-character-25785.jpg")}
        />
        <View style={styles.header}>
          <Text style={styles.deliver}>Deliver Now!</Text>
          <Text style={styles.location}>
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" style={styles.userIcon} />
      </View>

      <View style={styles.searchSection}>
        <View style={styles.search}>
          <MagnifyingGlassIcon style={styles.searchIcon} size={15} />
          <TextInput
            placeholder="Restaurent & cuisine"
            style={styles.searchInput}
          />
        </View>

        <AdjustmentsVerticalIcon style={styles.bar} color="#00CCBB" />
      </View>

      {/* body */}

      <ScrollView style={styles.scrollView}>
        {/* Category\ */}
        <Category />

        {/* feature */}

        <FeaturedRow
          id="1"
          title="Feature"
          description="Paid placements from  our partner"
        />
        <FeaturedRow
          id="2"
          title="Tasty Discount"
          description="Everyone's beeen enjoying these juicy discount"
        />
        <FeaturedRow
          id="3"
          title="Offer nears you!"
          description="Why not support your local restaurent tonight"
        />
      </ScrollView>
    </SafeAreaView>
  );
};
export default HomeScreen;
