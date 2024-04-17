import { Provider } from "react-redux";

import { Home } from "./Home";
import appStore from "../Utils/appStore";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <Home />
      </Provider>
    </>
  );
}

export default App;
