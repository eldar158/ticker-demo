import './PostBlock.css';

function PostBlock(props) {
  const {id, title, description, pictureId} = props
  const imagePath = `/assets/post-pictures/${pictureId}.png`
  const imageAlt = `postPicture ${pictureId}`
  
  return (
    <div className="PostBlock">
      {id},
      {title},
      {description},
      <img className='postPicture' src={imagePath} alt={imageAlt}></img>
    </div>
  );
}

export default PostBlock;
