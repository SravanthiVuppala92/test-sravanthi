import axios from 'axios';

const BASE_URL = 'https://randomuser.me/api';

export async function fetchRandomUser(results = 1) {
  return axios.get(`${BASE_URL}?results=${results}`);
}