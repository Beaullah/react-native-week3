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
      <Stack.Navigator>
        <Stack.Screen
          options={{
            title: "o Shopping",
            headerStyle: {
              backgroundColor: "red",
            },
            headerTintColor: "white",
            headerTitleAlign: "center",
            headerRight: () => (
              <Text style={{ color: "white", marginRight: 10 }}>Icon</Text>
            ),
            headerLeft: () => (
              <Text style={{ color: "white", marginLeft: 10 }}>Icons</Text>
            ),
          }}
          name="Online Shopping"
          component={OnlineShopping}
        />
        <Stack.Screen name="Addtocart" component={AddToCart} />
        <Stack.Screen name="PaymentSuccessful" component={Pay} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
