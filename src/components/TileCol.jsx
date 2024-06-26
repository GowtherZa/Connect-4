import { useEffect, useState } from "react";

import Tile from "./Tile";
import { restartState } from "../recoil/Atoms";

// eslint-disable-next-line react/prop-types
export default function TileCol({ initial_id, props }) {
  const [last_id, setLast_id] = useState(initial_id + 7 * 5);

  // eslint-disable-next-line react/prop-types
  const {
    tiles,
    setTiles,
    isRedTurn,
    setIsRedTurn,
    isMatchWon,
    setIsMatchWon,
    checkForWinner,
    restart
  } = props;

  const handleAddPiece = () => {

    // Dibuja las celdas en el tabler0
    const new_tiles = // eslint-disable-next-line react/prop-types
      tiles.map((tile, i) => {
        if (i == last_id && tile["value"] === "blank") {
          const turn = isRedTurn ? "red" : "yellow";
          setIsRedTurn((prevIsRedTurn) => !prevIsRedTurn);
          return turn === "yellow"
            ? { ...tile, value: "yellow" }
            : { ...tile, value: "red" };
        } else {
          return tile;
        }
      });
    setTiles(new_tiles);

    // Verifica si hay un ganador
    checkForWinner(last_id, new_tiles);

    last_id - 7 < 0 ? setLast_id(last_id) : setLast_id(last_id - 7);
  };

  const cols = [];
  let id = initial_id;
  for (let i = 0; i < 6; i++) {
    // eslint-disable-next-line react/prop-types
    cols.push(Tile(id, tiles[id]["value"]));
    id += 7;
  }

  useEffect(()=>{
    setLast_id(initial_id + 7 * 5);
  }
  ,[restart])

  return (
    <div className="flex flex-wrap flex-col" onClick={handleAddPiece}>
      {cols}
    </div>
  );
}
