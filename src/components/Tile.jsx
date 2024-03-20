import { useEffect, useState } from "react";

export default function Tile(id, value) {
  const base_className = "border-2 border-slate-20 rounded-full m-2 w-16 h-16";

  const [className, setClassName] = useState(base_className);

  useEffect(() => {
    switch (value) {
      case "red":
        setClassName(base_className + " bg-red-400");
        break;
      case "blue":
        setClassName(base_className + " bg-blue-400");
        break;
    }
  }, [value]);

  return <div key={id} className={className}></div>;
}
