import React, { useContext, useEffect, useCallback } from 'react'
import { View, ImageBackground, SafeAreaView, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import colors from '../config/colors';
import Input from './../components/input';
import { ContextTeam } from '../contexts/TeamContext';
import { SearchedContext } from '../contexts/SearchedContext';
import * as Animatable from 'react-native-animatable';
import _ from 'lodash';
import { backgroundImage } from '../config/image';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.blueNight,
    },
    teams: {
        margin: 10,
        color: colors.white,
    },
    teamsContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    teamText: {
        marginVertical: 5,
        fontSize: 15,
        color: colors.white,
    },
    image: {
        flex: 1,
        
    },
})

const FilterTeams = ({ navigation }) => {
    const { teamsAll, getTeams, doneFetchAll, searchTeams, setSearchTeams } = useContext(ContextTeam);
    const { setTeamId, setDoneFetch, setDoneFetchPlayers } = useContext(SearchedContext);
    const image = { uri: backgroundImage };

    useEffect(() => getTeams(), []);

    const filterTeams = useCallback(
        searchText => {
            if (searchText) {
                const result = teamsAll.filter(({ full_name }) =>
                    _.lowerCase(full_name).includes(searchText)
                );
                setSearchTeams(result);
            } else {
                setSearchTeams(teamsAll);
            }
        },
        [teamsAll],
    );

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <View>
                    <Input
                        placeholder="Search team ..."
                        placeholderTextColor={colors.white}
                        style={{ color: colors.white }}
                        onChangeText={filterTeams}
                    />
                </View>
                {doneFetchAll &&
                    <FlatList
                        style={styles.teams}
                        data={searchTeams}
                        keyExtractor={({ id }) => id}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item: { id, full_name } }) => {
                            const fadeIn = {
                                0: {
                                    opacity: 0,
                                    scale: 0,
                                },
                                0.5: {
                                    opacity: 1,
                                    scale: 0.3,
                                },
                                1: {
                                    opacity: 1,
                                    scale: 1,
                                },
                            };
                            return (
                                <TouchableOpacity
                                    style={styles.teamsContainer}
                                    onPress={() => {
                                        setTeamId(id);
                                        navigation.navigate('TeamDetail');
                                    }}>
                                    <Animatable.Text
                                        style={styles.teamText}
                                        animation={fadeIn}>
                                        {full_name}
                                    </Animatable.Text>
                                </TouchableOpacity>
                            );
                        }}
                    />
                }
            </ImageBackground>
        </SafeAreaView>
    )
}

export default FilterTeams;
