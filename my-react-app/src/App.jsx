import { useState } from "react";
import { Cat } from "./Cat";
import { useToggle } from "./useToggle";
import { useCount, } from "./useCount";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
const queryClient = new QueryClient()

function App() {
  const [isVisible,toggle]=useToggle(false)
  const [state, increase,decrease,setZero]=useCount(0)
  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
      <div className="container mt-5">
        <div className="row ">
          <div className="col d-flex justify-content-center flex-column align-items-center">
            <button
              className="btn btn-primary"
              onClick={toggle}
            >
              {isVisible ? "HIDE" : "SHOW"}
            </button>
            {isVisible && <h4 className="mt-3">Hidden Text</h4>}
          </div>
          <div className="col-12">
            <Cat/>
          </div>
          <div className="col-12">
            {state}
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
            <button onClick={setZero}>0</button>
          </div>
        </div>
      </div>
    </div>
    </QueryClientProvider>

  );
}

export default App;
