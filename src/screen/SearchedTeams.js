import React, { useContext } from 'react';
import { StyleSheet, Button, FlatList } from 'react-native'
import { SearchedContext } from '../contexts/SearchedContext';
import OverlaySpinner from 'react-native-loading-spinner-overlay';
import colors from '../config/colors';
import PlayerCard from '../components/Player/PlayerCard';
import PlayerHeader from '../components/Player/PlayerHeader';

const styles = StyleSheet.create({
    teams: {
        flex: 1,
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 5,
        marginTop: 30,
    },
});


const TeamDetail = ({ navigation }) => {
    const { doneFetch, team, doneFetchPlayers, players } = useContext(SearchedContext);
    return (
        <>
            <OverlaySpinner visible={!doneFetchPlayers} color={colors.white} />
            <Button color={colors.grey} title="Volver atrás" onPress={() => navigation.pop()} />

            {doneFetch && doneFetchPlayers && Object.entries(team).length && Object.entries(players).length ?
                <>
                    <PlayerHeader team={team} />
                    <FlatList
                        style={styles.teams}
                        data={players}
                        keyExtractor={({ id }) => id}
                        showsVerticalScrollIndicator={false}
                        renderItem={({
                            item: {
                                first_name,
                                last_name,
                                height_feet,
                                height_inches,
                                position,
                                weight_pounds,
                            }
                        }) => {
                            return (
                                <PlayerCard
                                    team={team}
                                    first_name={first_name}
                                    last_name={last_name}
                                    height_feet={height_feet}
                                    height_inches={height_inches}
                                    position={position}
                                    weight_pounds={weight_pounds}
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

export default TeamDetail;
