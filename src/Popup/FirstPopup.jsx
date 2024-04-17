const FirstPopup = ({ handleClosePop }) => {
  const handleForm = (e) => {
    e.preventDefault();
    const formm = e.target.value;
    console.log(formm);
  };
  return (
    <div>
      <form onSubmit={handleForm}>
        <input type="text" placeholder="Enter UserName" />
        <input type="text" placeholder="Enter NickName" />
        <button type="submit"> Save </button>
      </form>
      <button onClick={handleClosePop}>Canceel</button>
    </div>
  );
};

export default FirstPopup;
