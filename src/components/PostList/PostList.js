import React, { useState, useEffect } from 'react';

import FlipMove from 'react-flip-move';

import './PostList.css';

import PostBlock from './PostBlock/PostBlock'


function PostList(props) {
  const {posts, displayCount} = props

  const [first, setFirst] = useState(0)
  const [displayed, setDisplayed] = useState(posts.slice(0, displayCount))

  //interval between displayed posts
  useEffect(() => {
    const interval = setInterval(() => {
      const newFirst = (first + 1) % posts.length
      setFirst(newFirst)

      const newDisplayed = displayed.slice(1, displayed.length)
      newDisplayed.push(posts[(newFirst + displayCount - 1) % posts.length])
      setDisplayed(newDisplayed)
    }, 2000)

    return () => clearInterval(interval);
  }, [posts, first, displayed, displayCount]);
  

  return (
    <div className="PostList">
      <FlipMove>
        {displayed.map((post) => 
          <div key={post.id}>
            <PostBlock
              id={post.id}
              title={post.title}
              description={post.description}
              pictureId={post.pictureId}
            ></PostBlock>
          </div>
        )}
      </FlipMove>
    </div>
  );
}

export default PostList;
