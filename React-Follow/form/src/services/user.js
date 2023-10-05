import axios from "axios";
const USER_URL = "http://localhost:5000/user";

/**
 * DB'ye user eklemek için
 * @param {object} data eklenecek user'ın bilgileri
 * @returns eklenen user bilgileri
 */

export const addUser = async (data) => {
  const response = await axios.post(USER_URL, data);
  return response.data;
};

/**
 * DB'den userlar çekilir
 * @param tüm userları veren array
 */

export const getUsers = async (data) => {
  const response = await axios.get(USER_URL);
  return response.data;
};
