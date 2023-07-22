import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";

export const options = {
  title: "Balance Change",
  curveType: "function",
  legend: { position: "right" },
  backgroundColor: "#D7FDEC",
};

function calculateFutureValue(
  principal,
  interestRate,
  compoundingFrequency,
  timeInYears
) {
  const compoundFactor = Math.pow(
    1 + interestRate / compoundingFrequency,
    compoundingFrequency * timeInYears
  );
  const futureValue = principal * compoundFactor;
  return futureValue;
}

const Savings = () => {
  const [inputState, setInputState] = useState({
    amount: 0,
    years: 0,
    interest: 0,
    compound: 0,
    topup: 0,
  });
  const [data, setData] = useState([
    ["Year", "Initial amount", "Interest", "Final Balance"],
    ["2023", 0, 0, 0],
  ]);

  function generateData(input) {
    const { amount, years, interest, compound, topup } = input;
    const properInterest = interest / 100;

    let data = [["Year", "Initial amount", "Interest", "Final Balance"]];
    const fullDate = new Date();
    const date = fullDate.getFullYear();
    const period = date + years;
    let initialAndInterest = amount;
    for (let i = date; i <= period; i++) {
      const futureValue = calculateFutureValue(initialAndInterest, properInterest, compound, 1);
      initialAndInterest = futureValue;
      data.push([i.toString(), amount, futureValue - amount, futureValue]);
    }
    return data;
  }

  const handleInput = (name) => (e) => {
    setInputState({ ...inputState, [name]: parseInt(e.target.value) });
  };

  const handleSubmit = (e) => {
    setData(generateData(inputState));
    e.preventDefault();
    setInputState({
      amount: "Type here",
      years: "Type here",
      interest: "Type here",
      compound: 0,
      topup: "Type here",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex">
        <div className="flex-col items-center justify-center p-6 m-2 bg-[#B0C6CE] border border-gray-500 rounded-lg shadow-2xl">
          <div>
            <p>Initial amount</p>
            <input
              onChange={handleInput("amount")}
              type="number"
              placeholder="Enter amount"
            />
          </div>
          <div>
            <p>Years</p>
            <input
              onChange={handleInput("years")}
              type="number"
              placeholder="Enter amount"
            />
          </div>
          <div>
            <p>Interest</p>
            <input
              onChange={handleInput("interest")}
              type="number"
              placeholder="Enter amount"
            />
          </div>
          <div>
            <p>Compound</p>
            <select
              onChange={handleInput("compound")}
              defaultValue={"CHOOSE"}
              className="w-180 bg-[#D7FDEC]"
            >
              <option value="CHOOSE" disabled>
                Choose option
              </option>
              <option value="1">Anually</option>
              <option value="2">Semianually</option>
              <option value="4">Quaterly</option>
              <option value="12">Monthly</option>
            </select>
          </div>
          <div>
            <p>Top up</p>
            <input
              onChange={handleInput("topup")}
              type="number"
              placeholder="Enter amount"
            />
          </div>
          <button onClick={handleSubmit} className="btn m-8">
            CALCULATE
          </button>
        </div>
        <div className="grow min-w-0 p-6 m-2 bg-[#B0C6CE] border border-gray-500 rounded-lg shadow-2xl">
          <Chart
            chartType="LineChart"
            width="100%"
            height="400px"
            border-radius="30px"
            data={data}
            options={options}
          />
        </div>
      </div>
      <div className="flex grow items-center justify-center min-w-0 p-6 m-2 bg-[#B0C6CE] border border-gray-500 rounded-lg shadow-2xl">VERY BIG PLACEHOLDER FOR GOALS</div>
    </div>
  );
};

export default Savings;
