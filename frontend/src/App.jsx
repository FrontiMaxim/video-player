import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";

const img = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="12" fill="#C4C4C4"/>
            </svg>;

const listFollowing = [
    {
        img,
        link: '#',
        text: 'Eleanor Pena'
    },
    {
        img,
        link: '#',
        text: 'DIY with Albert'
    },
    {
        img,
        link: '#',
        text: 'Everything tech'
    },
    {
        img,
        link: '#',
        text: 'Eleanor Pena'
    }
];

function App() {
  return (
    <div className="App">
      <Sidebar listFoLlowing={listFollowing}/>
    </div>
  );
}

export default App;
