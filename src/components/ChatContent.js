import React from "react";

import SenderMessage from "./senderMessage";

const ChatContent = (props) => {
  const { messages } = props;

  return (
    <div className="chat-container"  id="chatContainer">
      {messages.map((message) => {
        return (
          <SenderMessage
            key={message.name}
            name={message.name}
            message={message.message}
            likeCount={message.likeCount}
          />
        );
      })}
    </div>
  );
};

export default ChatContent;
