import './PostBlock.css';

function PostBlock(props) {
  const {id, time, title, description, pictureId} = props

  // const imagePath = `/assets/post-pictures/${pictureId}.png`
  // *when build use this instead
  const imagePath = `./assets/post-pictures/${pictureId}.png`

  const imageAlt = `postPicture ${pictureId}`
  
  return (
    <div className="PostBlock">

      <p className='postId'>{id}</p>
      
      <img className='postPicture' src={imagePath} alt={imageAlt}></img>

      <div className='postContent'>
        <p className='postTitle'>{title}</p>
        <p className='postTime'>{time}</p>
        <p className='postDescription'>{description}</p>
      </div>

    </div>
  );
}

export default PostBlock;
