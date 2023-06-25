import React from "react";

const Like = (props) => {
  const { likeCount, likeClick } = props;
  return (
    <span className="loveIcon" onClick={likeClick}>
      &#10084; {likeCount}
    </span>
  );
};

export default Like;
