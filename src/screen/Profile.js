import React, { useContext, useState, useRef } from 'react'
import { StyleSheet, Button, TextInput } from 'react-native'
import { ContextUser } from '../contexts/UserContext';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import colors from '../config/colors';
import Photo from './../components/Camera/Photo';
import { connect } from 'react-redux';
import { logout } from '../redux/actions';

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: colors.blackPearl },
    textInput: {
        width: '100%',
        padding: 10,
        borderWidth: 1,
        borderColor: colors.grey,
        color: colors.white,
        marginVertical: 10,
        borderRadius: 8,
        fontSize: 19,
    },
    inputFocusBorderColor: {
        borderColor: colors.white,
        borderWidth: 2,
    },
});

const Profile = ({ logout }) => {
    const { top } = useSafeAreaInsets();
    const { photo, phone, updatePhone, name, updateName, email, updateEmail } = useContext(ContextUser);
    const [focusNameInput, updateFocusNameInput] = useState(false);
    const [focusPhoneInput, updateFocusPhoneIpunt] = useState(false);
    const [focusMailInput, updateFocusMailInput] = useState(false);
    const phoneInputRef = useRef(null);
    const mailInputRef = useRef(null);
    return (
        <>
            <KeyboardAwareScrollView
                style={[styles.container, { paddingTop: top }]}>
                <Photo photoUrl={photo} />
                <TextInput
                    value={name}
                    placeholder="Ingresa tu nombre"
                    placeholderTextColor={colors.grey}
                    onChangeText={nuevoNombre => updateName(nuevoNombre)}
                    style={[
                        styles.textInput,
                        focusNameInput && styles.inputFocusBorderColor,
                    ]}
                    onFocus={() => updateFocusNameInput(true)}
                    onBlur={() => {
                        updateFocusNameInput(false);
                        // phoneInputRef.current.focus();
                    }}
                />
                <TextInput
                    // ref={phoneInputRef}
                    value={phone}
                    placeholder="Ingresa tu telefono"
                    placeholderTextColor={colors.grey}
                    onChangeText={nuevoPhone => updatePhone(nuevoPhone)}
                    style={[
                        styles.textInput,
                        focusPhoneInput && styles.inputFocusBorderColor,
                    ]}
                    onFocus={() => updateFocusPhoneIpunt(true)}
                    onBlur={() => {
                        updateFocusPhoneIpunt(false);
                        // mailInputRef.current.focus();
                    }}
                />
                <TextInput
                    // ref={mailInputRef}
                    value={email}
                    placeholder="Ingresa tu email"
                    keyboardType="email-address"
                    placeholderTextColor={colors.grey}
                    onChangeText={nuevoEmail => updateEmail(nuevoEmail)}
                    style={[
                        styles.textInput,
                        focusMailInput && styles.inputFocusBorderColor,
                    ]}
                    onFocus={() => updateFocusMailInput(true)}
                    onBlur={() => updateFocusMailInput(false)}
                />
            </KeyboardAwareScrollView>
            <Button color={colors.grey} onPress={() => logout()} title="Log Out" />
        </>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()),
    };
};

export default connect(() => ({}), mapDispatchToProps)(Profile);