import { useState } from "react";

import TileCol from "./TileCol";

export default function Board() {
  const [tiles, setTiles] = useState(Array(42).fill({ value: "blank" }));

  const [isRedTurn, setIsRedTurn] = useState(true);

  const [isMatchWon, setIsMatchWon] = useState(false);

  const validateLeft = (id, tiles, counter = 0) => {
    const color = tiles[id]["value"];
    for (let steps = 1; steps < 4; steps++) {
      if (tiles[id - steps] && tiles[id - steps]["value"] === color) {
        counter++;
        if (id - (steps % 7) === 0 || counter === 3) {
          return counter;
        }
      }
    }
    return counter;
  };

  const checkForWinner = (id, tiles) => {
    if (validateLeft(id, tiles) === 3) {
      console.log(`${tiles[id]["value"]} team won`);
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
    <div className="w-screen h-screen bg-black bg-opacity-25 flex justify-center items-center">
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
