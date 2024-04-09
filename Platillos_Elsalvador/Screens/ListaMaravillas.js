import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

const ListaMaravillas = ({ navigation }) => {
  const [platosTipicos, setPlatosTipicos] = useState([]);

  useEffect(() => {
    fetchPlatosTipicos();
  }, []);

  const fetchPlatosTipicos = async () => {
    try {
      const response = await fetch(
        "https://661229e295fdb62f24ee27a8.mockapi.io/api/v1/Comida"
      );
      const data = await response.json();
      const platos = data.filter(item => item.categoria === "Plato Típico");
      setPlatosTipicos(platos);
    } catch (error) {
      console.error("Error fetching platos tipicos:", error);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("Consejos", { tips: item })}
    >
      <View style={styles.Lista}>
        <Image source={{ uri: item.Foto }} style={styles.ImagenM} />
        <View style={styles.ListaText}>
          <Text style={styles.TextNombre}>{item.Nombre}</Text>
          <Text style={styles.TextPais}>{item.region}</Text>
          <Text style={styles.TextPais}>{item.categoria}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={platosTipicos}
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
  ImagenM: {
    width: 100,
    height: 50,
    marginRight: 10,
  },
  Lista: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#000000",
  },
  ListaText: {
    alignItems: "flex-start",
    padding: 10,
  },
  TextNombre: {
    fontSize: 20,
  },
  TextPais: {
    fontSize: 15,
    color: "gray",
  },
});

export default ListaMaravillas;
