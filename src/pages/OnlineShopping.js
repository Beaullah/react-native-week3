import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import { Entypo } from "@expo/vector-icons";

const OnlineShopping = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Online shopping</Text>
      <Text style={styles.p}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut
      </Text>
      <View style={styles.middle}>
        <Image
          style={{ height: 200, width: 200 }}
          source={require("../../assets/shoopping.png")}
        />
        <Button
          onPress={() => {
            navigation.navigate("Addtocart", { newTitle: "Oh from shopping" });
          }}
          title="Get started"
        />
      </View>
      <View style={styles.footer}>
        <Entypo name="dots-three-horizontal" size={24} color="black" />
        <Text
          onPress={() => {
            navigation.navigate("Addtocart", { newTitle: "Oh from shopping" });
          }}
        >
          Skip
        </Text>
      </View>
    </View>
  );
};

export default OnlineShopping;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 40,
  },
  p: {
    marginTop: 5,
  },
  button: {
    marginTop: 15,
    borderWidth: 1,
    height: 40,
    width: 150,
    borderRadius: 40,
    backgroundColor: "#6C63FF",
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
  },
  middle: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 100,
    paddingHorizontal: 20,
  },
});
