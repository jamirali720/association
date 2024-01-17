import React  from "react";
import useDmProvider from "../../DmProvider/useProvider";
import Loader from "../../utils/Loader";


const DisplayDonars = () => {
  const { donar, loading } = useDmProvider();
 

  if(loading ) return <Loader/>
  
  return (
    <main>
      <section className="overflow-scroll">
        <table className="table table-bordered table-hover">
          <thead>
            <tr className="text-primary">
              <th>Name </th>
              <th>Amount </th>
              <th>Year </th>
              <th>Month </th>
              <th>Date </th>
              <th> address</th>
              <th> phone</th>            
            </tr>
          </thead>
          <tbody>
            {donar &&
              donar.map((item, index) => (
                <tr key={index} className="text-success">
                  <td>{item.name}</td>
                  <td>{item.amount} </td>
                  <td>{item.year} </td>
                  <td>{item.month} </td>
                  <td>{item.date} </td>
                  <td>{item.address} </td>
                  <td>{item.phone} </td>                  
                </tr>
              ))}
          </tbody>
        </table>
      </section>
    </main>
  );
};






export default DisplayDonars;