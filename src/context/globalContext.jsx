import React, { useContext, useState } from "react";
import axios from "axios";

const DB_URL = "http://localhost:5000/api/";

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const [income, setIncome] = useState([]);
  const [expense, setExpense] = useState([]);

  const getIncome = async () => {
    const res = await axios.get(`${DB_URL}getIncome`);
    setIncome(res.data);
  };

  const postIncome = async (income) => {
    const res = await axios
      .post(`${DB_URL}postIncome`, income)
      .catch((err) => {
        console.log(err.response.data.message);
      });
    getIncome();
  };

  const deleteIncome = async (id) => {
    const res = await axios.delete(`${DB_URL}deleteIncome/${id}`);
    getIncome();
  };

  const totalIncome = () => {
    let totalIncome = 0;
    income.forEach((income) => {
      totalIncome = totalIncome + income.amount;
    });
    return totalIncome;
  };

  const getExpense = async () => {
    const response = await axios.get(`${DB_URL}getExpense`);
    setExpense(response.data);
  };

  const postExpense = async (expense) => {
    const res = await axios
      .post(`${DB_URL}postExpense`, expense)
      .catch((err) => {
        console.log(err.response.data.message);
      });
    getExpense();
  };

  const deleteExpense = async (id) => {
    const res = await axios.delete(`${DB_URL}deleteExpense/${id}`);
    getExpense();
  };

  const totalExpense = () => {
    let totalIncome = 0;
    expense.forEach((income) => {
      totalIncome = totalIncome + income.amount;
    });
    return totalIncome;
  };

  const totalBalance = () => {
    return totalIncome() - totalExpense();
  };

  //   const transactionHistory = () => {
  //     const history = [...incomes, ...expenses];
  //     history.sort((a, b) => {
  //       return new Date(b.createdAt) - new Date(a.createdAt);
  //     });

  //     return history.slice(0, 3);
  //   };

  return (
    <GlobalContext.Provider
      value={{
        postIncome,
        getIncome,
        income,
        deleteIncome,
        expense,
        totalIncome,
        postExpense,
        getExpense,
        deleteExpense,
        totalExpense,
        totalBalance,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
