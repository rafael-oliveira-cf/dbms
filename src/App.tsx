import { useState } from "react";
import Menubar from "./pages/layout/menubar";
import { invoke } from "@tauri-apps/api/tauri";
// import Main from './Main';
// import { Link } from "react-router-dom";
import {LeftPanel, RightPanel, CenterPainel} from './pages/layout/panel/index'

import "./App.css";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <div >
      <Menubar />
      <div className="container">
        <LeftPanel />
        <CenterPainel />
        <RightPanel />
      
        {/* <Main />  */}
        {/* <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/topics'>Topics</Link></li>
          <li><Link to='/settings'>Settings</Link></li>
        </ul> */}
        <p>Click on the Tauri, Vite, and React logos to learn more.</p>

        <form
          className="row"
          onSubmit={(e) => {
            e.preventDefault();
            greet();
          }}
        >
          <input
            id="greet-input"
            onChange={(e) => setName(e.currentTarget.value)}
            placeholder="Enter a name..."
          />
          <button type="submit">Greet</button>
        </form>
      </div>
      <p>{greetMsg}</p>
    </div>
  );
}

export default App;
