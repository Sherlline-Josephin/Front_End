//import { applyProps } from "@react-three/fiber/dist/declarations/src/core/utils";
import { useEffect, useState } from "react";
//import Task from "../components/Task";
//import Experience from "../components/Experience";

export const useInput = () => {
  const [input, setInput] = useState({
    forward: false,
    backward: false,
    left: false,
    right: false,
    shift: false,
    pose: false,
  });
  const keys = {
    KeyW: "forward",
    KeyS: "backward",
    KeyA: "left",
    KeyD: "right",
    ShiftLeft: "shift",
    KeyT: "pose",
  };

  const findkey = (key) => keys[key];
  useEffect(() => {
    const handleKeyDown = (e) => {
      setInput((m) => ({ ...m, [findkey(e.code)]: true }));
    };
    const handleKeyUp = (e) => {
      setInput((m) => ({ ...m, [findkey(e.code)]: false }));
    };
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return input;
};
