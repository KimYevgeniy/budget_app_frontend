import React, { useState, useEffect } from "react";

const Table = (props) => {
  const [income, setIncome] = useState([]);

//   useEffect(() => {
//     setIncome(props.income);
//   }, [income]);

  console.log(props);
  console.log(income);
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {income.map((data) => (
            <tr key={data._id}>
              <th>{data.description}</th>
              <td>{data.amount}</td>
              <td>{data.category}</td>
              <td>{data.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
