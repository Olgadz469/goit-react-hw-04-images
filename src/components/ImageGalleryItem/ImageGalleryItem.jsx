import { useState } from 'react';
import css from './ImageGalleryItem.module.css';
import { Modal } from 'components/Modal/Modal';

export function ImageGalleryItem({ image }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(prevModal => !prevModal);
  };

  return (
    <>
      <li className={css.ImageGalleryItem}>
        <img
          className={css.ImageGalleryItem_image}
          src={image.webformatURL}
          alt={image.tags}
          onClick={toggleModal}
        />

        {isModalOpen && (
          <Modal
            largeImageURL={image.largeImageURL}
            alt={image.tags}
            onClose={toggleModal}
          />
        )}
      </li>
    </>
  );
}
