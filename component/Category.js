import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";
import pic from "../assets/delivery-boy-vector-character-25785.jpg";
const Category = () => {
  return (
    <ScrollView
      horizontal
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      showsHorizontalScrollIndicator={false}
    >
      <CategoryCard
        imgUrl={
          "https://img.freepik.com/free-psd/super-delicious-burger-instagram-post-design-template_202595-494.jpg?w=740&t=st=1668797004~exp=1668797604~hmac=082ea4f71570fae6e32dea02e9c1fadf03cd0ef257d0b9f3e4968d34eb2c6a59"
        }
        title={"Offer"}
      />
      <CategoryCard
        imgUrl={
          "https://cdn.stocksnap.io/img-thumbs/280h/pizza-cheese_L1S7QIJIAT.jpg"
        }
        title={"Pizza"}
      />
      <CategoryCard
        imgUrl={
          "https://cdn.stocksnap.io/img-thumbs/280h/fresh-rolls_YJIGVWFX9L.jpg"
        }
        title={"Thai"}
      />
      <CategoryCard
        imgUrl={
          "https://www.funfoodfrolic.com/wp-content/uploads/2018/08/5.jpg"
        }
        title={"Indian"}
      />
      <CategoryCard
        imgUrl={
          "https://cdn.stocksnap.io/img-thumbs/280h/corn-sausage_XLQHKJKZSG.jpg"
        }
        title={"Continental"}
      />
      <CategoryCard
        imgUrl={
          "https://cdn.stocksnap.io/img-thumbs/280h/bread-bun_UGX0HQQPWI.jpg"
        }
        title={"Fast food"}
      />

      {/* <Text>Category</Text> */}
    </ScrollView>
  );
};

export default Category;
