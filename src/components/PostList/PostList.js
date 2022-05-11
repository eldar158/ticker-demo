import React from 'react';

import './PostList.css';

import PostBlock from './PostBlock/PostBlock'


function PostList(props) {
  const { posts } = props
  return (
    <div className="PostList">
      {
        posts.map((post, i) => 
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
