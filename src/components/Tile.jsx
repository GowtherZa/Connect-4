import { useEffect, useState } from "react";

export default function Tile(id, value) {

  const [className, setClassName] = useState(
    "border-2 border-slate-20 rounded-full m-2 w-16 h-16"
  );

  useEffect(()=>{
    switch (value) {
      case "red":
        setClassName((prevClassName) => prevClassName + " bg-red-400");
        break;
      case "blue":
        setClassName((prevClassName) => prevClassName + " bg-blue-400");
        break;
    }
  },[value])

  return <div key={id} className={className}></div>;
}
