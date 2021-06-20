import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import colors from '../config/colors';

const styles = StyleSheet.create({
    container: {
        margin: 20,
        padding: 5,
        borderRadius: 5,
        borderBottomWidth: 2,
        borderColor: colors.white,
    },
});

const Input = ({
    keyboardType = 'default',
    placeholder,
    value,
    onFocus = () => { },
    onBlur = () => { },
    onChangeText = () => { },
    autoCapitalize,
    autoCorrect,
    placeholderTextColor = 'gray',
    style,
    ref,
}) => (
    <View style={styles.container}>
        <TextInput
            testID="text-input"
            style={style}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            value={value}
            autoCorrect={autoCorrect}
            autoCapitalize={autoCapitalize}
            onChangeText={onChangeText}
            keyboardType={keyboardType}
            onFocus={onFocus}
            onBlur={onBlur}
            ref={ref}
        />
    </View>
);

export default Input;