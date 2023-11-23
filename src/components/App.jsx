import { useState, useEffect } from 'react';
import { SearchBar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import API from './Servises/PixabayApi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function App() {
  const [searchName, setSearchName] = useState('');
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (searchName === '') {
      return;
    }
    async function addImages() {
      try {
        setIsLoading(true);

        const data = await API.getImages(searchName, currentPage);

        if (data.hits.length === 0) {
          return toast.info('Sorry image not found...', {
            position: toast.POSITION.TOP_RIGHT,
          });
        }

        const normalizedImages = API.normalizedImages(data.hits);

        setImages(prevImages => [...prevImages, ...normalizedImages]);
        setIsLoading(false);
        setError(null);
        setTotalPages(Math.ceil(data.totalHits / 12));
      } catch (error) {
        setError('Something went wrong!');
      } finally {
        setIsLoading(false);
      }
    }

    addImages();
  }, [searchName, currentPage]);

  const loadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const handleSubmit = query => {
    setSearchName(query);
    setImages([]);
    setCurrentPage(1);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      {images.length > 0 && <ImageGallery images={images} />}
      {isLoading && <Loader />}
      {images.length > 0 &&
        totalPages !== currentPage &&
        !isLoading &&
        !error && <Button onClick={loadMore} />}
    </div>
  );
}
