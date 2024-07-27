import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Stories = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/stories')
      .then(response => setStories(response.data))
      .catch(error => console.error('Error fetching stories:', error));
  }, []);

  return (
    <div className="stories">
      {stories.map(story => (
        <div key={story.id} className="story">
          <img src={story.image} alt={`${story.user}'s story`} />
          <p>{story.user}</p>
        </div>
      ))}
    </div>
  );
};

export default Stories;
