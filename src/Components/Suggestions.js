import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Suggestions = () => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/suggestions')
      .then(response => setSuggestions(response.data))
      .catch(error => console.error('Error fetching suggestions:', error));
  }, []);

  return (
    <div className="suggestions">
      {suggestions.map(suggestion => (
        <div key={suggestion.id} className="suggestion">
          <img src={suggestion.profile_image} alt={`${suggestion.user}'s profile`} />
          <p>{suggestion.user}</p>
        </div>
      ))}
    </div>
  );
};

export default Suggestions;
