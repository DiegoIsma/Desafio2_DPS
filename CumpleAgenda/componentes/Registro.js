// Registro.js
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const Registro = ({ onRegister }) => {
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleRegisterPress = () => {
    onRegister(nombreUsuario, contrasena);
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
      <Button title="Registrarse" onPress={handleRegisterPress} />
    </View>
  );
};

export default Registro;
