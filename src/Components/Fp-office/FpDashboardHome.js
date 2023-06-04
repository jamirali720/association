import React, {useEffect, useState} from 'react'; 
import '../Global/Global.css'


const FpDashboardHome = () => {  
    const [data, setData] = useState([])
    
    const [text, setText] = useState({
        name: "", unit: "", year: "",  month: "", union: "",
    })

    const handleChange = (event) => {
        const name =    event.target.name;
        const value =    event.target.value;
        setText({...text, [name] : value});
       
    }
    let currentYear = (new Date()).getFullYear();
    var yearArray= [];
  
    const months = ["All", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const names = ["All" ,"Mukta Akter", "Aksiya Akter", "Trisna Rani Vowmik", "Nazmun Nahar", "Jesmin Begum"];
    const vitiUnits = ["All", "2/ka", "2/kha", "3/ka", "3/kha", "3/ga"];
    const kolaUnits = ["All","1/ka", "1/kha"];
  
    for (let i = 2022; i <= currentYear; i++) {
      yearArray.push(i);    
    }
   


    useEffect(() => {
        const fetchData = ()=> {
            const link = `https://association-server.onrender.com/filter?name=${text.name}&unit=${text.unit}&year=${text.year}&month=${text.month}&union=${text.union}`;
                fetch(link).then(res => res.json())
                .then(data => {
                    setData(data);                                           
                    console.log(data);
                })       
        }
        fetchData();
    },[text.name, text.unit, text.year, text.month, text.union])  
        
      
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
         
        
         
          


    return (
        <section>  
            <section className='my-5'>
            <form  className='p-3'>
                <div className="d-flex justify-content-center align-content-center search-input">
                <div className="form-group me-2 ">
                <select
                    name="name"
                    value={text.name}
                    onChange={handleChange}              
                                    
                >        
                 <option value="All">Select Name</option>       
                  {names.map((name, i) =>(
                     <option key={i} value={name}>{name}</option>
                  ))}
                </select>
                
              </div>
              <div className="form-group me-2 ">
                <select                  
                   name='union'
                   value={text.union}
                   onChange={handleChange}
                                        
                >                                 
                    <option value="">Select Union</option>
                    <option value="Vitikandi">Vitikandi</option>
                    <option value="Kolakandi">Kolakandi</option>
                </select>
                
              </div>
              {(text.union === "Kolakandi") ? 
              (<div className="form-group me-2 ">
                <select 
                    name="unit"
                    value={text.unit}
                    onChange={handleChange}                  
                >   
                    <option value="All">Select Unit</option>       
                   {kolaUnits.map((unit, i) =>(
                     <option key={i} value={unit}>{unit}</option>
                  ))}
                </select>                
              </div>) :
              (<div className="form-group me-2 ">
                <select   
                    name='unit'    
                    value={text.unit}           
                    onChange={handleChange}                     
                >    
                    <option value="All">Select Unit</option>       
                   {vitiUnits.map((unit, i) =>(
                     <option key={i} value={unit}>{unit}</option>
                  ))}
                </select>
                
              </div>)}
              <div className="form-group me-2 ">
                <select
                    name='year'
                    value={text.year}
                    onChange={handleChange}                  
                >
                    <option value="All">Select Year</option>       
                  {yearArray.map((year, i) =>(
                     <option key={i} value={year}>{year}</option>
                  ))}
                </select>
                
              </div>
              <div className="form-group">
                <select    
                    name='month' 
                    value={text.month}            
                    onChange={handleChange}     
                  
                >
                    <option value="All">Select Month</option>       
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
                <h5>{totalCondom}জন </h5>     
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
                    <h4> গর্ভবতী</h4>
                    <h5>{totalPregnant} জন </h5>
                </div>
            </div>            
                               
        </section>
        {/* four section */}
        <section className="row container d-home">
            <div className="col-md-6 col-sm-12 mb-3">
              <div className="card bg-info p-2 text-white h-100">
                  <h4> স্যাটেলাইট  </h4>
                  <h5> {totalSatellite} টি</h5>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 mb-3">
                <div className="card bg-warning p-2 text-white h-100">
                <h4> ই পি আই </h4>
                <h5>{totalEpi} টি</h5>     
                </div>
            </div>                
        </section>
        </section>
    );
};


export default FpDashboardHome;