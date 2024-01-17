import React from "react";

import useDmProvider from "../../DmProvider/useProvider";



const ExpenseList = () => {
  const { expense } = useDmProvider();
  
  return (
    <main>
      <section className="overflow-scroll">
        <table className="table table-bordered table-hover">
          <thead>
            <tr className="text-primary">
              <th>ব্যয়ের খাত </th>
              <th>ব্যয়ের পরিমান </th>
              <th> ব্যয়ের তারিখ </th>
              <th> ভাউচার নাম্বার</th>
            </tr>
          </thead>
          <tbody>
            {expense &&
              expense.map((item, index) => (
                <tr key={index} className="text-success">
                  <td>{item.name}</td>
                  <td>{item.amount}</td>
                  <td>{item.date} </td>
                  <td>{item.voucher} </td>                 
                </tr>
              ))}
          </tbody>
        </table>
      </section>
    </main>
  );
};




export default ExpenseList;