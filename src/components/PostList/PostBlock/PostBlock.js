import './PostBlock.css';

function PostBlock(props) {
  const {id, title, description, pictureId} = props
  
  return (
    <div className="PostBlock">
      {id},
      {title},
      {description},
      {pictureId},
    </div>
  );
}

export default PostBlock;
