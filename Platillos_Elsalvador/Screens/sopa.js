import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Sopa from "./ListaSopas";
import DetalleSopa from "./DetalleSopas";
const Stack = createStackNavigator();
const App = () => {
  return (
    <Stack.Navigator initialRouteName="sopa">
      <Stack.Screen
        name="Sopa"
        component={Sopa}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DetalleSopa"
        component={DetalleSopa}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
export default App;
