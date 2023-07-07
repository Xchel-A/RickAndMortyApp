import { View,Text,TextInput,StyleSheet,Keyboard, Button } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { userDetail,user } from "../../utils/userDb";
import Toast from 'react-native-toast-message';

export default function LoginForm({navigation }) {
    const [error , setError]= useState("")
    const formik = useFormik({
        initialValues :initialValues(),
        validationSchema: Yup.object(validationSchema()),
        validateOnChange:false,
        onSubmit:(formData)=>{
            setError("")
            const {username , password} = formData;
            if (username!== user.username || password!== user.password) {
                console.log('Usuario o contrasela incorrectos')
                 // Mostrar el toast al cargar el componente
                 Toast.show({
                    type: 'error',
                    text1: 'ERROR',
                    text2: 'Las credenciales son incorrectas',
                    position: 'top',
                });
            }else{
                console.log('Iniciando sesion...');
                console.log(userDetail);
                Toast.show({
                    type: 'success',
                    text1: 'ÉXITO',
                    text2: 'Iniciando sesión',
                    position: 'top',
                });
                 // Actualizar el estado de autenticación (auth) a verdadero
                //setAuth(true);
                // Redirigir a la pantalla de inicio (Home)
                //navigation.replace('Home');
            }


/*
            console.log('Formulario enviado');
            console.log(formData);*/
        }
    })
    function initialValues(){
        return{
            usernames:'',
            password:''
        }
    }
    function validationSchema() {
        return{
            username:Yup.string().required('El nombre de usuario es obligatorio'),
            password: Yup.string().required('La contraseña es obligatoria')
        }
    }
    return(
        <View> 
            <Toast ref={(ref) => Toast.setRef(ref)} />
            <Text style={styles.tittle}>Iniciar Sesion</Text>
            <TextInput 
                placeholder="Nombre de usuario"
                style={styles.input}
                autoCapitalize='none'
                onChangeText={(text)=>formik.setFieldValue('username',text)}
            />
            <TextInput 
                placeholder="Nombre de usuario"
                style={styles.input}
                autoCapitalize='none'
                secureTextEntry={true}
                onChangeText={(text)=>formik.setFieldValue('password',text)}
            />
            <TouchableOpacity  onPress={formik.handleSubmit} style={styles.button}>
                <Text>Iniciar sesion</Text>
            </TouchableOpacity>
            <Text style={styles.error}>{formik.errors.username}</Text>
            <Text style={styles.error}>{formik.errors.password}</Text>
            
        </View>
    )
    
}

const styles = StyleSheet.create({
    tittle:{
        textAlign:'center',
        fontSize: 20,
        fontWeight:'bold',
        marginTop:90,
        marginBottom:20
    },
    input:{
        height:40,
        margin:12,
        borderWidth:1,
        padding:10,
        borderRadius:10,
        marginBottom:20

    },
    button:{
        textAlign:'center',
        with:225,
        height:40,
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#69C8ECFF',
        margin:15
    
    
        
    },
    error: {
        textAlign: 'center',
        color: 'red',
        marginTop: 5,
      },
      
})