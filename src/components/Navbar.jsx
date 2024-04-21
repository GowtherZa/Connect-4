import { useRecoilState } from "recoil";
import restartState from "../recoil/Atoms";

export default function Navbar() {
  const [restart, setRestart] = useRecoilState(restartState);

  return (
    <div className=" bg-black bg-opacity-50">
      <div className="flex w-3/4 mx-auto justify-between items-center p-2">
        <div>Score</div>
        <div className="">
          <button
            className="btn m-2"
            onClick={() => {
              setRestart(!restart);
            }}
          >
            Restart
          </button>
          <button className="btn m-2">Clear</button>
        </div>
      </div>
    </div>
  );
}
