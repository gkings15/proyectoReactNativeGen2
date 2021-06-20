import React, { useContext, useEffect } from 'react'
import { View, Text, Button, StyleSheet, FlatList } from 'react-native'
import { ContextTeam } from '../contexts/TeamContext';
import OverlaySpinner from 'react-native-loading-spinner-overlay';
import colors from '../config/colors';
import TeamCard from '../components/TeamCard';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    titulo: {
        color: colors.white,
        padding: 10,
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        borderColor: colors.blueNight,
        backgroundColor: colors.blackPearl,
    },
    teams: {
        margin: 10,
    },
});


const Teams = ({ navigation }) => {
    const { teams, doneFetch, conference } = useContext(ContextTeam);

    return (
        <>
            <OverlaySpinner visible={!doneFetch} color={colors.white} />
            <Button color={colors.grey} title="Volver atrás" onPress={() => navigation.pop()} />
            {doneFetch && Object.entries(teams).length && conference ?
                <>
                    <Text style={styles.titulo}>{conference}</Text>
                    <FlatList
                        style={styles.teams}
                        data={teams}
                        keyExtractor={({ id }) => id}
                        showsVerticalScrollIndicator={false}
                        renderItem={({
                            item: {
                                id,
                                full_name,
                                city
                            }
                        }) => {
                            return (
                                <TeamCard
                                    id={id}
                                    full_name={full_name}
                                    city={city}
                                    navigation={navigation}
                                />
                            );
                        }}
                    />
                </>
                :
                null
            }
        </>
    )
}

export default Teams
