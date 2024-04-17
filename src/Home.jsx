// import { useState } from "react";
// import FirstPopup from "./Popup/FirstPopup";

// const Home = () => {
//   const [showPopup, setShowPopup] = useState(false);
//   const handleShowPop = () => {
//     setShowPopup(true);
//   };

//   const handleClosePop = () => {
//     setShowPopup(false);
//   };
//   return (
//     <>
//       <div>
//         <h1>this is Home page</h1>
//         <button onClick={handleShowPop()}>ShowPop</button>
//       </div>
//       ;
//       <FirstPopup showPopup={showPopup} handleClosePop={handleClosePop} />
//     </>
//   );
// };

// export default Home;

// ------Gpt

import { useState, memo } from "react";
import FirstPopup from "./Popup/FirstPopup";

export const Home = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleShowPop = () => {
    setShowPopup(true);
  };

  const handleClosePop = () => {
    setShowPopup(false);
  };

  return (
    <>
      <div>
        <h1>This is Home page</h1>
        <button onClick={handleShowPop}>Show Pop</button>
      </div>
      {/* Wrap FirstPopup with React.memo */}
      {showPopup && <FirstPopup handleClosePop={handleClosePop} />}
    </>
  );
};

// Memoize FirstPopup to prevent unnecessary re-renders
// const MemoizedFirstPopup = memo(FirstPopup);
// export default MemoizedFirstPopup;
