import React from 'react';
import './App.css';

import Title from './components/Title/Title'
import PostList from './components/PostList/PostList'

import posts from './posts'

function App() {
  const bgPath = './assets/bg.png'
  return (
    <div className="App" style={{background: `url(${bgPath})`}}>

      {/* attribute */}
      <a className='attribute' href='https://www.freepik.com/vectors/electrical-safety'>Electrical safety vector created by macrovector - www.freepik.com</a>
      
      <Title></Title>
      <PostList posts={posts} displayCount={3}></PostList>

    </div>
  );
}

export default App;
