import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Carne from "./Listacarne_marisco";
import DetalleCarne from "./Delallecarne_mariscos";
const Stack = createStackNavigator();
const App = () => {
  return (
    <Stack.Navigator initialRouteName="carne">
      <Stack.Screen
        name="carne"
        component={Carne}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DetalleCarne"
        component={DetalleCarne}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
export default App;