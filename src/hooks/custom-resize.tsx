import { useEffect, useState } from "react";


export default function CustomResize(){
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
      window.addEventListener("resize", handleResize);
    }, []);
  
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    return{width}
}