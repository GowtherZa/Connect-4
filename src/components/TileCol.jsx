import Tile from "./Tile";

// eslint-disable-next-line react/prop-types
export default function TileCol({ initial_id }) {
  const cols = [];
  let id = initial_id;
  for (let i = 0; i < 6; i++) {
    cols.push(Tile(id));
    id += 7;
  }

  return <div className="flex flex-wrap flex-col">{cols}</div>;
}
