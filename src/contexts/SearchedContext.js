import React, { createContext, useState, useEffect } from 'react';
import { getPlayerTeam, getTeamId } from './../config/constants';

export const SearchedContext = createContext();

const SearchedContextProvider = ({ children }) => {
    const [teamid, setTeamId] = useState(0);
    const [doneFetch, setDoneFetch] = useState(false);
    const [team, setTeam] = useState([]);
    const [doneFetchPlayers, setDoneFetchPlayers] = useState(false);
    const [players, setPlayers] = useState([]);

    useEffect(() => getTeam(teamid), [teamid]);

    const getTeam = teamid => {
        if (teamid) {
            setDoneFetch(false);
            setTeam([]);
            setDoneFetchPlayers(false);
            setPlayers([])
            fetch(getTeamId(teamid)
                , {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-key": "9ece9f0764msh963573b920062e4p1ed0e0jsn637307dfc71f",
                        "x-rapidapi-host": "free-nba.p.rapidapi.com"
                    }
                }
            )
                .then(res => res.json())
                .then(data => {
                    setDoneFetch(true);
                    setTeam(data)
                    getPlayers(teamid)
                })
                .catch(err => console.log(err));
        }
    };

    const getPlayers = teamid => {
        const data = getPlayerTeam(teamid);
        if (Object.entries(data).length) {
            setDoneFetchPlayers(true);
            setPlayers(data);
        } else {
            setDoneFetchPlayers(false);
        }
    };

    return (
        <SearchedContext.Provider value={{ doneFetch, team, doneFetchPlayers, players, setTeamId, setDoneFetch, setDoneFetchPlayers, getTeam }}>
            {children}
        </SearchedContext.Provider>
    );
};

export default SearchedContextProvider;