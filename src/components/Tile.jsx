import { useEffect, useState } from "react";

export default function Tile(id, value) {
  const base_className =
    "border-2 border-slate-20 rounded-full m-2 h-5 w-5 xsm:w-6 xsm:h-6 sm:h-12 sm:w-12 md:h-16 md:w-16";

  const [className, setClassName] = useState(base_className);

  useEffect(() => {
    switch (value) {
      case "red":
        setClassName(base_className + " bg-red-400");
        break;
      case "yellow":
        setClassName(base_className + " bg-yellow-400");
        break;
      default:
        setClassName(base_className);
    }
  }, [value]);

  return <div key={id} className={className}></div>;
}
