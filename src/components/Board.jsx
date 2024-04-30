import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

import TileCol from "./TileCol";
import { restartState, scoreState } from "../recoil/Atoms";

export default function Board() {
  const initialTilesStatus = Array(42).fill({ value: "blank" });

  const [tiles, setTiles] = useState(initialTilesStatus);

  const [isRedTurn, setIsRedTurn] = useState(true);

  const [isMatchWon, setIsMatchWon] = useState(false);

  const [restart, setRestart] = useRecoilState(restartState);

  const [score, setScore] = useRecoilState(scoreState);

  const validateX = (id, tiles, side, counter = 0) => {
    if (
      (side === "left" && id % 7 == 0) ||
      (side === "right" && id % 7 === 6)
    ) {
      return counter;
    }

    const color = tiles[id]["value"];
    let actual_id = 0;
    let side_condition = null;

    for (let steps = 1; steps < 4; steps++) {
      actual_id = side === "left" ? id - steps : id + steps;
      side_condition =
        side == "left" ? (id - steps) % 7 === 0 : (id + steps) % 7 === 6;
      if (tiles[actual_id] && tiles[actual_id]["value"] === color) {
        counter++;
        if (side_condition || counter === 3) {
          return counter;
        }
      } else if (tiles[actual_id] && tiles[actual_id]["value"] !== color) {
        return counter;
      }
    }
    return counter;
  };

  const validateDown = (id, tiles, counter = 0) => {
    if (id >= 32) {
      return counter;
    }

    const color = tiles[id]["value"];
    let actual_id = 0;
    let condition = null;

    for (let steps = 7; steps < 28; steps += 7) {
      actual_id = id + steps;
      condition = actual_id <= 6;
      if (tiles[actual_id] && tiles[actual_id]["value"] === color) {
        counter++;
        if (condition || counter === 3) {
          return counter;
        }
      }
    }
    return counter;
  };

  const validateUpperDiags = (id, tiles, side, counter = 0) => {
    const condition = (id) => id <= 6;
    const color = tiles[id]["value"];

    if (condition(id)) {
      return counter;
    }

    const steps = 7;
    let actual_id = 0;

    for (let i = 1; i <= 4; i++) {
      actual_id = side === "left" ? id - steps * i - i : id - steps * i + i;
      if (tiles[actual_id] && tiles[actual_id]["value"] === color) {
        counter++;
        if (condition(actual_id) || counter === 3) {
          return counter;
        }
      } else {
        return counter;
      }
    }
  };

  const validateLowerDiags = (id, tiles, side, counter = 0) => {
    const color = tiles[id]["value"];

    let actual_id = id;

    for (let i = 1; i <= 4; i++) {
      actual_id = side === "left" ? actual_id + 6 : actual_id + 8;
      if (tiles[actual_id] && tiles[actual_id]["value"] === color) {
        counter++;
        if (counter === 3) {
          return counter;
        }
      } else {
        return counter;
      }
    }
  };

  const checkForWinner = (id, tiles) => {
    let count = 0;

    const checkCount = (count) => {
      if (count >= 3) {
        setScore((prev)=>{
          let new_score = [0,0]
          if (tiles[id]["value"] === "red"){
            new_score[0] += 1;
          } else if (tiles[id]["value"] === "yellow") {
            new_score[1] += 1;
          }
          new_score[0] += prev[0];
          new_score[1] += prev[1];
          return new_score
        });
        // Reiniciamos el tablero
        setRestart(!restart);
        return true;
      }
      return false;
    };

    // Valida en el eje X
    count = validateX(id, tiles, "left", count);
    count = validateX(id, tiles, "right", count);
    checkCount(count);

    // Valida en el eje Y
    count = validateDown(id, tiles, 0);
    checkCount(count);

    // Valida la diagonal trazada de izquierda a derecha
    count = validateUpperDiags(id, tiles, "left");
    count = validateLowerDiags(id, tiles, "right", count);
    checkCount(count);

    // Valida la diagonal trazada de derecha a izquierda
    count = validateUpperDiags(id, tiles, "right");
    count = validateLowerDiags(id, tiles, "left", count);
    checkCount(count);
  };

  const childrenProps = {
    tiles,
    setTiles,
    isRedTurn,
    setIsRedTurn,
    isMatchWon,
    setIsMatchWon,
    checkForWinner,
    restart
  };

  useEffect(() => {
    setTiles(initialTilesStatus);
    setIsRedTurn(true);
  }, [restart]);

  return (
    <div className="bg-opacity-25 flex flex-col justify-center items-center">
      <div className="my-16 bg-slate-500 w-4/5 h-3/5 xsm:h-3/5 xl:w-2/4 xl:h-1/4 md:w-4/5 md:h-3/5 sm:w-3/4 sm:h-3/4 rounded-lg shadow flex justify-center items-center">
        <div className="flex flex-wrap align-center items-center">
          <TileCol initial_id={0} props={childrenProps}></TileCol>
          <TileCol initial_id={1} props={childrenProps}></TileCol>
          <TileCol initial_id={2} props={childrenProps}></TileCol>
          <TileCol initial_id={3} props={childrenProps}></TileCol>
          <TileCol initial_id={4} props={childrenProps}></TileCol>
          <TileCol initial_id={5} props={childrenProps}></TileCol>
          <TileCol initial_id={6} props={childrenProps}></TileCol>
        </div>
      </div>
    </div>
  );
}
