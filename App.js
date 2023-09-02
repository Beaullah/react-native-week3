import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";
// import ADDTOCART from "./src/pages/ADDTOCART";
// import Pay from "./src/pages/Pay";

import AddToCart from "./src/pages/AddToCart";
import OnlineShopping from "./src/pages/OnlineShopping";
import Pay from "./src/pages/Pay";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          title: "Shopping App",
          headerStyle: {
            backgroundColor: "grey",
          },
          headerTintColor: "white",
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen name="Online Shopping" component={OnlineShopping} />
        <Stack.Screen name="Addtocart" component={AddToCart} />
        <Stack.Screen name="PaymentSuccessful" component={Pay} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
