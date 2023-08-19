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
      <View style={styles.image}>
        <View>
          <Image
            source={require("../assets/jacket1.jpg")}
            style={{ height: 80, width: 80 }}
          />
        </View>
        <View style={styles.shop}>
          <Text>Bike Jacket SoftWarm Shell</Text>
          <View style={styles.icons}>
            <View style={styles.starIcon}>
              <AntDesign name="star" color="yellow" />
            </View>
            <View style={styles.starIcon}>
              <AntDesign name="star" color="yellow" />
            </View>
            <View style={styles.starIcon}>
              <AntDesign name="star" color="yellow" />
            </View>
            <View style={styles.starIcon}>
              <AntDesign name="star" color="yellow" />
            </View>
            <View style={styles.starIcon}>
              <AntDesign name="staro" />
            </View>
          </View>
          <Text>$99</Text>
        </View>
      </View>
      <View style={styles.image}>
        <View>
          <Image
            source={require("../assets/jacket2.jpg")}
            style={{ height: 80, width: 80 }}
          />
        </View>
        <View style={styles.shop}>
          <Text>Bike Jacket SoftWarm Shell</Text>
          <View style={styles.icons}>
            <View style={styles.starIcon}>
              <AntDesign name="star" color="yellow" />
            </View>
            <View style={styles.starIcon}>
              <AntDesign name="star" color="yellow" />
            </View>
            <View style={styles.starIcon}>
              <AntDesign name="star" color="yellow" />
            </View>
            <View style={styles.starIcon}>
              <AntDesign name="star" color="yellow" />
            </View>
            <View style={styles.starIcon}>
              <AntDesign name="staro" />
            </View>
          </View>
          <Text>$99</Text>
        </View>
      </View>
      <View style={styles.image}>
        <View>
          <Image
            source={require("../assets/jacket3.jpg")}
            style={{ height: 80, width: 80 }}
          />
        </View>
        <View style={styles.shop}>
          <Text>Bike Jacket SoftWarm Shell</Text>
          <View style={styles.icons}>
            <View style={styles.starIcon}>
              <AntDesign name="star" color="yellow" />
            </View>
            <View style={styles.starIcon}>
              <AntDesign name="star" color="yellow" />
            </View>
            <View style={styles.starIcon}>
              <AntDesign name="star" color="yellow" />
            </View>
            <View style={styles.starIcon}>
              <AntDesign name="star" color="yellow" />
            </View>
            <View style={styles.starIcon}>
              <AntDesign name="staro" />
            </View>
          </View>
          <Text>$99</Text>
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
    backgroundColor: "white",
  },
  shop: {
    gap: 6,
  },
  image: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 10,
    gap: 30,
    // display: "grid",
    // gridTemplateRows: "100px 200px",
    // gridTemplateColumns: "1fr 2fr",
    // gridRowGap: 10 /* Spacing between rows */,
    // gridColumnGap: 20 /* Spacing between columns */,
  },
  icons: {
    flexDirection: "row", // To place the stars side by side horizontally
    alignItems: "center", // Align the stars vertically in the middle of the container
  },
  starIcon: {
    marginRight: 5, // Adjust this value to control the spacing between the stars
  },
});

export default JacketShop;
