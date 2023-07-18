import React from "react";
import { View, Text, Button } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const JacketShop = () => {
  return (
    <View>
      <View>
        <AntDesign name="arrowleft" size={24} color="black" />
        <AntDesign name="shoppingcart" size={24} color="black" />
      </View>
      <View>
        <Text>Women Jacket</Text>
        <View>
          <Button title="search for jacket" />
          <Text>Filter</Text>
        </View>
      </View>
    </View>
  );
};

export default JacketShop;
