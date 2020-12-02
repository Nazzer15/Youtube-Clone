import React from 'react'
import './App.css';

import Header from './Header';
import Sidebar from './Sidebar'
import RecommendedVideos from './RecommendedVideos'


import MenuIcon from '@material-ui/icons/Menu'

function App() {
  return (
    <div className="App">

      <Header />
      <div className="app_page">
        <Sidebar />
        <RecommendedVideos />
      </div>

    </div>
  );
}

export default App;
