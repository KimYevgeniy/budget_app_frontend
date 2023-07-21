import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import OverviewChart from "./Main/OverviewChart";
import Table from "./Main/Table";
import Modal from "./Main/Modal";
import edit from "../assets/pencil1.png";
import trash from "../assets/trash-bin.png";
import { useGlobalContext } from '../context/globalContext';
import Overview from "./Main/Overview";



// const DB_URL = "http://localhost:5000/api/";

function removeLeadingZeros(inputString) {
  return inputString.replace(/^0+/, "");
}

function formattedDate(date) {
  return date.split("T")[0];
}

const Main = () => {
  const { income, setIncome, getIncome, postIncome, deleteIncome } = useGlobalContext();
  const { expense, setExpense, getExpense,  postExpense, deleteExpense } = useGlobalContext();

  const [activeSection, setActiveSection] = useState("Overview");

  // const [income, setIncome] = useState([]);
  const [inputState, setInputState] = useState({
    description: "",
    amount: "",
    category: "",
    date: "",
  });

  useEffect(() => {
    getIncome();
    getExpense();
  }, []);

  return (
    <div className="ml-16 mr-16">
      <div className="text-sm font-medium text-center border-b border-gray-200">
        <ul className="flex flex-wrap -mb-px">
          <li className="mr-2">
            <button
              onClick={() => setActiveSection("Overview")}
              className={
                activeSection === "Overview"
                  ? "inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active"
                  : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300"
              }
            >
              Overview
            </button>
          </li>
          <li className="mr-2">
            <button
              onClick={() => setActiveSection("Income")}
              className={
                activeSection === "Income"
                  ? "inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active"
                  : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300"
              }
              aria-current="page"
            >
              Income
            </button>
          </li>
          <li className="mr-2">
            <button
              onClick={() => setActiveSection("Expenses")}
              className={
                activeSection === "Expenses"
                  ? "inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active"
                  : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300"
              }
            >
              Expenses
            </button>
          </li>
          <li className="mr-2">
            <button
              onClick={() => setActiveSection("Savings")}
              className={
                activeSection === "Savings"
                  ? "inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active"
                  : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300"
              }
            >
              Savings
            </button>
          </li>
        </ul>
      </div>

      {activeSection === "Income" && (
        <div>
        <div className="flex justify-between">
          <h2>Income Data</h2>
          <Modal activeSection={activeSection}/>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
            <thead className="bg-gray-50">
              <tr>
                <th>Description</th>
                <th>Amount</th>
                <th>Category</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 border-t border-gray-100">
              {income.map((data) => (
                <tr key={data._id} className="hover:bg-gray-50">
                  <th className="flex max-w-[8px] gap-3 px-4 py-4 font-normal text-gray-900">
                    {data.description}
                  </th>
                  <td className="max-w-[8px]">{data.amount}</td>
                  <td className="max-w-[12px]">{data.category}</td>
                  <td className="max-w-[12px]">{formattedDate(data.date)}</td>
                  <td className="px-6 py-4 max-w-[12px]">
                    <div className="flex justify-end gap-4">
                      <img
                        onClick={() => deleteIncome(data._id)}
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
      )}
      {activeSection === "Expenses" && (
        <div>
        <div className="flex justify-between">
          <h2>Expense Data</h2>
          <Modal activeSection={activeSection}/>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
            <thead className="bg-gray-50">
              <tr>
                <th>Description</th>
                <th>Amount</th>
                <th>Category</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 border-t border-gray-100">
              {expense.map((data) => (
                <tr key={data._id} className="hover:bg-gray-50">
                  <th className="flex max-w-[8px] gap-3 px-4 py-4 font-normal text-gray-900">
                    {data.description}
                  </th>
                  <td className="max-w-[8px]">{data.amount}</td>
                  <td className="max-w-[12px]">{data.category}</td>
                  <td className="max-w-[12px]">{formattedDate(data.date)}</td>
                  <td className="px-6 py-4 max-w-[12px]">
                    <div className="flex justify-end gap-4">
                      <img
                        onClick={() => deleteExpense(data._id)}
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
      )}
      {activeSection === "Overview" && (
        <Overview />
      )}



      {/* <div>
        <form onSubmit={handleSubmitIncome} className="p-12 gap-4">
          <label className="gap-4">
            <span>Set Income</span>
            <input
              // value={tempIncome}
              onChange={handleChangeIncome}
              type="number"
              pattern="[0-9]*"
              min={1}
              className="bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg"
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <form onSubmit={handleSubmitGoal} className="p-12 gap-4">
          <label>
            <span>Set Goal</span>
            <input
              // value={tempGoal}
              onChange={handleChangeGoal}
              type="number"
              pattern="[0-9]*"
              min={1}
              className="bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg"
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div> */}

      <main className="bg-green-400 m-12 flex rounded shadow-lg gap-12">
        {/* <div>
          <h2>LETS CALCULATE</h2>
          <div>You can spend {income / 2} (50%) on your needs</div>
          <div>You can spend {(income / 10) * 3} (30%) on what you want</div>
          <div>You should put {income / 5} (20%) into your saving accopunt</div>
          <div>
            With your income: {income} you can reach your goal: {goal}, in{" "}
            {goal / (income / 5)} ~ months
          </div>
        </div> */}

        {/* <div className="flex-col space-y-2">
          <div className="flex justify-around">
            <label>Initial Deposit</label>
            <input className="p-2 w-40 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg" />
          </div>
          <div className="flex justify-around">
            <label>Time Period</label>
            <input className="p-2 w-40 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg" />
          </div>
          <div className="flex justify-around">
            <label>Return Rate</label>
            <input className="p-2 w-40 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg" />
          </div>
          <div className="flex justify-around">
            <label>Compound</label>
            <select className="p-2 w-40 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg">
              <option value="Anually">Anually</option>
              <option value="Quarterly">Quarterly</option>
              <option value="Monthly">Monthly</option>
              <option value="daily">Daily</option>
            </select>
          </div>
          <div className="flex justify-around">
            <label>Top up</label>
            <input className="p-2 w-40 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg" />
          </div>
        </div> */}

        {/* <div className="flex items-center justify-center p-12">
          <OverviewChart />
          <div className="h-48 w-48">Chart placeholder</div>
        </div> */}
      </main>
    </div>
  );
};

export default Main;
