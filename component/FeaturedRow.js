import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import styles from "./styles";
import Restaurentcard from "./Restaurentcard";

const FeaturedRow = ({ title, description, id }) => {
  return (
    <View id={id} style={styles.featureContainer}>
      <View style={styles.mainFetured}>
        <Text style={styles.featuredTitle}>{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text style={styles.featuredDesc}>{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
          paddingTop: 10,
        }}
        showsHorizontalScrollIndicator={false}
      >
        {/* RestaurentCard...... */}

        <Restaurentcard
          id={1}
          imageUrl="https://img.freepik.com/free-photo/top-view-sushi-rolls-black-surface_114579-82744.jpg?size=626&ext=jpg"
          title="Yo! Sushi"
          rating="4.5"
          dishes={[]}
          genre="Japanese"
          address="123 Main st"
          short_discription="This is Test discription"
          long={20}
          lat={0}
        />
        <Restaurentcard
          id={2}
          imageUrl="https://img.freepik.com/free-photo/dahi-puri-chat-is-indian-road-side-snack-item-which-is-especially-popular-state-maharashtra-india_466689-73908.jpg?size=626&ext=jpg"
          title="Yo! Sushi"
          rating="4.5"
          dishes={[]}
          genre="Japanese"
          address="123 Main st"
          short_discription="This is Test discription"
          long={20}
          lat={0}
        />
        <Restaurentcard
          id={3}
          imageUrl="https://img.freepik.com/free-photo/dahi-puri-chat-is-indian-road-side-snack-item-which-is-especially-popular-state-maharashtra-india_466689-73908.jpg?size=626&ext=jpg"
          title="Yo! Sushi"
          rating="4.5"
          dishes={[]}
          genre="Japanese"
          address="123 Main st"
          short_discription="This is Test discription"
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
