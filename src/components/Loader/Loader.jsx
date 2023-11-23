import React from 'react';
import css from './Loader.module.css';

import { Audio } from 'react-loader-spinner';
export const Loader = () => {
  return (
    <div className={css.loadspinner}>
      <Audio
        height="100"
        width="100"
        color="#4fa94d"
        ariaLabel="audio-loading"
        wrapperStyle={{}}
        wrapperClass="wrapper-class"
        visible={true}
      />
    </div>
  );
};
