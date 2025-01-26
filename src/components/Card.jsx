import React, { useState, useEffect } from 'react';
import './card.css';
import background from '../images/avatar.png';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(15 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}m ${seconds}s`;
  };

  return formatTime(timeLeft);
};

const ShowCustomerCity = () => {
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCity = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        setCity(data.city);
      } catch (error) {
        console.error('Error fetching location:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCity();
  }, []);

  return loading ? 'Loading city... ' : city + ', ';
};

const ShowCustomerCountry = () => {
  const [country, setCountry] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        setCountry(data.country);
      } catch (error) {
        console.error('Error fetching location:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountry();
  }, []);

  return loading ? 'Loading country... ' : country;
};

export const Card = () => {
  const city = ShowCustomerCity();
  const country = ShowCustomerCountry();
  const timeRemaining = CountdownTimer();

  return (
    <div className="profile-card">
      <div
        className="profile-picture"
        style={{ backgroundImage: `url(${background})` }}
      ></div>
      <div className="user-info">
        <h2>Name</h2>
        <svg
          className="verified-icon"
          viewBox="0 0 24 24"
          aria-label="Verified account"
          role="img"
        >
          <g fill="#1DA1F2">
            <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
          </g>
        </svg>
        <span className="status">
          <span className="status-dot"></span>
          Online Now
        </span>
      </div>
      <p className="info">
        <svg
          className="icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
        Avg. response time: 2 minutes
      </p>
      {city && country ? (
        <p className="info" id="visitor-location">
          <svg
            className="icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          {city} {country}
        </p>
      ) : (
        <p className="info" id="visitor-location">
          <svg
            className="icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          Near you (2km)
        </p>
      )}
      {city && country ? (
        <p className="user-message" id="user-message">
          In 📍
          <span className="status-location-name">
            {' '}
            {city} {country}
          </span>{' '}
          I reply to all my DMs 🔥
        </p>
      ) : (
        <p className="user-message" id="user-message">
          📍
          <span className="status-location-name"> Near you (2km)</span> I reply
          to all my DMs 🔥
        </p>
      )}
      <div className="adult-platform-area">
        <button
          onClick={
            /* Onlyfans */
            () => window.open('https://www.onlyfans.com/username', '_blank')
            /* Fansly */
            // window.open('https://www.fansly.com/username', '_blank')
            /* Fanvue */
            // window.open('https://www.fanvue.com/username', '_blank')
          }
          className="message-button"
        >
          {/* Onlyfans */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M24 4.003h-4.015c-3.45 0-5.3.197-6.748 1.957a7.996 7.996 0 1 0 2.103 9.211c3.182-.231 5.39-2.134 6.085-5.173c0 0-2.399.585-4.43 0c4.018-.777 6.333-3.037 7.005-5.995M5.61 11.999A2.391 2.391 0 0 1 9.28 9.97a2.966 2.966 0 0 1 2.998-2.528h.008c-.92 1.778-1.407 3.352-1.998 5.263A2.392 2.392 0 0 1 5.61 12Zm2.386-7.996a7.996 7.996 0 1 0 7.996 7.996a7.996 7.996 0 0 0-7.996-7.996m0 10.394A2.399 2.399 0 1 1 10.395 12a2.396 2.396 0 0 1-2.399 2.398Z"
            ></path>
          </svg>
          {/* Fansly */}
          {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="-.09 .15 800.05 657.84"
        >
          <path
            fill="currentColor"
            d="m197.44.38c13.02.2 22.34.78 27.72 1.71 4.46.77 11.75 2.32 16.2 3.45 4.46 1.13 12.13 3.43 17.06 5.11s14.71 5.89 21.75 9.34 16.82 8.96 21.75 12.24 12.6 9.03 17.06 12.79 19.9 18.66 60.53 59.4l.01 7.67-61.85 61.79-7.65-.04-28.14-27.96c-18.84-18.71-30.12-29.26-34.12-31.89-3.28-2.16-9.23-5.46-13.22-7.35-3.99-1.88-10.9-4.4-15.35-5.59-4.46-1.19-11.94-2.48-16.63-2.87s-12.17-.4-16.63-.03-11.36 1.5-15.35 2.5c-3.99 1.01-10.51 3.23-14.5 4.94s-10.7 5.36-14.93 8.1c-4.22 2.74-10.98 8.29-15.03 12.34-4.04 4.04-9.6 10.8-12.34 15.02-2.75 4.22-6.39 10.93-8.11 14.92-1.71 3.98-3.94 10.5-4.95 14.49-1.01 3.98-2.13 10.89-2.51 15.34-.37 4.45-.36 11.93.03 16.62s1.68 12.17 2.88 16.62c1.19 4.45 3.71 11.36 5.59 15.34s5.19 9.93 7.34 13.21c2.75 4.19 15.24 17.32 79.97 82.25l140.72-140.49c77.4-77.27 143.99-143.08 147.97-146.24 3.99-3.16 10.9-8.18 15.35-11.14 4.46-2.97 11.75-7.33 16.2-9.68 4.46-2.36 12.32-6.01 17.48-8.12s13.99-5.17 19.62-6.79 15.22-3.85 21.32-4.94c9.69-1.73 13.82-1.98 32.84-1.98 19.01 0 23.14.25 32.84 1.98 6.1 1.09 15.69 3.31 21.32 4.94 5.63 1.62 14.46 4.68 19.62 6.79s13.03 5.79 17.48 8.17c4.46 2.38 11.36 6.47 15.35 9.09s10.9 7.68 15.35 11.25c4.46 3.57 12.34 10.87 17.52 16.21s11.75 12.78 14.59 16.53 7.18 9.89 9.65 13.64c2.46 3.75 7.3 12.57 10.75 19.6s7.8 17.39 9.66 23.01c1.86 5.63 4.35 14.64 5.53 20.03 1.19 5.39 2.56 13.06 3.05 17.05.49 3.98 1.14 12.04 1.43 17.9.3 6.03.1 15.83-.48 22.59-.55 6.56-1.78 15.96-2.73 20.88s-2.68 12.4-3.86 16.62-3.51 11.31-5.18 15.77c-1.67 4.45-4.68 11.55-6.7 15.77s-5.86 11.31-8.54 15.77c-2.68 4.45-7.44 11.55-10.57 15.77s-9.36 11.7-13.85 16.62-18.08 18.82-52.26 52.82l-8.53.01-29.73-29.61c-16.94-16.87-30.24-30.8-30.92-32.38-.67-1.57-.96-3.79-.65-5.11.36-1.56 9.55-11.45 27.54-29.62 17.65-17.83 28.51-29.49 31.34-33.67 2.38-3.52 5.68-9.08 7.33-12.36s4-9.13 5.23-13 2.81-10.39 3.52-14.49 1.28-10.62 1.28-14.49-.43-10-.94-13.64c-.51-3.63-1.89-9.87-3.05-13.85s-3.45-10.12-5.09-13.64c-1.63-3.52-5.02-9.46-7.51-13.21-2.5-3.75-7.18-9.52-10.4-12.81-3.22-3.3-8.54-8.02-11.82-10.49s-9.62-6.35-14.07-8.62c-4.46-2.27-11.36-5.11-15.35-6.3s-9.74-2.6-12.79-3.13-10.15-.95-15.78-.93-13.3.62-17.06 1.34c-3.75.72-9.7 2.27-13.22 3.45-3.52 1.17-8.89 3.39-11.94 4.92s-8.42 4.67-11.94 6.97c-4.73 3.1-16.23 13.97-81.91 79.31l101.08 101c92.7 92.62 101.08 101.23 101.08 103.77 0 1.52-.55 3.82-1.22 5.11s-56.42 57.41-123.88 124.71c-92.64 92.41-123.7 122.91-126.92 124.6-2.35 1.23-6.57 2.84-9.38 3.57s-7.42 1.32-10.23 1.31-6.84-.43-8.96-.92c-2.11-.49-5.95-1.87-8.53-3.07-4.09-1.89-25.63-23.07-167.45-164.65-89.51-89.36-165.83-166.12-169.59-170.57s-9.26-11.74-12.21-16.19c-2.96-4.45-7.06-11.17-9.11-14.92s-5.21-10.08-7.03-14.06-4.61-11.08-6.21-15.77-3.83-12.17-4.95-16.62c-1.13-4.45-2.68-11.74-3.44-16.19-.82-4.79-1.57-15.4-1.83-26-.34-13.77-.12-20.36.96-28.55.77-5.86 2.39-15.06 3.6-20.46 1.21-5.39 3.71-14.21 5.56-19.6s5.67-14.6 8.48-20.46c2.82-5.86 6.89-13.53 9.05-17.05s7.22-10.8 11.23-16.19 11.91-14.41 17.55-20.05 14.67-13.53 20.06-17.54 12.69-9.06 16.2-11.22c3.52-2.16 11.19-6.23 17.06-9.05 5.86-2.81 15.07-6.63 20.47-8.48 5.39-1.85 14.22-4.35 19.62-5.57 5.39-1.21 13.84-2.78 18.76-3.47 6.49-.92 14.35-1.18 28.57-.96zm170.58 308.22c-2.81 1.01-8.76 3.72-13.22 6.03s-11.53 6.97-15.71 10.35-10.43 9.6-13.87 13.82c-4.15 5.09-7.99 11.12-11.38 17.9-3.17 6.35-5.96 13.46-7.34 18.75-1.73 6.6-2.32 11.31-2.65 20.88-.31 9.19-.07 14.22.94 19.6.75 3.98 2.16 9.74 3.14 12.78.98 3.05 3.44 8.99 5.47 13.21s5.97 10.74 8.76 14.49 8.01 9.6 11.61 13 9.51 8.13 13.15 10.5c3.64 2.38 8.91 5.42 11.73 6.75 2.81 1.33 7.52 3.22 10.45 4.2s8.11 2.37 11.51 3.1 10.02 1.55 14.71 1.82c4.95.29 11.75.06 16.2-.55 4.22-.57 10.94-1.99 14.93-3.15s10.32-3.54 14.07-5.29 9.89-5.27 13.65-7.82c3.75-2.56 9.89-7.72 13.65-11.47 3.75-3.75 8.92-9.89 11.48-13.64s6.08-9.89 7.83-13.64 4.12-10.08 5.28-14.06 2.58-11.08 3.17-15.77c.61-4.9.85-11.78.55-16.19-.28-4.22-1.09-10.36-1.79-13.64s-2.1-8.46-3.1-11.51c-1.01-3.05-3.71-9.18-6-13.64-2.3-4.45-6.05-10.59-8.35-13.64-2.29-3.05-7-8.24-10.46-11.53-3.46-3.3-9.16-7.94-12.68-10.32s-8.32-5.3-10.66-6.48c-2.35-1.18-7.72-3.37-11.94-4.85s-10.94-3.26-14.93-3.94c-3.99-.69-11.86-1.21-17.48-1.18-6.51.04-13.03.66-17.91 1.68-4.22.89-9.98 2.43-12.79 3.44zm33.69 29.31c3.99.19 9.28.86 11.75 1.47 3.47.86 4.37 1.41 3.94 2.4-.31.7-1.07 2.62-1.69 4.26s-1.14 4.61-1.16 6.61c-.02 1.99.72 5.64 1.65 8.1s2.79 5.82 4.14 7.46 4.52 4.13 7.05 5.54c3.97 2.21 5.48 2.56 11 2.56 5.64 0 6.97-.33 16.2-5.54l1.78 4.05c.98 2.23 2.57 7.12 3.52 10.87 1.45 5.68 1.66 8.52 1.28 17.05-.32 7.3-.99 11.81-2.32 15.77-1.03 3.05-2.98 7.65-4.34 10.23s-4.32 6.99-6.57 9.8c-2.26 2.81-6.39 6.96-9.18 9.22s-8.15 5.58-11.9 7.39c-3.75 1.8-9.51 3.92-12.79 4.72-4.54 1.09-8.52 1.35-16.63 1.06-8.72-.31-11.9-.8-17.48-2.7-3.75-1.28-9.51-3.98-12.79-6.01-3.31-2.04-8.82-6.68-12.37-10.41-4.59-4.83-7.41-8.77-9.97-13.95-1.97-3.97-4.2-9.71-4.97-12.76s-1.59-8.61-1.82-12.36c-.26-4.13.06-9.5.81-13.64.68-3.75 2.24-9.31 3.48-12.36s3.49-7.64 5.02-10.2c1.52-2.56 5.47-7.36 8.77-10.65 3.3-3.3 8.1-7.24 10.66-8.76s7.16-3.78 10.21-5.02 8.23-2.77 11.51-3.39c3.38-.65 9.11-.99 13.22-.79z"
          />
        </svg> */}
          {/* Fanvue */}
          {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 400 400"
        >
          <mask
            id="mask0_7898:142767"
            style={{ maskType: 'alpha' }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="400"
            height="400"
          >
            <rect width="400" height="400" rx="100" fill="white" />
          </mask>
          <g mask="url(#mask0_7898:142767)">
            <path
              fill="white"
              d="M69.8013 521H258.574V520.341L226.892 482.144V220.033H347.68V204.886H192.57C150.327 204.886 116.664 183.811 116.664 141.663C116.664 100.173 149.667 75.1471 191.909 75.1471H214.351V154.834H284.316L349 60H191.909C141.746 60 101.483 92.27 101.483 141.663V204.886H50V220.033H101.483V482.144L69.8013 520.341V521Z"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_7898:142767"
              x1="0"
              y1="0"
              x2="415.154"
              y2="16.4005"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F48A6C" />
              <stop offset="1" stop-color="#FD1D5D" />
            </linearGradient>
          </defs>
        </svg> */}
          Send me a message
        </button>
      </div>
      <div className="gambling-area">
        <button
          onClick={() => window.open('gambling website URL', '_blank')}
          className="gambling-button"
        >
          Gambling website name
        </button>
      </div>
      <div className="affiliate-area">
        <button
          onClick={() => window.open('affiliate website URL', '_blank')}
          className="affiliate-button"
        >
          Affiliate product name
        </button>
      </div>

      <p className="sale-info">
        <span className="sale-percentage">X% OFF </span>
        <span className="sale-timer" id="sale-timer">
          sale ends in 0d 0h {timeRemaining}
        </span>
      </p>
    </div>
  );
};
