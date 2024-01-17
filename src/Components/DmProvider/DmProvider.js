import { createContext, useState } from "react";

export const DmContext = createContext(null);

 const DmProvider = ({children})=> {
    const [filtered, setFiltered] = useState([]);
    const [donar, setDonar] = useState([]);
    const [expense, setExpense] = useState([]);
    const [loading, setLoading] = useState(false);  

  
    
   
    return (
      <DmContext.Provider
        value={{
          filtered,
          setFiltered,
          donar,
          setDonar,
          loading,
          setLoading,     
          expense, 
          setExpense
          
        }}
      >
        {children}
      </DmContext.Provider>
    );
}


export default DmProvider;