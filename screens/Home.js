import { StyleSheet, View, SafeAreaView } from "react-native";
import React, { useState, useEffect } from "react";
import HeaderTabs from "../components/HeaderTabs";
import { Platform, StatusBar } from "react-native";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import RestaurantItems, { localResturants } from "../components/RestaurantItems";
import yelp from "../api/yelp";

//Nomally, FlatList cannot be rendered inside ScrollView, but both Categories & ResturantsItem contain FlatList, 
//so do this to make it posible
import { ScrollView } from "react-native-virtualized-view"; 

const Home = () => {

    const [restaurantData, setRestaurantData] = useState(localResturants);

  
  const getRestaurantsFromYelp = async() => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: "restaurants",
          location: "SanDiego",
        },
      });
      setRestaurantData(response.data.businesses);
    } catch (error) {
      console.log(error);
    }

  };

    useEffect(() => {
      getRestaurantsFromYelp();
    }, []);

  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: "#eee",
        flex: 1,
      }}
    >
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
          <Categories />
          <RestaurantItems restaurantData={restaurantData} />
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({});

export default Home;


