import { useEffect } from 'react';
import css from './Modal.module.css';

export function Modal({ onClose, largeImageURL, tags }) {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return (
    <div className={css.Overlay} onClick={handleBackdropClick}>
      <div className={css.Modal}>
        <img src={largeImageURL} alt={tags} onClick={handleBackdropClick} />
      </div>
    </div>
  );
}
