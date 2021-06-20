import React from 'react';
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import colors from './../../config/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/core';

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        width: '100%',
        alignItems: 'center',
        marginBottom: 20,
    },
    addPhotoContainer: {
        borderColor: colors.blue,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageFrame: {
        width: 120,
        height: 120,
        borderRadius: 60,
    },
    circleContainer: {
        width: 140,
        height: 140,
        borderRadius: 100,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

const AddPhoto = ({ photoUrl }) => {
    const navigation = useNavigation();
    const ImagePhoto = !photoUrl ? (
        <View style={[styles.addPhotoContainer, styles.imageFrame]}>
            <Icon name="image-plus" color={colors.darkBlue} size={30} />
            <Text>Add photo</Text>
        </View>
    ) : (
        <Image style={styles.imageFrame} source={{ uri: photoUrl }} />
    );

    return (
        <View style={styles.container}>
            <TouchableHighlight
                onPress={() => navigation.navigate('Camera')}
                underlayColor={colors.gray}
                style={styles.circleContainer}>
                {ImagePhoto}
            </TouchableHighlight>
        </View>
    );
};

export default AddPhoto;
