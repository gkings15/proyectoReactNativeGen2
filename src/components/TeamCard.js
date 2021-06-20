import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import colors from '../config/colors';
import { logos } from './../config/image';
import { DetailContext } from '../contexts/DetailContext';

const styles = StyleSheet.create({
    container: {
        borderRadius: 15,
        backgroundColor: '#ecf0f1',
        marginBottom: 20,
    },
    image: {
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        height: 300,
        width: '100%',
        backgroundColor: colors.white,
    },
    titleText: {
        fontStyle: 'italic',
        fontSize: 20,
        fontWeight: 'normal',
        color: colors.white,
        backgroundColor: colors.blackPearl,
        textAlign: 'center',
    },
})

const TeamCard = ({ id, full_name, city, navigation }) => {
    const { setTeamId, setDoneFetch, setDoneFetchPlayers } = useContext(DetailContext);
    const imgSrc = logos[city]
        ? logos[city]
        : "https://i.ibb.co/tQMy0GC/page-not-found.png";

    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => {
                    setTeamId(id);
                    navigation.navigate('TeamDetail');
                }}>
                    <Image
                        style={styles.image}
                        source={{ uri: imgSrc }}
                        resizeMode='contain'
                    />
                </TouchableOpacity>
                <Text style={styles.titleText}>{full_name}</Text>
            </View>
        </>
    )
}

export default TeamCard



