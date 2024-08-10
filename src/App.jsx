import "./App.css";

import { RecoilRoot } from "recoil";

import Board from "./components/Board";
import Navbar from "./components/Navbar";

function App() {
  
  return (
    <div className="w-screen h-screen bg-black bg-opacity-25">
      <div>
      <RecoilRoot>
        <Navbar></Navbar>
        <Board></Board>
        <div className="flex justify-center items-center">
          <p className="text-nowrap">
            Made with ❤️ by
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/GowtherZa"
            >
              <span className="italic"> GowtherZa</span>
            </a>
          </p>
        </div>
      </RecoilRoot>
      </div>
    </div>
  );
}

export default App;
