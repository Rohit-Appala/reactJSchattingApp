import React, { useState } from "react";
import ChatContent from "./ChatContent";
import SendMessageButton from "./SendMessageButton";
import Image from "./Image";

import "./homeScreen.css";

const links = [
  "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/chatbot-bot-img.png",
  "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/chatbot-boy-img.png",
];

const HomeScreen = () => {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]);
  const [users] = useState(["Alan", "Bob", "Carol", "Dean", "Elin"]);
  const [showUserList, setShowUserList] = useState(false);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    if (value.endsWith("@")) {
      setShowUserList(true);
    } else {
      setShowUserList(false);
    }
  };

  const handleEmojiSelect = (emoji) => {
    setInputValue((prevInputValue) => prevInputValue + emoji);
  };

  const handleClick = () => {
    const names = ["Alan", "Bob", "Carol", "Dean", "Elin"];
    const randomName = names[Math.floor(Math.random() * names.length)];
    if (inputValue.trim() !== "") {
      setMessages([...messages, { name: randomName, message: inputValue }]);
      setInputValue("");
    }
  };

  const handleEnterClick = (e) => {
    if (e.keyCode === 13) {
      handleClick();
    }
  };

  const handleUserClick = (user) => {
    setInputValue((prevInputValue) => {
      const inputValueWithoutAt = prevInputValue.replace(/@$/, '');
      return `${inputValueWithoutAt}@${user} `;
    });
    setShowUserList(false);
  };
  
  
  
  return (
    <>
      <div className="p-2">
        <h1 className="text-center chatbot-heading">Meet our Chatbot</h1>
        <Image imageSrc={links[0]} />
        <p>
          <span className="candidate">Raju</span>
          <br/>
          <span className="defaultmessagebox1 messagebox">Welcome to Team Chat👋👋, Send 
          a message now to start interacting with other users in the app</span>
        </p>

        <p>
          <span className="candidate">Suresh</span>
          <br/>
          <span className="defaultmessagebox2 messagebox">
          Hey everyone!</span>
        </p>

        <p>
          <span className="candidate">Harsha</span>
          <br/>
          <span className="defaultmessagebox3 messagebox">Oh hi,Suresh! Naveen
          is around,too</span>
        </p>
        <p>
          <span className="candidate">Naveen</span>
          <br/>
          <span className="defaultmessagebox4 messagebox">Hi all! Nice to see you👋
          </span>
        </p>
        <ChatContent messages={messages} />
        <div className="d-flex flex-row justify-content-end">
          <Image imageSrc={links[1]} />
        </div>
        <div className="d-flex flex-row justify-content-center">
        {showUserList && <UserList users={users} handleUserClick={handleUserClick} />}
          <input
            onKeyDown={handleEnterClick}
            onChange={handleInputChange}
            onBlur={() => setShowUserList(false)}
            className="user-input"
            id="userInput"
            placeholder="Enter a message"
            value={inputValue}
          />
          <SendMessageButton handleClick={handleClick} />

          <div className="emoji-picker">
            <span
              role="img"
              aria-label="smile"
              onClick={() => handleEmojiSelect("😄")}
            >
              😄
            </span>
            <span
              role="img"
              aria-label="heart"
              onClick={() => handleEmojiSelect("❤️")}
            >
              ❤️
            </span>
            <span
              role="img"
              aria-label="star"
              onClick={() => handleEmojiSelect("⭐")}
            >
              ⭐
            </span>
          </div>
        </div>
      </div>
      
    </>
  );
};


const UserList = ({ users, handleUserClick }) => {
    return (
      <ul className="user-list">
        {users.map((user, index) => (
          <li key={index} onClick={() => handleUserClick(user)}>
            {user}
          </li>
        ))}
      </ul>
    );
  };
export default HomeScreen;
