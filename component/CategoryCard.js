import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from "./styles"
const CategoryCard = ({imgUrl,title}) => {
  return (
    <TouchableOpacity 
    style={styles.categoryContainer}

   >
        <Image source={{uri:imgUrl,}} 
        style={styles.categoryImage}
        />
      <Text
        style={styles.categoryTitle}

    >
      {title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard