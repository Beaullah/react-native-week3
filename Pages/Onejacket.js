import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
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
      <View style={styles.centerImage}>
        <Image source={require("../assets/jacket1.jpg")} />
      </View>
      <View>
        <Text style={{ fontSize: 25 }}>Red Women Jacket</Text>
      </View>
      <View>
        <View>
          <View style={styles.shop}>
            <View style={styles.icons}>
              <Text>Rewiev :</Text>
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
          </View>
        </View>
      </View>
      <View>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </Text>
      </View>
      <View style={styles.cirlesicons}>
        <View style={styles.cirles}>
          <Text> XS</Text>
        </View>
        <View style={styles.cirles}>
          <Text> S</Text>
        </View>
        <View style={styles.cirles1}>
          <Text style={{ color: "white" }}> L</Text>
        </View>
        <View style={styles.cirles}>
          <Text> M</Text>
        </View>
        <View style={styles.cirles}>
          <Text> XL</Text>
        </View>
      </View>
      <View style={styles.addToCartButtom}>
        <View>
          <Text style={styles.total}>Total Amount</Text>
          <Text style={{ color: "white", fontSize: 20 }}>$100</Text>
        </View>
        <TouchableOpacity style={styles.cartButtom}>
          <Text style={{ color: "white" }}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
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
  centerImage: {
    flexDirection: "row",
    justifyContent: "center",
  },
  icons: {
    flexDirection: "row",
    alignItems: "center",
  },
  starIcon: {
    marginRight: 5,
  },
  cirlesicons: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  cirles: {
    height: 30,
    width: 30,

    borderRadius: 5,
    padding: 2,
    textAlign: "center",
    backgroundColor: "#e4d3d6",
  },
  cirles1: {
    height: 30,
    width: 30,

    borderRadius: 5,
    padding: 2,
    textAlign: "center",
    backgroundColor: "#44bcd8",
    color: "white",
  },
  addToCartButtom: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: "#18a2ea",
    borderRadius: 10,
    marginTop: 20,
    height: 50,
  },
  total: {
    color: "white",
    fontSize: 10,
  },
  cartButtom: {
    height: 25,
    padding: 5,
    borderRadius: 4,
    backgroundColor: "#3218ea",
    marginTop: 10,
  },
});

export default JacketShop;
