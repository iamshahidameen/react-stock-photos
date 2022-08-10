import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import Photo from './Photo';
// const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

function App() {
  return (
    <main>
      <section className="search">
        <form className="search-form">
          <input
            type="text"
            placeholder="search"
            className="form-input"
            value=""
          />
          <button type="submit" className="submit-btn">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
            </svg>
          </button>
        </form>
      </section>
      <section className="photos">
        <div className="photos-center">
          <article className="photo">
            <img
              src="https://images.unsplash.com/photo-1536329583941-14287ec6fc4e?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MnwxNzY2ODF8MXwxfGFsbHwxfHx8fHx8Mnx8MTY2MDE1MTUwNA&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1080"
              alt="white notebook"
            />
            <div className="photo-info">
              <div>
                <h4>Keila Hötzel</h4>
                <p>3308 likes</p>
              </div>
              <a href="http://www.theresponsiblecreatives.com">
                <img
                  src="https://images.unsplash.com/profile-1607516942909-bd6cc51a8fc7image?ixlib=rb-1.2.1&amp;crop=faces&amp;fit=crop&amp;w=64&amp;h=64"
                  alt=""
                  className="user-img"
                />
              </a>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
export default App;
