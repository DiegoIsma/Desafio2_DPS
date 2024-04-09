import React from "react";
import { StyleSheet, Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Searchbar } from 'react-native-paper';
import Sopa from "./Screens/sopa";
import Maravillas from "./Screens/Maravillas";
import carne from "./Screens/carnes_mariscos";


export default function App() {

  const Tab = createBottomTabNavigator();

  const TabNavigator = () => (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Sopas") {
            iconName = Platform.OS === "ios" ? "restaurant-outline" : "restaurant";
          } else if (route.name === "Platos Tipicos") {
            iconName = Platform.OS === "ios" ? "restaurant-outline" : "restaurant";
          } else if (route.name === "Mariscos/carnes") {
            iconName = Platform.OS === "ios" ? "restaurant-outline" : "restaurant";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      
      <Tab.Screen name="Sopas" component={Sopa} />
      <Tab.Screen name="Platos Tipicos" component={Maravillas} />
      <Tab.Screen name="Mariscos/carnes" component={carne} />
    </Tab.Navigator>
  );

  return (
  
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
