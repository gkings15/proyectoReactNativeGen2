import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import colors from '../../config/colors';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import OverlaySpinner from 'react-native-loading-spinner-overlay';
import { login as loginAction, setLoading } from '../../redux/actions';
import { connect } from 'react-redux';
import { backgroundPerfil } from '../../config/image';
import FlashMessage from 'react-native-flash-message';
import { showMessage } from 'react-native-flash-message';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.grey,
        height: 700,
    },
    subContainer: {
        backgroundColor: colors.blackPearl,
        height: 430,
        marginTop: 240,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        alignContent: 'center',
        alignItems: 'center'
    },
    textContainer: {
        paddingTop: 20,
        alignContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    headerTxt: {
        fontSize: 40,
        marginLeft: 30,
        fontWeight: 'bold',
        color: 'white',
        position: 'absolute',
        marginTop: 150,
    },
    textInput: {
        width: '80%',
        padding: 10,
        borderWidth: 1,
        borderColor: colors.white,
        color: colors.white,
        marginVertical: 10,
        borderRadius: 8,
        fontSize: 19,
    },
    inputFocusBorderColor: {
        borderColor: colors.white,
        borderWidth: 2,
    },
    loginButton: {
        marginTop: 20,
        backgroundColor: colors.grey,
        flexDirection: 'row',
        borderRadius: 8,
        alignItems: 'center',
        padding: 10,
    },
    loginButtonText: {
        fontSize: 20,
        marginRight: 5,
        color: colors.white,
    },
    image: {
        flex: 1,
        resizeMode: "center",
        justifyContent: "center",
        alignItems: 'center',
    },
})

const Login = ({ isLoadingActive, loginIn }) => {
    const [userName, updateUserName] = useState('');
    const [focusNameInput, updateFocusNameInput] = useState(false);
    const passwordInputRef = useRef(null);
    const [userPassword, updateUserPassword] = useState('');
    const [focusPasswordInput, updateFocusPasswordInput] = useState(false);
    const image = { uri: backgroundPerfil };

    MaterialIcon.loadFont();

    const loginUser = () => {
        if (userName && userPassword) {
            loginIn(userName, userPassword);
        } else {
            showMessage({
                message: 'Debe ingresar usuario/contraseña',
                type: 'warning',
            });
        }
    };

    return (
        <>
            <FlashMessage position="top" canRegisterAsDefault />
            <OverlaySpinner visible={isLoadingActive} color={colors.white} />
            <ImageBackground source={image} style={styles.container}>
                <Text style={styles.headerTxt}>WELCOME</Text>
                <View style={styles.subContainer}>
                    <View style={styles.textContainer}>
                        <TextInput
                            placeholder="Usuario"
                            autoCapitalize="none"
                            value={userName}
                            onChangeText={name => updateUserName(name)}
                            placeholderTextColor={colors.grey}
                            style={[
                                styles.textInput,
                                focusNameInput && styles.inputFocusBorderColor,
                            ]}
                            onFocus={() => updateFocusNameInput(true)}
                            onBlur={() => {
                                updateFocusNameInput(false);
                                passwordInputRef.current.focus();
                            }}
                        />
                        <TextInput
                            ref={passwordInputRef}
                            placeholder="Password"
                            autoCapitalize="none"
                            value={userPassword}
                            secureTextEntry={true}
                            placeholderTextColor={colors.grey}
                            onChangeText={password => updateUserPassword(password)}
                            style={[
                                styles.textInput,
                                focusPasswordInput && styles.inputFocusBorderColor,
                            ]}
                            onFocus={() => updateFocusPasswordInput(true)}
                            onBlur={() => updateFocusPasswordInput(false)}
                        />
                        <TouchableOpacity
                            onPress={() => loginUser()}
                            style={styles.loginButton}>
                            <MaterialIcon name="login-variant" color={colors.white} size={30} />
                            <Text>&nbsp;</Text>
                            <Text>&nbsp;</Text>
                            <Text style={styles.loginButtonText}>Ingresar</Text>

                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        loginIn: (user, password) => dispatch(loginAction({ user, password })),
    };
};

const mapStateToProps = globalState => {
    return {
        isLoadingActive: globalState.loginReducer.loading,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
