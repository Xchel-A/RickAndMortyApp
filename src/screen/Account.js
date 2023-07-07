import {SafeAreaView,StyleSheet} from 'react-native';
import { userDetail, user } from "../utils/userDb";
import LoginForm from '../components/Auth/LoginForm';
import UserData from '../components/Auth/UserData';
import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';

export default function Account() {
  const { auth } = useContext(AuthContext);

  return (
    <SafeAreaView>
      {auth ? <UserData /> : <LoginForm />}
    </SafeAreaView>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
