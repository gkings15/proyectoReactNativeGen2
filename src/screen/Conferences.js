import React, { useContext } from 'react';
import { ImageBackground, View, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import colors from './../config/colors';
import confData from './../config/data/confData';
import { backgroundImage } from '../config/image';
import { ContextTeam } from '../contexts/TeamContext';

const styles = StyleSheet.create({
    Logo: {
        height: 245,
        width: 235,
    },
    container: {
        flex: 1,
        marginTop: 20,
    },
    flatContainer: {
        alignContent: 'space-between',
        paddingTop: 20,
    },
    image: {
        flex: 1,
        resizeMode: "center",
        justifyContent: "center",
        alignItems: 'center',
    },
});


const Conferences = ({ navigation }) => {
    const image = { uri: backgroundImage };
    const { setqConference } = useContext(ContextTeam);
    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>

                <FlatList
                    keyExtractor={({ id }) => id}
                    data={confData}
                    renderItem={({ item: { conferenceLogo, linkUrl } }) =>
                        <View style={styles.flatContainer}>
                            <TouchableOpacity onPress={() => {
                                setqConference(linkUrl)
                                navigation.navigate('Teams')
                            }}
                                underlayColor={colors.gray}>
                                <Image
                                    style={styles.Logo}
                                    source={{
                                        uri: conferenceLogo,
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                    }
                />
            </ImageBackground>
        </View>
    )
};

export default Conferences;
