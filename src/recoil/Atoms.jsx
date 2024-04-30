import { atom } from "recoil";

const restartState = atom({
  key: "matchRestartingState",
  default: false,
});

const scoreState = atom({
  key:"matchScoreState",
  default: [0,0]
})

export {restartState, scoreState};