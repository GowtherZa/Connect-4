import TileCol from "./TileCol";

export default function Board() {
  return (
    <div className="w-screen h-screen bg-black bg-opacity-25 flex justify-center items-center">
      <div className="bg-slate-500 w-2/4 h-3/4 rounded-lg shadow flex justify-center items-center">
        <div className="flex flex-wrap align-center items-center">
          <TileCol initial_id={0}></TileCol>
          <TileCol initial_id={1}></TileCol>
          <TileCol initial_id={2}></TileCol>
          <TileCol initial_id={3}></TileCol>
          <TileCol initial_id={4}></TileCol>
          <TileCol initial_id={5}></TileCol>
        </div>
      </div>
    </div>
  );
}
