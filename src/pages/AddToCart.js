import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

const AddToCart = ({ route, navigation }) => {
  const { newTitle } = route.paramas;
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{newTitle}</Text>
      <Text style={styles.p}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dkkkkolore magna aliqua. Ut
      </Text>
      <View style={styles.middle}>
        <Image
          style={{ height: 200, width: 200 }}
          source={require("../../assets/shop.png")}
        />
        <TouchableOpacity>
          <Button
            style={styles.button}
            onPress={() => {
              navigation.navigate("PaymentSuccessful");
            }}
            title="next"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text>Previous</Text>
        <Entypo name="dots-three-horizontal" size={24} color="black" />
        <Text>Skip</Text>
      </View>
    </View>
  );
};

export default AddToCart;

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
    marginTop: 25,
    borderWidth: 1,
    height: 40,
    width: 150,
    borderRadius: 40,
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
