import React from "react";
import { useGlobalContext } from "../../context/globalContext";
import { Chart } from "react-google-charts";

export const optionsIncome = {
  title: "Income overview",
  backgroundColor: "#D7FDEC",
};
export const optionsExpense = {
  title: "Expense overview",
  backgroundColor: "#D7FDEC",
};

const Overview = () => {
  const { totalBalance, totalIncome, totalExpense, income, expense } = useGlobalContext();
  let headerIncome = ["Category", "Amount"];
  let dataIncome = income.map(({ description, amount }) => [description, amount]);
  dataIncome.unshift(headerIncome);
  let headerExpense = ["Category", "Amount"];
  let dataExpense = expense.map(({ category, amount }) => [category, amount]);
  dataExpense.unshift(headerExpense);
  console.log(headerIncome);

  return (
    <div className="flex-col">
      <div className="flex justify-around pt-2 pb-2 m-2 bg-[#B0C6CE] border border-gray-500 rounded-lg shadow-2xl">
        <div className="">
          <div className=""></div>
          <div className="">Summary</div>
          <div className="">{totalBalance()}</div>
          <div className="">TENGE</div>
        </div>

        <div className="">
          <div className=""></div>
          <div className="">Income</div>
          <div className="">{totalIncome()}</div>
          <div className="">TENGE</div>
        </div>

        <div className="">
          <div className=""></div>
          <div className="">Expenses</div>
          <div className="">{totalExpense()}</div>
          <div className="">TENGE</div>
        </div>
      </div>
      <div className="flex grow min-w-0 p-6 m-2 bg-[#B0C6CE] border border-gray-500 rounded-lg shadow-2xl">
        <Chart
          chartType="PieChart"
          data={dataIncome}
          options={optionsIncome}
          width={"100%"}
          height={"700px"}
        />
        <Chart
          chartType="PieChart"
          data={dataExpense}
          options={optionsExpense}
          width={"100%"}
          height={"700px"}
        />
      </div>
    </div>
  );
};

export default Overview;
