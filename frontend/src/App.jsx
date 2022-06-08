import React from "react";
import "./App.css";
import Authorization from "./hoc/Authorization";
import { ContextAuthorization, ContextUser, ContextFollowing } from "./context";
import {useState} from "react";

function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [user, setUser] = useState(null);
    const [listFollowing, setListFollowing] = useState([]);

  return (
      <ContextAuthorization.Provider value={{isAuth, setIsAuth}}>
          <ContextUser.Provider value={{user, setUser}}>
              <ContextFollowing.Provider value={{listFollowing, setListFollowing}}>
                  <div className="App">
                      <Authorization />
                  </div>
              </ContextFollowing.Provider>
          </ContextUser.Provider>
      </ContextAuthorization.Provider>
  );
}

export default App;
