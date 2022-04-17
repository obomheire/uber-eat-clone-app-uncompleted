import { Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const HeaderTabs = () => {
  const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      <HeaderButton
        text="Delivery"
        btnColor="white"
        textColor="black"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        text="Pickup"
        btnColor="black"
        textColor="white"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
};

export default HeaderTabs;

const HeaderButton = ({ text, btnColor, textColor, activeTab, setActiveTab, }) => (
  <View>
    <TouchableOpacity
      style={{
        backgroundColor: activeTab === text ? "black" : "white",
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30,
      }}
      onPress={() => setActiveTab(text)}
    >
      <Text
        style={{
          color: activeTab === text ? "white" : "black",
          fontSize: 15,
          fontWeight: "900",
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  </View>
);
