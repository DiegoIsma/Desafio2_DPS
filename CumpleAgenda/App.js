import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, FlatList, TouchableHighlight, TouchableWithoutFeedback, Keyboard, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Colors from './src/colors';
import InicioSesion from './componentes/InicioSecion';
import Registro from './componentes/Registro';
import Cita from './componentes/Cita';
import Formulario from './componentes/Formulario';

const App = () => {
  // Estado de autenticación
  const [loggedIn, setLoggedIn] = useState(false);

  // Estado de citas
  const [citas, setCitas] = useState([]);
  const [mostrarForm, setMostrarForm] = useState(false);

  useEffect(() => {
    obtenerCitasStorage();
  }, []);

  // Obtener citas almacenadas
  const obtenerCitasStorage = async () => {
    try {
      const citasStorage = await AsyncStorage.getItem('citas');
      if (citasStorage) {
        setCitas(JSON.parse(citasStorage));
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Guardar citas en almacenamiento
  const guardarCitasStorage = async (citasJSON) => {
    try {
      await AsyncStorage.setItem('citas', citasJSON);
    } catch (error) {
      console.log(error);
    }
  };

  // Eliminar cita
  const eliminarCita = (id) => {
    const citasFiltradas = citas.filter(cita => cita.id !== id);
    setCitas(citasFiltradas);
    guardarCitasStorage(JSON.stringify(citasFiltradas));
  };

  // Mostrar u ocultar formulario
  const toggleFormulario = () => {
    setMostrarForm(!mostrarForm);
  };

  // Cerrar teclado
  const cerrarTeclado = () => {
    Keyboard.dismiss();
  };

  // Función para manejar el inicio de sesión exitoso
  const handleLogin = () => {
    setLoggedIn(true);
  };

  // Función para manejar el registro exitoso
  const handleRegister = () => {
    // Puedes agregar lógica adicional aquí si es necesario
  };

  return (
    <TouchableWithoutFeedback onPress={cerrarTeclado}>
      <View style={styles.contenedor}>
        <Text style={styles.titulo}>Agenda de contactos</Text>
        {loggedIn ? (
          <View style={styles.contenido}>
            {mostrarForm ? (
              <>
                <Text style={styles.subtitulo}>Agregar Nuevo Contacto</Text>
                <Formulario
                  citas={citas}
                  setCitas={setCitas}
                  toggleFormulario={toggleFormulario}
                  guardarCitasStorage={guardarCitasStorage}
                />
              </>
            ) : (
              <>
                <Text style={styles.subtitulo}>{citas.length > 0 ? 'Administra tus contactos' : 'No hay contactos, agrega uno'}</Text>
                <FlatList
                  style={styles.listado}
                  data={citas}
                  renderItem={({ item }) => (
                    <Cita item={item} eliminarCita={eliminarCita} />
                  )}
                  keyExtractor={cita => cita.id}
                />
              </>
            )}
            <TouchableHighlight onPress={toggleFormulario} style={styles.btnMostrarForm}>
              <Text style={styles.textoMostrarForm}>{mostrarForm ? 'Cancelar' : 'Agregar Contacto'}</Text>
            </TouchableHighlight>
          </View>
        ) : (
          <View style={styles.seccionAuth}>
            <InicioSesion onLogin={handleLogin} />
            <View style={styles.separator} />
            <Registro onRegister={handleRegister} />
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: Colors.PRIMARY_COLOR,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titulo: {
    color: '#FFF',
    marginTop: Platform.OS === 'ios' ? 60 : 40,
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  subtitulo: {
    color: '#FFF',
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  contenido: {
    flex: 1,
    marginHorizontal: 20,
    justifyContent: 'center'
  },
  listado: {
    flex: 1,
    marginBottom: 20
  },
  btnMostrarForm: {
    padding: 10,
    backgroundColor: Colors.BUTTON_COLOR,
    marginVertical: 10,
    alignSelf: 'center'
  },
  textoMostrarForm: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  seccionAuth: {
    width: '100%',
    paddingHorizontal: 20,
  },
  separator: {
    height: 20,
  },
});

export default App;
