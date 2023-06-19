import { createContext, useState } from "react";

export const FpContext = createContext(null);

 const FpProvider = ({children})=> {
    let currentYear = (new Date()).getFullYear();
    const months = ["All", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let currentMonth = (new Date()).getMonth();

    const [allInfo, setAllInfo] = useState([]);
    const [name, setName] = useState('Jamir Ali');
    const [loading, setLoading] = useState(false);
    const [union, setUnion] = useState('Vitikandi');
    const [year, setYear] = useState(currentYear);
    const [month, setMonth] = useState(months[currentMonth]);
    const [unit, setUnit] = useState("all-units");
    
   
    return (
        <FpContext.Provider value={{allInfo, setAllInfo, loading, setLoading,  name, setName, union, setUnion, year, setYear, month, setMonth, unit, setUnit }}>
            {children}
        </FpContext.Provider>
    )
}


export default FpProvider;