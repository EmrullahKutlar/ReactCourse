import { useState } from "react";
import { Text } from "./Text";

function App() {
  const [showText, setShowText] = useState(false);

  return (
    <div className="App container mt-5 d-flex justify-content-center ">
      <div>
        <button
          className="btn btn-primary"
          onClick={() => setShowText(!showText)}
        >
          Show Text
        </button>
      </div>
      <div>{showText && <Text />}</div>
    </div>
  );
}

export default App;
