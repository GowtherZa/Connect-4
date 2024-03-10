export default function Tile(id) {
  const onTileClick = () => {
    console.log(`Clicked id # ${id}`);
  };

  return (
    <div
      key={id}
      onClick={onTileClick}
      className="border-3 border-slate-200 bg-red-400 rounded-full m-2 w-16 h-16 "
    ></div>
  );
}
