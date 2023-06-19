import React, {useEffect, useState} from 'react'; 
import '../Global/Global.css'
import useFpProvider from '../FpProvider/useProvider';
import Loader from '../utils/Loader';


const FpDashboardHome = () => {  
    const [data, setData] = useState([])
    const {name, union, setUnion, month, setMonth, loading, setName,unit, setUnit, year, setYear} = useFpProvider();
    let currentYear = (new Date()).getFullYear();
  
    var yearArray= [];
    
    for (let i = 2022; i <= currentYear; i++) {
      yearArray.push(i);    
    }
    

  
    const months = ["All", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const names = ["Jamir Ali" ,"Mokta Akter", "Aksiya Akter", "Trisna Rani Vowmik", "Nazmun Nahar", "Jesmin Begum"];
    const vitiUnits = ["all-units", "2/ka", "2/kha", "3/ka", "3/kha", "3/ga"];
    const kolaUnits = ["all-units", "1/ka", "1/kha"];

    

    useEffect(() => {
        const fetchData = ()=> {
            const link = `https://association-server.onrender.com/filter?name=${name}&unit=${unit}&year=${year}&month=${month}&union=${union}`;
                fetch(link).then(res => res.json())
                .then(data => {
                    setData(data);                                           
                   
                })       
        }
        fetchData();
    },[name, unit, year,month, union])  
        
      if(loading) return <Loader/>;

        const totalPill = data.reduce((total, item) => total+ parseInt(item.pill), 0);
        const totalCondom = data.reduce((total, item) => total+ parseInt(item.condom), 0);
        const totalInjection = data.reduce((total, item) => total+ parseInt(item.injection), 0);
        const totalUid = data.reduce((total, item) => total+ parseInt(item.iud), 0);
        const totalImplant = data.reduce((total, item) => total+ parseInt(item.implant), 0);
        const totalMale = data.reduce((total, item) => total+ parseInt(item.male), 0);
        const totalFemale = data.reduce((total, item) => total+ parseInt(item.female), 0);         
        const totalBirth = data.reduce((total, item) => total+ parseInt(item.birth), 0);
        const totalDeath= data.reduce((total, item) => total+ parseInt(item.death), 0);
        const totalCDeath= data.reduce((total, item) => total+ parseInt(item.cDeath), 0);
        const totalMDeath= data.reduce((total, item) => total+ parseInt(item.mDeath), 0);
        const totalSatellite = data.reduce((total, item) => total+ parseInt(item.satellite), 0);
        const totalEpi = data.reduce((total, item) => total+ parseInt(item.epi), 0);
        const totalPregnant = data.reduce((total, item) => total+ parseInt(item.pregnant), 0);
        const totalNewPregnant = data.reduce((total, item) => total+ parseInt(item.newPregnant), 0);
        const totalNewCouple = data.reduce((total, item) => total+ parseInt(item.newCouple), 0);
        const totalCouple = data.reduce((total, item) => total+ parseInt(item.couple), 0);
         
        
         
          


    return (
        <section>  
            <section className='my-5'>
            <form  className='p-3'>
                <div className="d-flex justify-content-center align-content-center search-input">
                <div className="form-group me-2 ">
                <select                                    
                    onChange={(event)=> {setName(event.target.value)}}               
                     defaultValue={name}         
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
                    onChange={(event)=> {setUnion(event.target.value)}}                
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
                    name='year'
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
            </section>  

                {/* first row */}

        <section className="row container d-home">
            <div className="col-md-3 col-sm-12 mb-3">
              <div className="card bg-info p-2  text-white h-100">
                  <h4>  বড়ি গ্রহণকারী </h4>
                  <h5> {totalPill} জন</h5>
              </div>
            </div>
            <div className="col-md-3 col-sm-12 mb-3">
                <div className="card bg-primary p-2 text-white h-100">
                <h4>কনডম গ্রহণকারী </h4>
                <h5>{totalCondom} জন </h5>     
                </div>
            </div>  
            <div className="col-md-3 col-sm-12 mb-3">
                <div className="card bg-success p-2 text-white h-100">
                    <h4> ইনজেকশন গ্রহণকারী</h4>
                    <h5>{totalInjection} জন </h5>                    
                </div>
            
            </div>
                      
            <div className="col-md-3 col-sm-12 mb-3">
                <div className="card bg-secondary p-2 text-white h-100">
                <h4>আইইউডি গ্রহণকারী </h4>
                    <h5>{totalUid} জন </h5>   
                </div>
            </div>            
            
        </section>

        {/* second row */}
        <section className="row container d-home">
            <div className="col-md-3 col-sm-12 mb-3">
              <div className="card bg-info p-2 text-white h-100">
                    <h4> ইমপ্ল্যান্ট গ্রহণকারী</h4>
                    <h5>{totalImplant} জন </h5>
              </div>
            </div>
            <div className="col-md-3 col-sm-12 mb-3">
                <div className="card bg-success p-2 text-white h-100">
                    <h4> স্থায়ী পদ্ধতি পুরুষ </h4>
                    <h5>{totalMale} জন </h5>     
                </div>
            </div>  
            <div className="col-md-3 col-sm-12 mb-3">
                <div className="card bg-success p-2 text-white h-100">
                    <h4> স্থায়ী পদ্ধতি মহিলা </h4>
                    <h5>{totalFemale}  জন</h5>            
                </div>
            
            </div>
                      
            <div className="col-md-3 col-sm-12 mb-3">
                <div className="card bg-danger p-2 text-white h-100">                   
                    <h4>স্বাভাবিক মৃত্যু  </h4>
                  <h5> {totalDeath} জন</h5>
                </div>
            </div>            
            
        </section>
        {/* third section */}
        <section className="row container d-home">
            <div className="col-md-3 col-sm-12 mb-3">
              <div className="card bg-success p-2 text-white h-100">
                  <h4>নতুন জন্ম  </h4>
                  <h5> {totalBirth} জন</h5>
              </div>
            </div>
            <div className="col-md-3 col-sm-12 mb-3">
                <div className="card bg-danger p-2 text-white h-100">
                <h4> শিশু মৃত্যু সংখ্যা </h4>
                <h5>{totalCDeath} জন</h5>     
                </div>
            </div>  
            <div className="col-md-3 col-sm-12 mb-3">
                <div className="card bg-danger p-2 text-white h-100">
                    <h4> মাতৃ মৃত্যু </h4>
                    <h5>{totalMDeath} জন </h5>                    
                </div>
            
            </div>
                      
            <div className="col-md-3 col-sm-12 mb-3">
                <div className="card bg-secondary p-2 text-white h-100">
                    <h4> মোট গর্ভবতী</h4>
                    <h5>{totalPregnant} জন </h5>
                </div>
            </div>            
                               
        </section>
        {/* four section */}
        <section className="row container d-home">
            <div className="col-md-3 col-sm-12 mb-3">
              <div className="card bg-info p-2 text-white h-100">
                  <h4> স্যাটেলাইট  </h4>
                  <h5> {totalSatellite} টি</h5>
              </div>
            </div>
            <div className="col-md-3 col-sm-12 mb-3">
                <div className="card bg-warning p-2 text-white h-100">
                <h4> ই পি আই </h4>
                <h5>{totalEpi} টি</h5>     
                </div>
            </div>                
            <div className="col-md-3 col-sm-12 mb-3">
                <div className="card bg-success p-2 text-white h-100">
                <h4>নতুন গর্ভবতী</h4>
                <h5>{totalNewPregnant} জন</h5>     
                </div>
            </div>                
            <div className="col-md-3 col-sm-12 mb-3">
                <div className="card bg-primary p-2 text-white h-100">
                <h4> নতুন দম্পতি</h4>
                <h5>{totalNewCouple} জন</h5>     
                </div>
            </div>                
        </section>
        {/* five section */}
        <section className="row container d-home">
            <div className="col-md-3 col-sm-12 mb-3">
              <div className="card bg-warning p-2 text-white h-100">
                  <h4>মোট দম্পতি </h4>
                  <h5> {totalCouple} টি</h5>
              </div>
            </div>
            <div className="col-md-3 col-sm-12 mb-3">
                <div className="card bg-warning p-2 text-white h-100">
                <h4> পরে আপডেট হবে</h4>
                <h5>0 টি</h5>     
                </div>
            </div>                
            <div className="col-md-3 col-sm-12 mb-3">
                <div className="card bg-success p-2 text-white h-100">
                <h4>পরে আপডেট হবে</h4>
                <h5>0 জন</h5>     
                </div>
            </div>                
            <div className="col-md-3 col-sm-12 mb-3">
                <div className="card bg-primary p-2 text-white h-100">
                <h4>পরে আপডেট হবে</h4>
                <h5>0 জন</h5>     
                </div>
            </div>                
        </section>
        </section>
    );
};


export default FpDashboardHome;