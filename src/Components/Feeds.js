import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Feeds = () => {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/feeds')
      .then(response => setFeeds(response.data))
      .catch(error => console.error('Error fetching feeds:', error));
  }, []);

  return (
    <div className="feeds">
      {feeds.map(feed => (
        <div key={feed.id} className="feed">
          <img src={feed.image} alt={`${feed.user}'s feed`} />
          <p>{feed.user}</p>
          <p>{feed.caption}</p>
        </div>
      ))}
    </div>
  );
};

export default Feeds;
