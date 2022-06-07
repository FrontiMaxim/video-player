import React from "react";
import "./App.css";
import Authorization from "./hoc/Authorization";
import { ContextAuthorization, ContextUser } from "./context";
import {useState} from "react";

function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [user, setUser] = useState(null);

  return (
      <ContextAuthorization.Provider value={{isAuth, setIsAuth}}>
          <ContextUser.Provider value={{user, setUser}}>
              <div className="App">
                  <Authorization />
              </div>
          </ContextUser.Provider>
      </ContextAuthorization.Provider>
  );
}

export default App;
