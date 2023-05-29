import { createContext, useState } from "react";


export const FpContext = createContext(null);

 const FpProvider = ({children})=> {
    const [allInfo, setAllInfo] = useState([]);
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false);
    const [union, setUnion] = useState('');
    const [year, setYear] = useState('');
    const [month, setMonth] = useState('');
    const [unit, setUnit] = useState('');
    
    console.log(allInfo);

    return (
        <FpContext.Provider value={{allInfo, setAllInfo, loading, setLoading,  name, setName, union, setUnion, year, setYear, month, setMonth, unit, setUnit }}>
            {children}
        </FpContext.Provider>
    )
}


export default FpProvider;