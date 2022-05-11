import React from 'react';
import './App.css';

import Title from './components/Title/Title'
import PostList from './components/PostList/PostList'

function App() {
  const posts = [
    {
      "id": 0,
      "title": "hello there",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa id neque aliquam vestibulum morbi blandit cursus risus at",
      "pictureId": 0
    },
    {
      "id": 1,
      "title": "nice to see you",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa id neque aliquam vestibulum morbi blandit cursus risus at",
      "pictureId": 1
    },
    {
      "id": 2,
      "title": "yohoo",
      "description": "Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada",
      "pictureId": 2
    },
    {
      "id": 3,
      "title": "another title",
      "description": "Lorem ipsum dolor sit amet Massa id neque aliquam vestibulum morbi blandit cursus risus at",
      "pictureId": 3
    },
    {
      "id": 4,
      "title": "different title",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa id neque aliquam vestibulum morbi blandit cursus risus at",
      "pictureId": 4
    },
    {
      "id": 5,
      "title": "differenter title",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa id neque aliquam vestibulum morbi blandit cursus risus at",
      "pictureId": 5
    },
    {
      "id": 6,
      "title": "something title",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa id neque aliquam vestibulum morbi blandit cursus risus at",
      "pictureId": 6
    },
    {
      "id": 7,
      "title": "something else title",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa id neque aliquam vestibulum morbi blandit cursus risus at",
      "pictureId": 7
    },
    {
      "id": 8,
      "title": "im running out of ideas",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa id neque aliquam vestibulum morbi blandit cursus risus at",
      "pictureId": 8
    },
    {
      "id": 9,
      "title": "well whatever",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa id neque aliquam vestibulum morbi blandit cursus risus at",
      "pictureId": 9
    }
  ]

  return (
    <div className="App">
      {/* attribute */}
      <a className='attribute' href='https://www.freepik.com/vectors/electrical-safety'>Electrical safety vector created by macrovector - www.freepik.com</a>
      
      <Title></Title>
      <PostList posts={posts} displayCount={3}></PostList>
    </div>
  );
}

export default App;
