import React from 'react';
import './App.css';

import Title from './components/Title/Title'
import PostList from './components/PostList/PostList'

import posts from './posts'

function App() {
  return (
    <div className="App">

      <Title></Title>
      <PostList posts={posts} displayCount={3}></PostList>
      
      {/* attribute */}
      <a className='attribute' href='https://www.freepik.com/vectors/electrical-safety'>
        Electrical safety vector created by macrovector - www.freepik.com
      </a>

    </div>
  );
}

export default App;
