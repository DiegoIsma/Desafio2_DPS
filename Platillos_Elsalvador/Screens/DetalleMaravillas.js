import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView } from "react-native";

const DetalleMaravillas = ({ route, navigation }) => {
  const { tips } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
      <Text style={styles.heading}>{tips.Nombre}</Text>
        <Image source={{ uri: tips.Foto }} style={styles.imagen} />
        <Text style={styles.tipTitle}>Descripción</Text>
        <Text style={styles.TextPais}>{tips.Descripcion}</Text>
        <Text style={styles.tipTitle}>Precio</Text>
        <Text style={styles.TextPais}>${tips.Precio}</Text>
        <Text style={styles.tipTitle}>Ingredientes</Text>
        <View style={styles.tipContainer}>
          {tips.Ingredientes.map((tip, tipIndex) => (
            <Text style={styles.tip} key={tipIndex}>{`${tipIndex + 1}. ${tip}`}</Text>
          ))}
        </View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Volver</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  tipContainer: {
    marginBottom: 20,
  },
  tipTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  tip: {
    fontSize: 16,
    marginBottom: 5,
  },
  imagen: {
    width: "100%",
    aspectRatio: 2, // Ajustar el aspecto de la bandera
    resizeMode: "cover", // Ajustar la imagen para cubrir toda el área
    borderColor: "#000000",
  },
  button: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
  },
});

export default DetalleMaravillas;
