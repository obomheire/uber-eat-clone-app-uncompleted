import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

 export const localResturants = [
   {
     name: "Beachside Bar",
     image_url:
       "https://assets3.thrillist.com/v1/image/2692332/1200x630/flatten;crop_down;webp=auto;jpeg_quality=70",
     categories: ["Carfe", "Bar"],
     price: "$$",
     reviews: 1234,
     rating: 4.5,
   },
   {
     name: "Benihama",
     image_url:
       "https://assets3.thrillist.com/v1/image/2887670/1200x600/scale;",
     categories: ["Carfe", "Bar"],
     price: "$$",
     reviews: 1244,
     rating: 3.7,
   },
   {
     name: "Indian's grill",
     image_url:
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg7rXiLGQZZ7zvgSbZYJ9PITx2F3ZuvsweAQ&usqp=CAU",
     categories: ["Indian", "Bar"],
     price: "$$",
     reviews: 700,
     rating: 4.9,
   },
 ];

const RestaurantItems = ({ restaurantData }) => {
  return (
    <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
      <FlatList
        data={restaurantData}
        keyExtractor={(item) => item.image_url}
        renderItem={({ item }) => (
          <View
            style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}
          >
            <ResturantImage image={item.image_url} />
            <ResturantInfo name={item.name} rating={item.rating} />
          </View>
        )}
      />
    </TouchableOpacity>
  );
};

export default RestaurantItems;

const styles = StyleSheet.create({});

const ResturantImage = ({ image }) => (
  <>
    <Image
      source={{
        uri: image,
      }}
      style={{ width: "100%", height: 180 }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={30} color="#fff" />
    </TouchableOpacity>
  </>
);

const ResturantInfo = ({ name, rating }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>
        {name}
      </Text>
      <Text style={{ fontSize: 13, color: "gray" }}>30 40 . min</Text>
    </View>
    <View
      style={{
        backgroundColor: "#eee",
        height: 30,
        width: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
      }}
    >
      <Text>{rating}</Text>
    </View>
  </View>
);
