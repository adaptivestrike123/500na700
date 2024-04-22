import { useEffect, useState } from "react";

export const usePageWidth = (): number => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, [width]);
  return width;
};
