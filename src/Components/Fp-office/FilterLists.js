import React, { useEffect, useState } from 'react';
import useFpProvider from '../FpProvider/useProvider';
import axiosInstance from '../axios/Axios';

const FilterLists = () => {
    const [data, setData] = useState([])
    const {name, unit, year, month, union} = useFpProvider();


    useEffect(() => {      
        const fetchData = async()=> {
            const link = `https://association-server.onrender.com/filter?name=${name}&unit=${unit}&year=${year}&month=${month}&union=${union}`;
            const {data} = await axiosInstance.get(link); 
            setData(data);            
        }
        fetchData();
       
    },[name, unit, year, month, union])

    return (
        <main>
            <section className='overflow-scroll'>
                <table className='table table-bordered table-hover'>
                    <thead>
                        <tr className='text-primary'>
                            <th>Name </th>
                            <th> Union</th>
                            <th> Unit</th>
                            <th>Year </th>
                            <th>Month </th>
                            <th>Birth </th>
                            <th>Death </th>
                            <th>EDD </th>
                            <th>Pill </th>
                            <th>Condom </th>
                            <th>Injection </th>
                            <th>IUD </th>
                            <th>Implant </th>
                            <th>Male </th>
                            <th>Female </th>
                            <th>Couple</th>
                            <th>CAR </th>
                            <th>Pregnant </th>
                            <th>Child Death </th>
                            <th>Maternal Death </th>
                            <th>Satellite </th>
                            <th>EPI </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data && data.map((item, index) => (
                                <tr key={index} className='text-success'>
                                    <td>{item.name}</td>
                                    <td>{item.union} </td>
                                    <td>{item.unit} </td>
                                    <td>{item.year} </td>
                                    <td>{item.month} </td>
                                    <td>{item.birth} </td>
                                    <td>{item.death} </td>
                                    <td>{item.edd} </td>
                                    <td>{item.pill} </td>
                                    <td>{item.condom} </td>
                                    <td>{item.injection} </td>
                                    <td>{item.iud} </td>
                                    <td>{item.implant} </td>
                                    <td>{item.male} </td>
                                    <td>{item.female} </td>
                                    <td>{item.couple} </td>
                                    <td><strong>{item.car}</strong> %</td>
                                    <td>{item.pregnant} </td>
                                    <td>{item.cDeath} </td>
                                    <td>{item.mDeath} </td>
                                    <td>{item.satellite} </td>
                                    <td>{item.epi} </td>                                    
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </section>
        </main>
    );
};

export default FilterLists;