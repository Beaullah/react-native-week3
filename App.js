import { StyleSheet, View } from "react-native";
import Onlineshop from "./Pages/Onlineshop";
import ADDTOCART from "./Pages/ADDTOCART";
import Pay from "./Pages/Pay";
import JacketShop from "./Pages/JacketShop";
export default function App() {
  return (
    <View style={styles.container}>
      <JacketShop />
      {/* <ADDTOCART /> */}
      {/* <Onlineshop /> */}
      {/* <Pay /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
