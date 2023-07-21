import React from "react";
import { useGlobalContext } from "../../context/globalContext";
import { PieChart, Pie, Sector, Cell } from "recharts";
import { Chart } from "react-google-charts";

export const options = {
  title: "Balance overview",
};

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
];

const Overview = () => {
  const { totalBalance, totalIncome, totalExpense, income, expense } =
    useGlobalContext();
  let header = ["Category", "Amount"];
  let data = income.map(({ category, amount }) => [category, amount]);
  data.unshift(header);

  return (
    <>
      <div className="flex justify-around shadow">
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
      <div>
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={"100%"}
          height={"400px"}
        />
        {/* <PieChart width={800} height={400}>
          <Pie
            data={data}
            cx={120}
            cy={200}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="amount"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart> */}
      </div>
    </>
  );
};

export default Overview;
