import { useState } from "react";

import TileCol from "./TileCol";

export default function Board() {
  const [tiles, setTiles] = useState(Array(42).fill({ value: "blank" }));

  const [isRedTurn, setIsRedTurn] = useState(true);

  const [isMatchWon, setIsMatchWon] = useState(false);

  const [winner, setWinner] = useState("");

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
      }
      else if(tiles[actual_id] && tiles[actual_id]["value"] !== color){
        return counter
      }
    }
    return counter;
  };

  const checkForWinner = (id, tiles) => {
    let count = 0;
    count = validateX(id, tiles, "left", count);
    console.log(`${count} to the left`);
    count = validateX(id, tiles, "right", count);
    console.log(`${validateX(id, tiles, "right", 0)} to the right`);
    if (count >= 3) {
      console.log(`${tiles[id]["value"]} team won!`);
      setIsMatchWon(true);
      setWinner(tiles[id]["value"]);
    }
  };

  const childrenProps = {
    tiles,
    setTiles,
    isRedTurn,
    setIsRedTurn,
    isMatchWon,
    setIsMatchWon,
    checkForWinner,
  };

  return (
    <div className="w-screen h-screen bg-black bg-opacity-25 flex flex-col justify-center items-center">
      <div>{winner === "" || `Ganador ${winner}`}</div>
      <div className="bg-slate-500 w-2/4 h-3/4 rounded-lg shadow flex justify-center items-center">
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
