import React, { useEffect } from 'react';
import FpNavbar from './FpNavbar';
import useFpProvider from '../FpProvider/useProvider';
import FilterLists from './FilterLists';

const FamilyPlanning = () => {
  const {union, setUnion, setMonth, loading, setAllInfo, setLoading, setName, setUnit, setYear} = useFpProvider();
 

  useEffect(() => {
      const fetchData = ()=> {
                  setLoading(true);
                  fetch("http://localhost:5500/office")
                  .then(res => res.json())
                  .then(data => {
                    setAllInfo(data)
                    setLoading(false);
                  })      
      }
      
      fetchData();
  },[setAllInfo, setLoading])
 
  if(loading) return <div className="spinner-border text-success"></div>

  let currentYear = (new Date()).getFullYear();
  var yearArray= [];

  const months = ["All", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const names = ["All", "Mukta Akter", "Aksiya Akter", "Trisna Rani Vowmik", "Nazmun Nahar", "Jesmin Begum"];
  const vitiUnits = ["All", "2/ka", "2/kha", "3/ka", "3/kha", "3/ga"];
  const kolaUnits = ["All","1/ka", "1/kha"];

  for (let i = 2022; i <= currentYear; i++) {
    yearArray.push(i);    
  }
  
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
                                    
                >
                  <option value="">Select Name</option>
                  {names.map((name, i) =>(
                     <option key={i} value={name}>{name}</option>
                  ))}
                </select>
                
              </div>
              <div className="form-group me-2 ">
                <select                  
                   onChange={(event)=> {setUnion(event.target.value)}}                  
                >        
                    <option value="">Select Union</option>                
                    <option value="Vitikandi">Vitikandi</option>
                    <option value="Kolakandi">Kolakandi</option>
                </select>
                
              </div>
              {(union === "Kolakandi") ? 
              (<div className="form-group me-2 ">
                <select                  
                   onChange={(event)=> {setUnit(event.target.value)}}                
                >          
                <option value="">Select Unit</option>         
                   {kolaUnits.map((unit, i) =>(
                     <option key={i} value={unit}>{unit}</option>
                  ))}
                </select>                
              </div>) :
              (<div className="form-group me-2 ">
                <select                  
                   onChange={(event)=> {setUnit(event.target.value)}}                
                >          
                <option value="">Select Unit</option>         
                   {vitiUnits.map((unit, i) =>(
                     <option key={i} value={unit}>{unit}</option>
                  ))}
                </select>
                
              </div>)}
              <div className="form-group me-2 ">
                <select
                   onChange={(event)=> {setYear(event.target.value)}}              
                >
                  <option value="">Select Year</option>
                  {yearArray.map((year, i) =>(
                     <option key={i} value={year}>{year}</option>
                  ))}
                </select>
                
              </div>
              <div className="form-group">
                <select                 
                   onChange={(event)=> {setMonth(event.target.value)}}
                  
                >
                  <option value="">Select Month</option>
                  {months.map((month, i) =>(
                     <option key={i} value={month}>{month}</option>
                  ))}
                </select>
                
              </div>
                </div>
              </form>
            </div>
          </section>
          <hr />
          <section>
              <FilterLists/>
          </section>
        </main>
    );
};

export default FamilyPlanning;