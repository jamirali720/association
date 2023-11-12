import React, { useEffect } from 'react';
import FpNavbar from './FpNavbar';
import useFpProvider from '../FpProvider/useProvider';
import FilterLists from './FilterLists';
import Loader from '../utils/Loader';

const FamilyPlanning = () => {
  const {name, union, setUnion, month, setMonth, loading, setAllInfo, setLoading, setName,unit, setUnit, year, setYear} = useFpProvider();
  let currentYear = (new Date()).getFullYear();

  var yearArray= [];
  
  for (let i = 2022; i <= currentYear; i++) {
    yearArray.push(i);    
  }
  

  useEffect(() => {
      const fetchData = ()=> {
                  setLoading(true);
                  fetch("https://association-server.onrender.com/office")
                  .then(res => res.json())
                  .then(data => {
                    setAllInfo(data)
                    setLoading(false);
                  })      
      }
      fetchData();
  },[setAllInfo, setLoading])
 
  if(loading) return <Loader/>

 

  const months = ["All","January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const names = ["Jamir Ali", "Mokta Akter", "Aksiya Akter", "Trisna Rani Vowmik", "Nazmun Nahar", "Jesmin Begum"];
  const vitiUnits = ["all-units", "2/ka", "2/kha", "3/ka", "3/kha", "3/ga"];
  const kolaUnits = ["all-units", "1/ka", "1/kha"];

    return (
        <main>
          <section>
            <FpNavbar/>
          </section>
          <section>          
           <h1 className='text-warning mt-2'> Welcome to Family Planning office</h1>
          </section>
          <section>
            <div className=" form-container">
              <span className='display-6 text-primary'> Search Your Data </span>
            <form >
                <div className="d-flex justify-content-center align-content-center search-input">
                <div className="form-group me-2 ">
                <select
                 onChange={(event)=> {setName(event.target.value)}}  
                 value={name}             
                                    
                >
                  {names.map((name, i) =>(
                     <option key={i} value={name}>{name}</option>
                  ))}
                </select>
                
              </div>
              <div className="form-group me-2 ">
                <select   
                 value={union}               
                   onChange={(event)=> {setUnion(event.target.value)}}                  
                >                    
                    <option value="Vitikandi">Vitikandi</option>
                    <option value="Kolakandi">Kolakandi</option>
                </select>
                
              </div>
              {(union === "Kolakandi") ? 
              (<div className="form-group me-2 ">
                <select      
                 value={unit}            
                   onChange={(event)=> {setUnit(event.target.value)}}                
                >             
                   {kolaUnits.map((unit, i) =>(
                     <option key={i} value={unit}>{unit}</option>
                  ))}
                </select>                
              </div>) :
              (<div className="form-group me-2 ">
                <select   
                 value={unit}               
                   onChange={(event)=> {setUnit(event.target.value)}}                
                >                 
                   {vitiUnits.map((unit, i) =>(
                     <option key={i} value={unit}>{unit}</option>
                  ))}
                </select>
                
              </div>)}
              <div className="form-group me-2 ">
                <select
                   value={year}
                   onChange={(event)=> {setYear(event.target.value)}}              
                >
                  {yearArray.map((year, i) =>(
                     <option key={i} value={year}>{year}</option>
                  ))}
                </select>
                
              </div>
              <div className="form-group">
                <select      
                 value={month}           
                   onChange={(event)=> {setMonth(event.target.value)}}
                  
                >
                  {months.map((month, i) =>(
                     <option key={i} value={month}>{month}</option>
                  ))}
                </select>
                
              </div>
                </div>
              </form>
            </div>
          </section>
          
          <section className='mt-4'>
              <FilterLists/>
          </section>
        </main>
    );
};

export default FamilyPlanning;