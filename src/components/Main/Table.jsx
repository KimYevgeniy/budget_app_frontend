import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../../context/globalContext";
import Modal from "./Modal";
import trash from "../../assets/trash-bin.png";

function formattedDate(date) {
  return date.split("T")[0];
}

const Table = (props) => {
  const { income, deleteIncome } = useGlobalContext();
  const { expense, deleteExpense } = useGlobalContext();
  const { activeSection } = props;

  let data;
  activeSection === "Income" ? (data = income) : (data = expense);

  return (
    <div className="grow min-w-0 p-6 m-2 bg-[#B0C6CE] border border-gray-500 rounded-lg shadow-2xl">
      <div className="flex justify-between items-center pb-2 pl-2">
        <h2 className="text-xl">
          {activeSection === "Income" ? "Income Data" : "Expense Data"}
        </h2>
        <Modal activeSection={activeSection} />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full rounded bg-[#D7FDEC] text-left">
          <thead className="">
            <tr>
              <th className="pl-2">Description</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#938BA1] border-t border-[#938BA1]">
            {data.map((data) => (
              <tr key={data._id} className="hover:bg-[#B2E4DB]">
                <th className="px-4 py-4 font-normal text-gray-900">
                  {data.description}
                </th>
                <td className="max-w-[8px]">{data.amount}</td>
                <td className="max-w-[12px]">{data.category}</td>
                <td className="max-w-[12px]">{formattedDate(data.date)}</td>
                <td className="px-6 py-4 max-w-[12px]">
                  <div className="flex justify-end gap-4">
                    <img
                      onClick={() =>
                        activeSection === "Income"
                          ? deleteIncome(data._id)
                          : deleteExpense(data._id)
                      }
                      src={trash}
                      alt="Trash"
                      className="h-6 w-6"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
