import AsyncStorage from '@react-native-async-storage/async-storage';
import { showMessage } from 'react-native-flash-message';

export const login = ({ user, password }) => {
  return dispatch => {
    dispatch({
      type: 'LOADING',
      isLoading: true,
    });

    setTimeout(() => {
      if (user === 'admin' && password === 'admin') {
        AsyncStorage.setItem('user', user);
        AsyncStorage.setItem('password', password);

        dispatch({
          type: 'LOGIN_IN',
        });
      } else {
        showMessage({
          message: 'Usuario/Contraseña no valido',
          type: 'warning',
        });
      }

      dispatch({
        type: 'LOADING',
        isLoading: false,
      });
    }, 2000);
  };
};

export const logout = () => {
  return {
    type: 'LOGOUT',
  };
};