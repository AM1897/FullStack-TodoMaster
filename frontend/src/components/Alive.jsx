import React, { useState } from 'react';
import MyAPIService from '../utils/api/service/MyAPIService.js';
// Importera din CSS-modul
import styles from './Alive.module.css';

const Alive = () => {
  const [data, setData] = useState('');
  const [displayText, setDisplayText] = useState(true);

  const checkApiStatus = () => {
    MyAPIService.Alive()
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
        setData('An error occurred while connecting to the backend.');
      });
  };

  const displayData = () => {
    if (data.length !== 0 && displayText) {
      return (
        <h3
          className={`${styles.heading} ${
            data.includes('error') ? styles.headingError : ''
          }`}
        >
          {data}
        </h3>
      );
    }
  };

  const toggleDisplayText = () => {
    setDisplayText(!displayText);
  };

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={() => checkApiStatus()}>
        API
      </button>
      {displayData()}
    </div>
  );
};

export default Alive;
