import {SafeAreaView} from 'react-native';
import React from 'react';
import { userDetail, user } from "../utils/userDb";
import LoginForm from '../components/Auth/LoginForm';
import UserData from '../components/Auth/UserData';
import { useState } from 'react';


export default function Account() {
  const [auth, setAuth] = useState(false);

  // Función para manejar el cambio en la autenticación
  const handleAuthChange = (authenticated) => {
    setAuth(authenticated);
  };

  return (
    <SafeAreaView>
      {auth ? <UserData /> : <LoginForm />}
    </SafeAreaView>
  );
}

