import React from 'react';
import { SafeAreaView, Text, Image, StyleSheet } from 'react-native';
import colors from '../../config/colors';
import { logoEast, logoWest, logos } from './../../config/image';

const styles = StyleSheet.create({
    image: {
        height: 110,
        width: 100,
    },
    container: {
        flex: 0.1,
        marginTop: 40,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: colors.blackPearl
    },
    title: {
        color: colors.white,
        fontSize: 20,
    }
})


const PlayerHeader = ({ team }) => {
    const { full_name, city, abbreviation, conference, division } = team;
    // const image = conference.toLowerCase().trim() === "west" ? { uri: logoWest } : { uri: logoEast };
    const imgSrc = logos[city]
        ? logos[city]
        : "https://i.ibb.co/tQMy0GC/page-not-found.png";
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>{full_name}</Text>
            <Image
                style={styles.image}
                source={{ uri: imgSrc }}
            />
        </SafeAreaView>
    )
}

export default PlayerHeader;
