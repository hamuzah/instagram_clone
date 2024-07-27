// // src/Components/Dashboard.js
// import React, { useState } from 'react';
// import './dashboard.css';

// const Dashboard = () => {
//   const [darkMode, setDarkMode] = useState(false);

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('userToken');
//     window.location.href = '/';
//   };

//   return (
//     <div className={`dashboard ${darkMode ? 'dark' : 'light'}`}>
//       <header className="dashboard-header">
//         <h1>Instagram Clone</h1>
//         <button className="theme-toggle" onClick={toggleDarkMode}>
//           {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
//         </button>
//         <button onClick={handleLogout}>Logout</button>
//       </header>
//       <main className="dashboard-main">
//         <aside className="sidebar">
//           <h2>Stories</h2>
//           {/* Add story components or placeholders here */}
//         </aside>
//         <section className="feed">
//           <h2>Feed</h2>
//           {/* Add post components or placeholders here */}
//         </section>
//         <aside className="sidebar">
//           <h2>Suggestions</h2>
//           {/* Add suggestions components or placeholders here */}
//         </aside>
//       </main>
//     </div>
//   );
// };

// export default Dashboard;


// src/Components/Dashboard.js
import React, { useEffect,useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchStories, fetchFeeds } from '../redux/actions';
import './dashboard.css'; // Create this CSS file for styling
import Stories from './Stories';
import Feeds from './Feeds';
import Suggestions from './Suggestions';

const Dashboard = () => {

  const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
     setDarkMode(!darkMode);
   };



  const dispatch = useDispatch();
  const { stories } = useSelector((state) => state.stories);
  const { feeds } = useSelector((state) => state.feeds);

  useEffect(() => {
    dispatch(fetchStories());
    dispatch(fetchFeeds());
  }, [dispatch]);

  return (
    // Add dark mode styles to the root element if darkMode is true
    <div className={`dashboard ${darkMode ? 'dark' : 'light'}`}>
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Instagram Clone</h1>
        {/* <button className="theme-toggle">Toggle Theme</button> */}
        
        <button className="theme-toggle" onClick={toggleDarkMode}>
          {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>

      </header>
      <main className="dashboard-main">
        <aside className="sidebar">
          <h2>Stories</h2>
          {stories.map((story, index) => (
            <div key={index} className="story">
              {/* Display each story */}
              <img src={story.image} alt={story.title} />
              <p>{story.title}</p>
              <Stories />
            </div>
          ))}
        </aside>
        <section className="feed">
          <h2>Feed</h2>
          {feeds.map((post, index) => (
            <div key={index} className="post">
              {/* Display each post */}
              <img src={post.image} alt={post.caption} />
              <p>{post.caption}</p>
              <Feeds />
            </div>
          ))}
        </section>
        <aside className="sidebar">
          <h2>Suggestions</h2>
          {/* Add suggestions components or placeholders here */}
          <Suggestions />
        </aside>
      </main>
    </div>
    </div>
  );
};

export default Dashboard;
