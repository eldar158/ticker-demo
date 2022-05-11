import React, { useState, useEffect } from 'react';

import './PostList.css';

import PostBlock from './PostBlock/PostBlock'


function PostList(props) {
  const {posts, displayCount} = props
  const [first, setFirst] = useState(0)

  //interval between displayed posts
  useEffect(() => {
    const interval = setInterval(() => {
      const next = (first + 1) % posts.length
      setFirst(next)
    }, 3000);
    return () => clearInterval(interval);
  }, [posts, first]);

  //choose which posts to display
  const displayed = []
  for (let i = first; i < first + displayCount; i++) {
    displayed.push(posts[i % posts.length])
  }

  return (
    <div className="PostList">
      {
        displayed.map((post, i) => 
          <PostBlock key={i}
            id={post.id}
            title={post.title}
            description={post.description}
            pictureId={post.pictureId}
          ></PostBlock>
        )
      }
    </div>
  );
}

export default PostList;
