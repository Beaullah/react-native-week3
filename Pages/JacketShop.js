import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const JacketShop = () => {
  return (
    <View style={styles.container}>
      <View style={styles.menuIcons}>
        <View style={styles.menu1}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </View>
        <View style={styles.menu1}>
          <AntDesign name="shoppingcart" size={24} color="blue" />
        </View>
      </View>
      <Text style={styles.woman}>Women Jacket</Text>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="search for jacket                        filter" />
        </View>
      </View>
      <View>
        <Image
          source={require("../assets/jacket1.jpg")}
          style={{ height: 200, width: 200 }}
        />

        <View>
          <Text>Bike Jacket</Text>
          <AntDesign name="star" color="yellow" />
          <AntDesign name="star" color="yellow" />
          <AntDesign name="star" color="yellow" />
          <AntDesign name="star" color="yellow" />
          <AntDesign name="staro" />
        </View>
      </View>
      <View>
        <Image />

        <View>
          <Text>Bike Jacket</Text>
          <AntDesign name="star" color="yellow" />
          <AntDesign name="star" color="yellow" />
          <AntDesign name="star" color="yellow" />
          <AntDesign name="star" color="yellow" />
          <AntDesign name="staro" />
        </View>
      </View>
      <View>
        <Image />

        <View>
          <Text>Bike Jacket</Text>
          <AntDesign name="star" color="yellow" />
          <AntDesign name="star" color="yellow" />
          <AntDesign name="star" color="yellow" />
          <AntDesign name="star" color="yellow" />
          <AntDesign name="staro" />
        </View>
      </View>
      <View>
        <Image />

        <View>
          <Text>Bike Jacket</Text>
          <AntDesign name="star" color="yellow" />
          <AntDesign name="star" color="yellow" />
          <AntDesign name="star" color="yellow" />
          <AntDesign name="star" color="yellow" />
          <AntDesign name="staro" />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
  menuIcons: {
    flexDirection: "row",
    position: "relative",
    gap: 200,
    justifyContent: "space-between",
    alignItems: "flex-start", // Changed from "center" to "flex-start"
    // backgroundColor: "yellow",
    padding: 10,
  },
  menu1: {
    height: 40,
    width: 40,
    padding: 10,
    borderRadius: 100,
    backgroundColor: "#f0f0f0",
  },
  woman: {
    fontWeight: 900,
    fontSize: 20,
  },
  buttonContainer: {},
  button: {
    height: 50,
    width: "100%",
    borderRadius: 90,
    backgroundColor: "yellow",
  },
});

export default JacketShop;
