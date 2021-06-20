import players from '../constants/players';

//Base URL
const base_url = "https://free-nba.p.rapidapi.com/";

export const getConfTeams = () => `${base_url}teams?page=0`;
export const getTeamId = teamid => `${base_url}teams/${teamid}`;
// export const getPlayerPages = page => `${base_url}players?page=${page}&per_page=9`;
export const getPlayerTeam = (teamid) => {
    const data = players.filter(player => player.team.id === Number(teamid) && player.height_feet !== null && player.height_inches !== null);
    return data;
};
// export const getPlayerByQuery = (page, query) => `${base_url}players?page=${page}&per_page=9&search=${query}`;