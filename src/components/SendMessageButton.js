

const SendMessageButton = (props) => {
  const { handleClick } = props;
  return (
    <>
      <button onClick={handleClick} className="send-msg-btn" id="sendMsgBtn">
        <i className="fas fa-paper-plane"></i>
      </button>

    </>
  );
};

export default SendMessageButton;


