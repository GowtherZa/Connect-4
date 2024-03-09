import TileRow from "./TileRow";

export default function Board() {
  return (
    <div className="w-screen h-screen bg-black bg-opacity-25 flex justify-center items-center">
      <div className="bg-slate-500 w-2/4 h-3/4 rounded-lg shadow flex justify-center items-center">
        <div className="flex flex-wrap flex-col content-center items-center">
          <TileRow></TileRow>
          <TileRow></TileRow>
          <TileRow></TileRow>
          <TileRow></TileRow>
          <TileRow></TileRow>
          <TileRow></TileRow>
        </div>
      </div>
    </div>
  );
}
