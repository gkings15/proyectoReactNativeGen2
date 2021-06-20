import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ContextUser = createContext();

const UserContext = ({ children }) => {
    const [photo, updatePhoto] = useState('');
    const [name, updateName] = useState('');
    const [email, updateEmail] = useState('');
    const [phone, updatePhone] = useState('');

    const getFromStorageName = async () => {
        const savedName = await AsyncStorage.getItem('name');
        if (savedName) {
            updateName(savedName);
        }
    };

    const getFromStorageMail = async () => {
        const savedEmail = await AsyncStorage.getItem('email');
        if (savedEmail) {
            updateEmail(savedEmail);
        }
    };

    const getFromStoragePhone = async () => {
        const savedPhone = await AsyncStorage.getItem('phone');
        if (savedPhone) {
            updatePhone(savedPhone);
        }
    };

    useEffect(() => {
        getFromStorageName()
        getFromStorageMail()
        getFromStoragePhone()
    }, [])


    useEffect(() => {
        AsyncStorage.setItem('email', email);
    }, [email])

    useEffect(() => {
        AsyncStorage.setItem('name', name);
    }, [name])

    useEffect(() => {
        AsyncStorage.setItem('phone', phone);
    }, [phone])

    return (
        <ContextUser.Provider value={{ name, updateName, email, updateEmail, phone, updatePhone, photo, updatePhoto }}>
            {children}
        </ContextUser.Provider>
    );
};

export default UserContext;