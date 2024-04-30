import { useRecoilState } from "recoil";
import {restartState,scoreState} from "../recoil/Atoms";

export default function Navbar() {
  const [restart, setRestart] = useRecoilState(restartState);
  const [score, setScore] = useRecoilState(scoreState)

  return (
    <div className=" bg-black bg-opacity-50">
      <div className="flex w-3/4 mx-auto justify-between items-center p-2">
        <div className="flex">
          <p className="mr-5 mt-3 italic">Score</p>
          <div className="divide-y hover:divide-solid">
            <p className="text-red-400">{score[0]}</p>
            <p className="text-yellow-400">{score[1]}</p>
          </div>
        </div>
        <div className="flex md:flex-row sm:flex-row flex-col">
          <button
            className="btn m-2 "
            onClick={() => {
              setRestart(!restart);
            }}
          >
            Clear Board
          </button>
          <button className="btn m-2" onClick={()=>{setScore([0,0])}}>Restart Score</button>
        </div>
      </div>
    </div>
  );
}
