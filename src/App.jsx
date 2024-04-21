import "./App.css";

import { RecoilRoot } from "recoil";

import Board from "./components/Board";
import Navbar from "./components/Navbar";

function App() {
  
  return (
    <div className="container w-screen h-screen bg-black bg-opacity-25">
      <RecoilRoot>
        <Navbar></Navbar>
        <Board></Board>
      </RecoilRoot>
    </div>
  );
}

export default App;
