import { useState } from "react";
import { Person } from "./Person";

function App() {
// devamı ts projesinde

  return (
    <div className="App">
      <div className="contianer">
        <div className="row">
          <Person
          name='Emrullah'
          email='asd@mail.com'
          age='23'
          isMarried={false}
          friends={["ali","veli","hasan","hüseyin"]}

          />
        </div>
      </div>

    </div>
  );
}

export default App;
