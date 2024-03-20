import { useState } from "react";

import Tile from "./Tile";

// eslint-disable-next-line react/prop-types
export default function TileCol({ initial_id, tiles, setTiles }) {
  const [last_id, setLast_id] = useState(initial_id + 7 * 5);

  const handleAddPiece = () => {
    setTiles(
      // eslint-disable-next-line react/prop-types
      tiles.map((tile, i) => {
        if (i == last_id) {
          // Switch to the turn value
          switch (tile["value"]) {
            case "red":
              return { ...tile, value: "blue" };
            case "blue":
              return { ...tile, value: "red" };
            case "blank":
              return { ...tile, value: "red" };
          }
        } else {
          return tile;
        }
      })
    );

    last_id - 7 < 0 ? setLast_id(last_id) : setLast_id(last_id - 7);
  };

  const cols = [];
  let id = initial_id;
  for (let i = 0; i < 6; i++) {
    // eslint-disable-next-line react/prop-types
    cols.push(Tile(id, tiles[id]["value"]));
    id += 7;
  }

  return (
    <div className="flex flex-wrap flex-col" onClick={handleAddPiece}>
      {cols}
      <span>{last_id}</span>
    </div>
  );
}
