import axios from 'axios';
const API_URL = 'https://pixabay.com/api/';
const API_KEY = '39741653-b91bc537daff05ac15601d270';

const getImages = async (query, page, perPage = 12) => {
  const response = await axios.get(
    `${API_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
  );
  return response.data;
};

const normalizedImages = imagesArray =>
  imagesArray.map(({ id, tags, webformatURL, largeImageURL }) => {
    return { id, tags, webformatURL, largeImageURL };
  });

const API = {
  getImages,
  normalizedImages,
};

export default API;
