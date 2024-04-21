import { atom } from "recoil";

const restartState = atom({
  key: "matchRestartingState",
  default: false,
});

export default restartState;