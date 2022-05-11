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

  if (!posts) return

  return (
    <div className="App">
      <Title></Title>
      <PostList posts={posts}></PostList>
    </div>
  );
}

export default App;
