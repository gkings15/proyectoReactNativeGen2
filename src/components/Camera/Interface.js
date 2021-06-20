import React from 'react';
import { SafeAreaView, StyleSheet, View, TouchableOpacity, } from 'react-native';
import colors from '../../config/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    photoBoxContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    photoBoxCircle: {
        width: 300,
        height: 300,
        borderWidth: 5,
        borderColor: colors.gray,
        borderRadius: 200,
    },
    bottomButtons: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    captureButtonContainer: {
        width: 70,
        height: 70,
        borderColor: colors.gray,
        borderWidth: 2,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
    },
    captureInnerButtonContainer: {
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: colors.gray,
        backgroundColor: colors.gray,
    },
    camera: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingRight: 60,
    }
});

const Interface = ({ navigation, camera, takePicture }) => (
    <SafeAreaView style={styles.container}>
        <View style={styles.photoBoxContainer}>
            <View style={styles.photoBoxCircle} />
        </View>
        <View style={styles.bottomButtons}>
            <View>
                <TouchableOpacity onPress={() => navigation.pop()}>
                    <Icon name="keyboard-backspace" color={colors.white} size={40} />
                </TouchableOpacity>
            </View>
            <View style={styles.camera}>
                <TouchableOpacity
                    style={styles.captureButtonContainer}
                    onPress={() => takePicture(camera)}>
                    <View style={styles.captureInnerButtonContainer} />
                </TouchableOpacity>
            </View>

        </View>
    </SafeAreaView>
);

export default Interface;