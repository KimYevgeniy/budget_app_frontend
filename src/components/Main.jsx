import React, { useState, useEffect } from "react";
import Table from "./Main/Table";
import { useGlobalContext } from "../context/globalContext";
import Overview from "./Main/Overview";
import Savings from "./Main/Savings";

const Main = () => {
  const { getIncome } = useGlobalContext();
  const { getExpense } = useGlobalContext();

  const [activeSection, setActiveSection] = useState("Overview");

  useEffect(() => {
    getIncome();
    getExpense();
  }, []);

  return (
    <div className="ml-16 mr-16 min-h-screen flex flex-col">
      <nav className="text-sm font-medium text-center  border-gray-200">
        <ul className="flex flex-wrap -mb-px">
          <li className="mr-2">
            <button
              onClick={() => setActiveSection("Overview")}
              className={
                activeSection === "Overview"
                  ? "inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active text-lg"
                  : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 text-lg"
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
                  ? "inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active text-lg"
                  : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 text-lg"
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
                  ? "inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active text-lg"
                  : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 text-lg"
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
                  ? "inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active text-lg"
                  : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 text-lg"
              }
            >
              Savings
            </button>
          </li>
        </ul>
      </nav>

      {activeSection === "Income" && <Table activeSection={activeSection} />}
      {activeSection === "Expenses" && <Table activeSection={activeSection} />}
      {activeSection === "Overview" && <Overview />}
      {activeSection === "Savings" && <Savings />}
    </div>
  );
};

export default Main;
