import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import "../Global/Global.css"
import Loader from '../utils/Loader';


const Update = () => {
    const {id} = useParams();  
    const [loading, setLoading] = useState(false)
    const [union, setUnion] = useState('') 
    const [data, setData] = useState([]) 
    
    useEffect(() => {
      const fetchedData = () => {
        setLoading(true);
        fetch(`https://association-server.onrender.com/selected/${id}`)
          .then((response) => response.json())
          .then(data => setData(data.result));
          setLoading(false);
      }   
      fetchedData(); 
    }, [id])
    
 
    const {handleSubmit,register,reset,formState: { errors }} = useForm();

      const onSubmit = (data) => {
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("union", data.union);
        formData.append("unit", data.unit);   
        formData.append("year", data.year);
        formData.append("month", data.month);    
        formData.append("birth", data.birth);
        formData.append("death", data.death);  
        formData.append("edd", data.edd);   
        formData.append("pill", data.pill);
        formData.append("condom", data.condom);
        formData.append("injection", data.injection);
        formData.append("iud", data.iud);
        formData.append("implant", data.implant);
        formData.append("male", data.male);
        formData.append("female", data.female);
        formData.append("car", data.car);
        formData.append("pregnant", data.pregnant);
        formData.append("cDeath", data.cDeath);
        formData.append("mDeath", data.mDeath);
        formData.append("satellite", data.satellite);
        formData.append("epi", data.epi);
        formData.append("date", data.date);
       
      
        fetch(`https://association-server.onrender.com/update/${id}`, {
          method: "PATCH",
          body: formData,
        })
          .then((response) => response.json())
          .then((data) => {          
            if (data.success === true) {
              toast.success(data.message, {
                position: toast.POSITION.TOP_CENTER,
              });
              reset();              
            } else {
              toast.error("Something went wrong !", {
                position: toast.POSITION.TOP_CENTER,
              });
            }
          })
          .catch((error) => {
            if (error) {
              console.log(error);
            }
          });
      };
    
      const d = new Date();
      const today = d.toLocaleString();
      let currentYear = (new Date()).getFullYear();
      var yearArray= [];
    
      const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      const names = ["Mukta Akter", "Aksiya Akter", "Trisna Rani Vowmik", "Nazmun Nahar", "Jesmin Begum"];
      const vitiUnits = ["All", "2/ka", "2/kha", "3/ka", "3/kha", "3/ga"];
      const kolaUnits = ["All","1/ka", "1/kha"];
    
      for (let i = 2022; i <= currentYear; i++) {
        yearArray.push(i);    
      }

      if(loading) return <Loader/>
      
     

   
    return (
        <div
      className="main bg-info rounded-3 container-fluid fp-update"
      style={{ width: 900, height: "auto", margin: "auto", marginTop: 20 }}
    >
      <div className="form-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            {/* first div */}
            <h4 className="my-2 text-primary"> Update Information</h4>
            <div className="col-md-6 col-sm-12">           
              <div className="form-group d-flex align-items-center w-75 mx-auto mt-4">
                <label className='me-3' htmlFor="name"> Name </label>
                <select                             
                  {...register("name", { required: true })}
                  className="form-control"                  
                >
                  <option value=""> Select Name </option>
                  {names.map((name, i) =>(
                     <option key={i} value={name}>{name}</option>
                  ))}
                </select>
                {errors.name && (
                  <span className="text-danger"> নাম নির্বাচবন করুন </span>
                )}
              </div>
              <div className="form-group d-flex align-items-center w-75 mx-auto mt-4">
              <label className='me-3' htmlFor="union"> Union </label>
                <select                  
                  {...register("union", { required: true })}
                  className="form-control"  
                  onChange={(event) => setUnion(event.target.value)}                
                >        
                <option value="">Select Union</option>           
                    <option value="Vitikandi">Vitikandi</option>
                    <option value="Kolakandi">Kolakandi</option>
                </select>
                {errors.union && (
                  <span className="text-danger"> ইউনিয়ন নির্বাচবন করুন </span>
                )}
              </div>

              {union === "Kolakandi" ? (<div className="form-group d-flex align-items-center w-75 mx-auto mt-4">
              <label className='me-3' htmlFor="unit"> Unit </label>
                <select                                  
                  {...register("unit", { required: true })}
                  className="form-control"                  
                >          
                <option value="">Select Unit</option>         
                   {kolaUnits.map((unit, i) =>(
                     <option key={i} value={unit}>{unit}</option>
                  ))}
                </select>
                {errors.unit && (
                  <span className="text-danger">  ইউনিট নির্বাচবন করুন </span>
                )}
              </div> ) : (<div className="form-group d-flex align-items-center w-75 mx-auto mt-4">
              <label className='me-3' htmlFor="unit"> Unit </label>
                <select                            
                  {...register("unit", { required: true })}
                  className="form-control"                  
                >          
                <option value="">Select Unit</option>         
                   {vitiUnits.map((unit, i) =>(
                     <option key={i} value={unit}>{unit}</option>
                  ))}
                </select>
                {errors.unit && (
                  <span className="text-danger">  ইউনিট নির্বাচবন করুন </span>
                )}
              </div> ) }           

              <div className="form-group d-flex align-items-center w-75 mx-auto mt-4">
              <label className='me-3' htmlFor="year"> Year </label>
                <select
                  type="text"                   
                  {...register("year", { required: true })}
                  className="form-control"                  
                >
                  <option value="">Select Year</option>
                  {yearArray.map((year, i) =>(
                     <option key={i} value={year}>{year}</option>
                  ))}
                </select>
                {errors.year && (
                  <span className="text-danger"> বছর নির্বাচবন করুন </span>
                )}
              </div>
              <div className="form-group d-flex align-items-center w-75 mx-auto mt-4">
              <label className='me-3' htmlFor="month"> month </label>
                <select                               
                  {...register("month", { required: true })}
                  className="form-control"
                  
                >
                  <option value="">Select Month</option>
                  {months.map((month, i) =>(
                     <option key={i} value={month}>{month}</option>
                  ))}
                </select>
                {errors.month && (
                  <span className="text-danger">মাস নির্বাচবন করুন </span>
                )}
              </div>
              <div className="form-group d-flex align-items-center w-75 mx-auto mt-4">
              <label className='me-3' htmlFor="birth"> Birth </label>
                <input
                  type="text"
                  defaultValue={data.birth}
                  {...register("birth", { required: true })}
                  className="form-control"
                  
                />
                {errors.birth && (
                  <span className="text-danger"> জন্ম সংখ্যা লিখুন </span>
                )}
              </div>
              <div className="form-group d-flex align-items-center w-75 mx-auto mt-4">
              <label className='me-3' htmlFor="death"> Death </label>
                <input
                  type="text"
                  defaultValue={data.death}
                  {...register("death", { required: true })}
                  className="form-control"
                  
                />
                {errors.death && (
                  <span className="text-danger"> মৃত্যুর সংখ্যা লিখুন </span>
                )}
              </div>
              <div className="form-group d-flex align-items-center w-75 mx-auto mt-4">
              <label className='me-3' htmlFor="edd"> Edd </label>
                <input
                  type="text"
                  defaultValue={data.edd}
                  {...register("edd", { required: true })}
                  className="form-control"
                 
                />
                {errors.edd && (
                  <span className="text-danger"> ই ডি ডি সংখ্যা লিখুন </span>
                )}
              </div>
             
              <div className="form-group d-flex align-items-center w-75 mx-auto mt-4">
              <label className='me-3' htmlFor="pregnant"> pregnant </label>
                <input
                  type="text"
                  defaultValue={data.pregnant}
                  {...register("pregnant", { required: true })}
                  className="form-control"
                 
                />
                {errors.pregnant && (
                  <span className="text-danger">গর্ভবতীর সংখ্যা লিখুন</span>
                )}
              </div>
              <div className="form-group d-flex align-items-center w-75 mx-auto mt-4">
              <label className='me-3' htmlFor="cDeath"> Child Death </label>
                <input
                  type="text"
                   defaultValue={data.cDeath}
                  {...register("cDeath", { required: true })}
                  className="form-control"
                 
                />
                {errors.cDeath && (
                  <span className="text-danger"> শিশু মৃত্যুর সংখ্যা লিখুন</span>
                )}
              </div>
              <div className="form-group d-flex align-items-center w-75 mx-auto mt-4">
              <label className='me-3' htmlFor="mDeath"> Maternal Death </label>
                <input
                  type="text"
                  defaultValue={data.mDeath}
                  {...register("mDeath", { required: true })}
                  className="form-control"
                  
                />
                {errors.mDeath && (
                  <span className="text-danger">মাতৃ মৃত্যুর সংখ্যা লিখুন </span>
                )}
              </div>
            </div>

            {/* second div */}

            <div className="col-md-6 col-sm-12">
         
              <div className="form-group d-flex align-items-center w-75 mx-auto mt-4">
              <label className='me-3' htmlFor="pill"> Pill </label>
                <input
                  type="text"
                  defaultValue={data.pill}
                  {...register("pill", { required: true })}
                  className="form-control"
                 
                />
                {errors.pill && (
                  <span className="text-danger">বড়ি গ্রহণকারীর সংখ্যা লিখুন </span>
                )}
              </div>
              <div className="form-group d-flex align-items-center w-75 mx-auto mt-4">
              <label className='me-3' htmlFor="condom"> Condom </label>
                <input
                  type="birth"
                  defaultValue={data.condom}
                  {...register("condom", { required: true })}
                  className="form-control"
                  
                />
                {errors.condom && (
                  <span className="text-danger">কনডম গ্রহণকারীর সংখ্যা লিখুন </span>
                )}
              </div>
              <div className="form-group d-flex align-items-center w-75 mx-auto mt-4">
              <label className='me-3' htmlFor="injection"> injection </label>
                <input
                  type="text"
                  defaultValue={data.injection}
                  {...register("injection", { required: true })}
                  className="form-control"
                  
                />
                {errors.injection && (
                  <span className="text-danger">ইনজেকশন গ্রহণকারীর সংখ্যা লিখুন</span>
                )}
              </div>
              <div className="form-group d-flex align-items-center w-75 mx-auto mt-4">
              <label className='me-3' htmlFor="iud"> IUD </label>
                <input
                  type="text"
                  defaultValue={data.iud}
                  {...register("iud", { required: true })}
                  className="form-control"
                 
                />
                {errors.iud && (
                  <span className="text-danger"> সম্পাদিত আইইউডি সংখ্যা লিখুন</span>
                )}
              </div>
              <div className="form-group d-flex align-items-center w-75 mx-auto mt-4">
                <label className='me-3' htmlFor="implant"> implant </label>
                <input
                  type="text"
                  defaultValue={data.implant}
                  {...register("implant", { required: true })}
                  className="form-control"
                  
                />
                {errors.implant && (
                  <span className="text-danger">সম্পাদিত ইমপ্ল্যান্ট সংখ্যা লিখুন</span>
                )}
              </div>
              <div className="form-group d-flex align-items-center w-75 mx-auto mt-4">
              <label className='me-3' htmlFor="male"> Male </label>
                <input
                  type="text"
                  defaultValue={data.male}
                  {...register("male", { required: true })}
                  className="form-control"
                  
                />
                {errors.male && (
                  <span className="text-danger">সম্পাদিত পুরুষ সংখ্যা লিখুন</span>
                )}
              </div>
              <div className="form-group d-flex align-items-center w-75 mx-auto mt-4">
              <label className='me-3' htmlFor="female"> Female </label>
                <input
                  type="text"
                  defaultValue={data.female}
                  {...register("female", { required: true })}
                  className="form-control"
                  
                />
                {errors.female && (
                  <span className="text-danger"> সম্পাদিত মহিলা সংখ্যা লিখুন </span>
                )}
              </div>
              <div className="form-group d-flex align-items-center w-75 mx-auto mt-4">
              <label className='me-3' htmlFor="satellite"> Satellite </label>
                <input
                  type="text" 
                  defaultValue={data.satellite}                
                  {...register("satellite", { required: true })}
                  className="form-control"
                 
                />
                {errors.satellite && (
                  <span className="text-danger">স্যাটেলাইট সংখ্যা লিখুন </span>
                )}
              </div>
              <div className="form-group d-flex align-items-center w-75 mx-auto mt-4">
              <label className='me-3' htmlFor="epi"> EPI </label>
                <input
                  type="text" 
                  defaultValue={data.epi}                
                  {...register("epi", { required: true })}
                  className="form-control"
                  
                />
                {errors.epi && (
                  <span className="text-danger"> ই পি আই সংখ্যা লিখুন </span>
                )}
              </div> 
              <div className="form-group d-flex align-items-center w-75 mx-auto mt-4">
              <label className='me-3' htmlFor="car"> CAR </label>
                <input
                  type="text"
                  defaultValue={data.car}
                  {...register("car", { required: true })}
                  className="form-control"
                 
                />
                {errors.car && (
                  <span className="text-danger"> সি এ আর লিখুন</span>
                )}
              </div>            

              <div className="form-group d-flex align-items-center w-75 mx-auto mt-4">
              <label className='me-3' htmlFor="date"> date </label>
                <input
                  type="text"
                  value={today}
                  {...register("date", { required: true })}
                  className="form-control"
                />
                {errors.date && (
                  <span className="text-danger"> Date is Required </span>
                )}
              </div>
             
            </div>
          </div>

          <div className="form-group d-flex align-items-center w-75 mx-auto mt-4">
            <button type="submit" className="form-control btn btn-success mb-4">
              {" "}
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    );
};

export default Update;