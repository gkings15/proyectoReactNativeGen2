import React, { createContext, useState, useEffect } from 'react';
import { getConfTeams } from './../config/constants';

export const ContextTeam = createContext();

const TeamContextProvider = ({ children }) => {
    const [qConference, setqConference] = useState();
    const [teams, setTeams] = useState([]);
    const [doneFetch, setDoneFetch] = useState(false);
    const [conference, setConference] = useState('');
    const [teamsAll, setTeamsAll] = useState([]);
    const [doneFetchAll, setDoneFetchAll] = useState(false);
    const [searchTeams, setSearchTeams] = useState([]);

    useEffect(() => getTeamsByConference(qConference), [qConference]);

    const getTeamsByConference = qConference => {
        setTeams([]);
        setConference('');
        setDoneFetch(false);
        fetch(getConfTeams()
            , {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "9ece9f0764msh963573b920062e4p1ed0e0jsn637307dfc71f",
                    "x-rapidapi-host": "free-nba.p.rapidapi.com"
                }
            }
        )
            .then(res => res.json())
            .then(datares => {
                const { data } = datares;
                const teams = data.filter(({ conference }) => typeof qConference === 'undefined' ? conference === 'West' || conference === 'East' : conference === qConference);
                setTeams(teams);
                setConference(typeof qConference === 'undefined' ? 'Teams in NBA' : qConference === 'West' ? 'Teams WEST' : 'Teams EAST');
                setDoneFetch(true);
            })
            .catch(err => console.log(err));
    };

    const getTeams = () => {
        fetch(getConfTeams()
            , {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "9ece9f0764msh963573b920062e4p1ed0e0jsn637307dfc71f",
                    "x-rapidapi-host": "free-nba.p.rapidapi.com"
                }
            }
        )
            .then(res => res.json())
            .then(datares => {
                const { data } = datares;
                setTeamsAll(data);
                setDoneFetchAll(true);
                setSearchTeams(data);
            })
            .catch(err => console.log(err));
    };

    return (
        <ContextTeam.Provider value={{ qConference, setqConference, teams, doneFetch, conference, teamsAll, getTeams, doneFetchAll, searchTeams, setSearchTeams }}>
            {children}
        </ContextTeam.Provider>
    );
};

export default TeamContextProvider;