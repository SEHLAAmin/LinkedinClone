import React from 'react';
import './App.css';
import Feed from './Feed';
import Header from './Header';
import SideBar from './SideBar'

function App() {
  return (
    <div className="app">

     {/* Header */}

     <Header />

    {/* App body */}
    <div className="app_body">

    <SideBar />

    <Feed />
    </div>


    {/* feed */ }

    
    {/* widgets */ }

    </div>
  );
}

export default App;
