import React,{useState,useEffect} from 'react';
import './App.css';

import Title from './components/Title/Title'
import PostList from './components/PostList/PostList'

function App() {
  const [posts,setPosts]=useState([]);

  const getPosts=()=>{
    fetch('posts.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        setPosts(myJson.posts)
      });
  }
  useEffect(()=>{getPosts()},[])

  if (!posts || posts.length === 0) return

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
