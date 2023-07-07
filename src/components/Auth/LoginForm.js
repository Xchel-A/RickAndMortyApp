import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Image } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { user,userDetail } from "../../utils/userDb";
import Toast from 'react-native-toast-message';
import Icono from '../../assets/Logo.png'
import Pie from '../../assets/ImgPieP.png';
import AuthContext from '../../context/AuthContext';
export default function LoginForm() {
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('El nombre de usuario es obligatorio'),
      password: Yup.string().required('La contraseña es obligatoria'),
    }),
    onSubmit: (values) => {
      setError('');
      const { username, password } = values;
      if (username === user.username && password === user.password) {
        console.log('Iniciando sesión...');
        Toast.show({
          type: 'success',
          text1: 'ÉXITO',
          text2: 'Iniciando sesión',
          position: 'top',
        });
       
        const userData = {
            ...user,
            ...userDetail,
          };
        //const jsonData = JSON.stringify(userData);
        //console.log(jsonData);
        login(userData);
        
      } else {
        console.log('Usuario o contraseña incorrectos');
        Toast.show({
          type: 'error',
          text1: 'ERROR',
          text2: 'Las credenciales son incorrectas',
          position: 'top',
        });
        setError('Usuario o contraseña incorrectos');
      }
    },
  });

  return (
    <View style={styles.container}>
        <Image source={Icono} style={styles.image} />
      <Toast ref={(ref) => Toast.setRef(ref)} />
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput
        placeholder="Nombre de usuario"
        style={styles.input}
        autoCapitalize="none"
        onChangeText={formik.handleChange('username')}
        value={formik.values.username}
        onBlur={formik.handleBlur('username')}
      />
      {formik.touched.username && formik.errors.username ? (
        <Text style={styles.error}>{formik.errors.username}</Text>
      ) : null}
      <TextInput
        placeholder="Contraseña"
        style={styles.input}
        autoCapitalize="none"
        secureTextEntry
        onChangeText={formik.handleChange('password')}
        value={formik.values.password}
        onBlur={formik.handleBlur('password')}
      />
      {formik.touched.password && formik.errors.password ? (
        <Text style={styles.error}>{formik.errors.password}</Text>
      ) : null}
      <TouchableOpacity onPress={formik.handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Iniciar sesión</Text>
      </TouchableOpacity>
      {error ? <Text style={styles.error}>{error}</Text> : null}

      <Image source={Pie} style={styles.piepag} />
    </View>
  );
}

const styles = StyleSheet.create({
    
  container: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:170
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    width: '80%',
    height: 40,
    backgroundColor: '#69C8ECFF',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  image: {
      
    width: 340,
    height: 150,
   
  },
  piepag: {
    marginTop: 65,
    marginLeft: 50,
    height: 250,
    width: 350,
    alignSelf: 'center',
  },
});
