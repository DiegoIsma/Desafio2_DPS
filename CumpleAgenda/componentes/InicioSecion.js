// InicioSesion.js
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const InicioSesion = ({ onLogin }) => {
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleLoginPress = () => {
    onLogin(nombreUsuario, contrasena);
  };

  return (
    <View>
      <TextInput
        placeholder="Nombre de usuario"
        value={nombreUsuario}
        onChangeText={setNombreUsuario}
      />
      <TextInput
        placeholder="Contraseña"
        value={contrasena}
        onChangeText={setContrasena}
        secureTextEntry
      />
      <Button title="Iniciar sesión" onPress={handleLoginPress} />
    </View>
  );
};

export default InicioSesion;
