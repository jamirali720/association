import { useContext } from "react"
import { FpContext } from "./FpProvider"

 const useFpProvider = () => {
    const all = useContext(FpContext);    
    return all
}

export default useFpProvider;