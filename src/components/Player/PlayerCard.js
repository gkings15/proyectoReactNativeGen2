import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native'
import colors from '../../config/colors'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: colors.white,
        paddingTop: 5,
    },
    image: {
        height: 100,
        width: 100,
    },
    containerPlayer: {
        flex: 2,
        paddingLeft: 10,
        borderWidth: 1,
        width: '100%',
        backgroundColor: colors.blackPearl,
    },
    textBold: {
        fontWeight: 'bold',
        fontSize: 20,
        color: colors.white,
    },
    textColor: {
        color: colors.white
    }
})


const PlayerCard = ({
    first_name,
    last_name,
    height_feet,
    height_inches,
    position,
    weight_pounds }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: 'https://i.ibb.co/dW8nDj4/logo.jpg' }}
            />
            <View style={styles.containerPlayer}>
                <Text style={styles.textBold}>{`${first_name} ${last_name}`}</Text>
                <Text style={styles.textColor}>{`Height: ${height_feet} ${height_inches}`}</Text>
                <Text style={styles.textColor}>{`Weight: ${weight_pounds}`}</Text>
                <Text style={styles.textColor}>{`Position: ${position ? position : "Not found"}`}</Text>
            </View>

        </SafeAreaView>
    )
}

export default PlayerCard;
