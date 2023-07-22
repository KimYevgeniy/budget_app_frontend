import React, { useState } from "react";
import { useGlobalContext } from "../../context/globalContext";
import DatePicker from "react-datepicker";

const Modal = (props) => {
  const { postExpense, postIncome } = useGlobalContext();
  const [showModal, setShowModal] = useState(false);
  const [inputState, setInputState] = useState({
    description: "",
    amount: "",
    category: "",
    date: new Date(),
  });
  const [error, setError] = useState("");

  const handleInput = (name) => (e) => {
    setInputState({ ...inputState, [name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputState || !inputState.amount || !inputState.category) {
      setError("All fields is required");
    } else {
      setError("");
    }
    props.activeSection === "Income"
      ? postIncome(inputState)
      : postExpense(inputState);
    setInputState({
      description: "",
      amount: "",
      category: "",
      date: new Date(),
    });
    error === "All fields is required"
      ? toast("All fields is required!")
      : toggleModal();
  };
  console.log(error);
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const closeModal = (e) => {
    if (e.target.id === "container") setShowModal(false);
  };
  return (
    <>
      <button
        onClick={toggleModal}
        className="bg-sky-500 hover:bg-sky-700 rounded w-40 h-8"
      >
        Add {props.activeSection}
      </button>

      {showModal && (
        <div
          onClick={closeModal}
          id="container"
          className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center "
        >
          <div className="bg-[#B0C6CE] p-2 rounded gap-20">
            <div className="form-control w-full max-w-xs p-4">
              <label className="label">
                <span className="label-text">Add description</span>
              </label>
              <input
                onChange={handleInput("description")}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />

              <label className="label">
                <span className="label-text">Add amount</span>
              </label>
              <input
                onChange={handleInput("amount")}
                type="number"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                <span className="label-text">Add category</span>
              </label>
              <select
                onChange={handleInput("category")}
                defaultValue={"CHOOSE"}
                className="select select-bordered w-full max-w-xs bg-[#D7FDEC]"
              >
                <option value="CHOOSE" disabled>
                  Choose option
                </option>
                <option>
                  {props.activeSection === "Income" ? "Salary" : "Food"}
                </option>
                <option>
                  {props.activeSection === "Income" ? "Bonus" : "Rent"}
                </option>
                <option>
                  {props.activeSection === "Income" ? "Gift" : "Entertainment"}
                </option>
                <option>Other</option>
              </select>
              <div className="input-control">
                <div className="relative max-w-sm">
                  {/* <DatePicker className="m-20"
                      id="date"
                      placeholderText="Enter A Date"
                      selected={inputState.date}
                      dateFormat="dd/MM/yyyy"
                      onChange={(date) => {
                        setInputState({ ...inputState, date: inputState.date });
                      }}
                    /> */}
                </div>
              </div>
              <div className="pt-4 pl-4 pr-4">
                <button
                  onClick={handleSubmit}
                  className="bg-sky-500 hover:bg-sky-700 rounded w-40 h-8"
                >
                  Add {props.activeSection}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
