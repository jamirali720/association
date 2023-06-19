import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../Global/Global.css";
import { toast } from "react-toastify";

const AddInfo = () => {
  const [union, setUnion] = useState('') 
  const d = new Date();
  const today = d.toLocaleString();

  const {handleSubmit,register,reset,formState: { errors } } = useForm();
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
    formData.append("couple", data.couple);
    formData.append("newCouple", data.newCouple);
    formData.append("newPregnant", data.newPregnant);
    formData.append("pregnant", data.pregnant);
    formData.append("cDeath", data.cDeath);
    formData.append("mDeath", data.mDeath);
    formData.append("satellite", data.satellite);
    formData.append("epi", data.epi);
    formData.append("date", today);
   

    fetch("https://association-server.onrender.com/office", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {       
        if (data.success === true) {
          toast.success("Your information has been saved successfully", {
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

  
  let currentYear = (new Date()).getFullYear();
  var yearArray= [];

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const names = ["Jamir Ali", "Mokta Akter", "Aksiya Akter", "Trisna Rani Vowmik", "Nazmun Nahar", "Jesmin Begum"];
  const vitiUnits = ["all-units", "2/ka", "2/kha", "3/ka", "3/kha", "3/ga"];
  const kolaUnits = ["all-units","1/ka", "1/kha"];

  for (let i = 2022; i <= currentYear; i++) {
    yearArray.push(i);    
  }
  
  
  return (
    <div
      className="main bg-info rounded-3 container-fluid add-info "
      style={{ width: 900, height: "auto", margin: "auto", marginTop: 20 }}
    >
      <div className="form-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            {/* first div */}

            <div className="col-md-6 col-sm-12">
              <h4 className="my-2 text-primary"> এ অংশ জন্ম মৃত্যুর জন্য </h4>
              <div className="form-group w-75 mx-auto mt-4">
                <select                 
                  {...register("name", { required: true })}
                  className="form-control"                  
                >
                  <option value="">Select Name</option>
                  {names.map((name, i) =>(
                     <option key={i} value={name}>{name}</option>
                  ))}
                </select>
                {errors.name && (
                  <span className="text-danger"> আপনার নির্বাচবন করুন </span>
                )}
              </div>
              <div className="form-group w-75 mx-auto mt-4">
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
              {union === "Kolakandi" ? (<div className="form-group  w-75 mx-auto mt-4">
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
              </div> ) : (<div className="form-group  w-75 mx-auto mt-4">
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
              
              
              <div className="form-group w-75 mx-auto mt-4">
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
              <div className="form-group w-75 mx-auto mt-4">
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
              <div className="form-group w-75 mx-auto mt-4">
                <input
                  type="text"
                  {...register("birth", { required: true })}
                  className="form-control"
                  placeholder="জন্ম সংখ্যা লিখুন"
                />
                {errors.birth && (
                  <span className="text-danger"> জন্ম সংখ্যা লিখুন </span>
                )}
              </div>
              <div className="form-group w-75 mx-auto mt-4">
                <input
                  type="text"
                  {...register("death", { required: true })}
                  className="form-control"
                  placeholder="মৃত্যুর সংখ্যা লিখুন"
                />
                {errors.death && (
                  <span className="text-danger"> মৃত্যুর সংখ্যা লিখুন </span>
                )}
              </div>
              <div className="form-group w-75 mx-auto mt-4">
                <input
                  type="text"
                  {...register("edd", { required: true })}
                  className="form-control"
                  placeholder="ই ডি ডি সংখ্যা লিখুন"
                />
                {errors.edd && (
                  <span className="text-danger"> ই ডি ডি সংখ্যা লিখুন </span>
                )}
              </div>
             
              <div className="form-group w-75 mx-auto mt-4">
                <input
                  type="text"
                  {...register("pregnant", { required: true })}
                  className="form-control"
                  placeholder="সর্বমোট গর্ভবতীর সংখ্যা লিখুন"
                />
                {errors.pregnant && (
                  <span className="text-danger"> সর্বমোট গর্ভবতীর সংখ্যা লিখুন</span>
                )}
              </div>
              <div className="form-group w-75 mx-auto mt-4">
                <input
                  type="text"
                  {...register("newPregnant", { required: true })}
                  className="form-control"
                  placeholder="নতুন গর্ভবতীর সংখ্যা লিখুন"
                />
                {errors.newPregnant && (
                  <span className="text-danger">নতুন গর্ভবতীর সংখ্যা লিখুন</span>
                )}
              </div>
              <div className="form-group w-75 mx-auto mt-4">
                <input
                  type="text"
                  {...register("cDeath", { required: true })}
                  className="form-control"
                  placeholder="শিশু মৃত্যুর সংখ্যা লিখুন"
                />
                {errors.cDeath && (
                  <span className="text-danger"> শিশু মৃত্যুর সংখ্যা লিখুন</span>
                )}
              </div>
              <div className="form-group w-75 mx-auto mt-4">
                <input
                  type="text"
                  {...register("mDeath", { required: true })}
                  className="form-control"
                  placeholder="মাতৃ মৃত্যুর সংখ্যা লিখুন"
                />
                {errors.mDeath && (
                  <span className="text-danger">মাতৃ মৃত্যুর সংখ্যা লিখুন </span>
                )}
              </div>
            </div>

            {/* second div */}

            <div className="col-md-6 col-sm-12">
            <h4 className="my-2 text-primary"> এ অংশ নতুন পদ্ধতি গ্রহণকারীর জন্য  </h4>
              <div className="form-group w-75 mx-auto mt-4">
                <input
                  type="text"
                  {...register("pill", { required: true })}
                  className="form-control"
                  placeholder="বড়ি গ্রহণকারীর সংখ্যা লিখুন"
                />
                {errors.pill && (
                  <span className="text-danger">বড়ি গ্রহণকারীর সংখ্যা লিখুন </span>
                )}
              </div>
              <div className="form-group w-75 mx-auto mt-4">
                <input
                  type="birth"
                  {...register("condom", { required: true })}
                  className="form-control"
                  placeholder="কনডম গ্রহণকারীর সংখ্যা লিখুন"
                />
                {errors.condom && (
                  <span className="text-danger">কনডম গ্রহণকারীর সংখ্যা লিখুন </span>
                )}
              </div>
              <div className="form-group w-75 mx-auto mt-4">
                <input
                  type="text"
                  {...register("injection", { required: true })}
                  className="form-control"
                  placeholder="ইনজেকশন গ্রহণকারীর সংখ্যা লিখুন"
                />
                {errors.injection && (
                  <span className="text-danger">ইনজেকশন গ্রহণকারীর সংখ্যা লিখুন</span>
                )}
              </div>
              <div className="form-group w-75 mx-auto mt-4">
                <input
                  type="text"
                  {...register("iud", { required: true })}
                  className="form-control"
                  placeholder="সম্পাদিত আইইউডি সংখ্যা লিখুন"
                />
                {errors.iud && (
                  <span className="text-danger"> সম্পাদিত আইইউডি সংখ্যা লিখুন</span>
                )}
              </div>
              <div className="form-group w-75 mx-auto mt-4">
                <input
                  type="text"
                  {...register("implant", { required: true })}
                  className="form-control"
                  placeholder="সম্পাদিত ইমপ্ল্যান্ট সংখ্যা লিখুন"
                />
                {errors.implant && (
                  <span className="text-danger">সম্পাদিত ইমপ্ল্যান্ট সংখ্যা লিখুন</span>
                )}
              </div>
              <div className="form-group w-75 mx-auto mt-4">
                <input
                  type="text"
                  {...register("male", { required: true })}
                  className="form-control"
                  placeholder="সম্পাদিত পুরুষ সংখ্যা লিখুন"
                />
                {errors.male && (
                  <span className="text-danger">সম্পাদিত পুরুষ সংখ্যা লিখুন</span>
                )}
              </div>
              <div className="form-group w-75 mx-auto mt-4">
                <input
                  type="text"
                  {...register("female", { required: true })}
                  className="form-control"
                  placeholder="সম্পাদিত মহিলা সংখ্যা লিখুন"
                />
                {errors.female && (
                  <span className="text-danger"> সম্পাদিত মহিলা সংখ্যা লিখুন </span>
                )}
              </div>
              <div className="form-group w-75 mx-auto mt-4">
                <input
                  type="text"                 
                  {...register("satellite", { required: true })}
                  className="form-control"
                  placeholder="স্যাটেলাইট সংখ্যা লিখুন"
                />
                {errors.satellite && (
                  <span className="text-danger">স্যাটেলাইট সংখ্যা লিখুন </span>
                )}
              </div>
              <div className="form-group w-75 mx-auto mt-4">
                <input
                  type="text"                 
                  {...register("epi", { required: true })}
                  className="form-control"
                  placeholder="ই পি আই সংখ্যা লিখুন"
                />
                {errors.epi && (
                  <span className="text-danger"> ই পি আই সংখ্যা লিখুন </span>
                )}
              </div> 
              <div className="form-group w-75 mx-auto mt-4">
                <input
                  type="text"
                  {...register("couple", { required: true })}
                  className="form-control"
                  placeholder="সর্বমোট দম্পতি সংখ্যা লিখুন"
                />
                {errors.couple && (
                  <span className="text-danger"> সর্বমোট দম্পতি সংখ্যা লিখুন</span>
                )}
              </div>            
              <div className="form-group w-75 mx-auto mt-4">
                <input
                  type="text"
                  {...register("newCouple", { required: true })}
                  className="form-control"
                  placeholder="নতুন দম্পতি সংখ্যা লিখুন"
                />
                {errors.newCouple && (
                  <span className="text-danger"> নতুন দম্পতি সংখ্যা লিখুন</span>
                )}
              </div>            
              <div className="form-group w-75 mx-auto mt-4">
                <input
                  type="text"
                  {...register("car", { required: true })}
                  className="form-control"
                  placeholder="সি এ আর লিখুন"
                />
                {errors.car && (
                  <span className="text-danger"> সি এ আর লিখুন</span>
                )}
              </div>            

            </div>
          </div>

          <div className="form-group w-75 mx-auto mt-4">
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

export default AddInfo;
