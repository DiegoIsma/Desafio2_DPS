import React from 'react';
import { Text, StyleSheet, View, TouchableHighlight } from 'react-native';

const Cita = ({ item, eliminarCita }) => {
  // Function to get the number of days between two dates
  const getDaysDifference = (date1, date2) => {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const firstDate = new Date(date1);
    const secondDate = new Date(date2);

    return Math.round(Math.abs((firstDate - secondDate) / oneDay));
  };

  // Function to determine the background color based on the birthday date
  const getBackgroundColor = () => {
    const today = new Date();
    const birthday = new Date(item.fecha);

    const daysDifference = getDaysDifference(today, birthday);

    if (daysDifference === 0) {
      return 'green'; // Birthday is today
    } else if (daysDifference < 0) {
      return 'red'; // Birthday has passed
    } else {
      return 'blue'; // Birthday is in the future
    }
  };

  return (
    <View style={[styles.cita, { backgroundColor: getBackgroundColor() }]}>
      <View>
        <Text style={styles.label}>Nombre: </Text>
        <Text style={styles.texto}>{item.paciente}</Text>
      </View>
      <View>
        <Text style={styles.label}>Apellido: </Text>
        <Text style={styles.texto}>{item.propietario}</Text>
      </View>
      <View>
        <Text style={styles.label}>Fecha Nacimiento: </Text>
        <Text style={styles.texto}>{item.fecha}</Text>
      </View>
      <View>
        <TouchableHighlight onPress={() => eliminarCita(item.id)} style={styles.btnEliminar}>
          <Text style={styles.textoEliminar}> Eliminar &times; </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cita: {
    borderBottomColor: '#e1e1e1',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    paddingVertical: 20,
    paddingHorizontal: 10
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20
  },
  texto: {
    fontSize: 18,
  },
  btnEliminar: {
    padding: 10,
    backgroundColor: 'red',
    marginVertical: 10
  },
  textoEliminar: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default Cita;
