import { useState } from "react";

import TileCol from "./TileCol";

export default function Board() {
  const [tiles, setTiles] = useState(Array(42).fill({ value: "blank" }));

  const childrenProps = {
    tiles,
    setTiles
  }

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
