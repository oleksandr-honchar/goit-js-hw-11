import axios from 'axios';

export async function getImagesByQuery(query) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '50800814-f0ce8c424259a5db94c3e389b';

  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });

  return response.data;
}
