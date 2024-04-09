import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

const Listacarne_marisco = ({ navigation }) => {
  const [Carne, setCarne] = useState([]);

  useEffect(() => {
    fetchCarneMarisco();
  }, []);

  const fetchCarneMarisco = async () => {
    try {
      const response = await fetch(
        "https://661229e295fdb62f24ee27a8.mockapi.io/api/v1/Comida"
      );
      const data = await response.json();
      const platos = data.filter(item => item.categoria === "Mariscos" || item.categoria === "Carne");
      setCarne(platos);
    } catch (error) {
      console.error("Error fetching Carne y Marisco:", error);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("DetalleSopa", { tip: item })}
      style={styles.Lista}
    >
      <View style={styles.countryInfo}>
        <Image source={{ uri: item.Foto }} style={styles.flagImage} />
        <Text style={styles.TextNombre}>{item.Nombre}</Text>
        <Text style={styles.TextPais}>{item.region}</Text>
        <Text style={styles.TextPais}>{item.categoria}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={Carne}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.countryList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  
  Lista: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#000000",
  },
  
  flagImage: {
    width: 100,
    height: 50,
    marginRight: 10,
  },
  TextNombre: {
    fontSize: 20,
  },
  TextPais: {
    fontSize: 15,
    color: "gray",
  },
});

export default Listacarne_marisco;
