import { useState } from "react";
import Like from "./LIke";

const SenderMessage = (props) => {
  const clickHandler = () => {
    setLikeCount(likeCount + 1);
  };
  const [likeCount, setLikeCount] = useState(0);
  const { name, message } = props;
  return (
    <p>
      <span className="candidate">{name}</span>
      
      <br />
      <span className="messagebox">
        {message}
      </span>
      <span className="likestyling"> <Like likeCount={likeCount} likeClick={clickHandler} /></span>
    </p>

    
  );
};

export default SenderMessage;
