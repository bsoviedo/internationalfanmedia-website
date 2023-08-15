import axios from 'axios';

export const fetchLeagueData = async () => {
  const options = {
    method: 'GET',
    url: 'https://footapi7.p.rapidapi.com/api/tournament/8',
    headers: {
      'X-RapidAPI-Key': 'YOUR_API_KEY',
      'X-RapidAPI-Host': 'footapi7.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
