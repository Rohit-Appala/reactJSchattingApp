const SearchBox = (props) => {
  const { handleInputChange, value } = props;
  return (
    <input
      onChange={handleInputChange}
      className="user-input"
      id="userInput"
      placeholder="Enter a message"
      value={value}
    />
  );
};

export default SearchBox;
