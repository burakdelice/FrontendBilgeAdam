import axios from "axios";

const API_URL = "https://rickandmortyapi.com/api/character/?page=2";

export const getCharacters = async (query) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        name: query,
      },
    });

    // API'den gelen karakter verilerini döndür
    return response.data.results;
  } catch (error) {
    console.error("Error fetching characters:", error);
    return [];
  }
};
