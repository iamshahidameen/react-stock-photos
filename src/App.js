import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import Photo from './Photo';
const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

function App() {
  const [loading, setLoading] = useState(true);

  const fetchImages = async () => {
    setLoading(true);
    let url;
    url = `${mainUrl}${clientID}`;
    console.log(url);
    setLoading(false);
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);
  return (
    <main>
      <section className="search">
        <form className="search-form">
          <input type="text" placeholder="search" className="form-input" />
          <button type="submit" className="submit-btn">
            <FaSearch />
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
