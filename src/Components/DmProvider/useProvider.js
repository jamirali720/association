import { useContext } from "react";
import { DmContext } from "./DmProvider";

const useDmProvider = () => {
  return useContext(DmContext);
};

export default useDmProvider;
