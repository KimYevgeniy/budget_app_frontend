import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../context/globalContext";
import DatePicker from "react-datepicker";

const Modal = (props) => {
  const { postExpense, postIncome } = useGlobalContext();
  const [showModal, setShowModal] = useState(false);
  const [inputState, setInputState] = useState({
    description: "",
    amount: "",
    category: "",
    date: new Date,
  });
  const handleInput = (name) => (e) => {
    setInputState({ ...inputState, [name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if (props.activeSection === "Income") {
      postIncome(inputState)

    } else {
      postExpense(inputState)
    }
    setInputState({
      description: " ",
      amount: " ",
      category: " ",
      date: new Date,
    });
    toggleModal()
  };

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
          className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
        >
          <div className="bg-gray-50 p-2 rounded gap-20">
            <div className="form-control w-full max-w-xs p-4">
              <label className="label">
                <span className="label-text">Add description</span>
              </label>
              <input
              onChange={handleInput('description')}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />

              <label className="label">
                <span className="label-text">Add amount</span>
              </label>
              <input
              onChange={handleInput('amount')}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                <span className="label-text">Add category</span>
              </label>
              <select onChange={handleInput('category')} className="select select-bordered w-full max-w-xs">
                <option disabled value="Choose category"></option>
                <option>Salary</option>
                <option>Bonus</option>
                <option>Gift</option>
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
              <button
                onClick={handleSubmit}
                className="bg-sky-500 hover:bg-sky-700 rounded w-40 h-8"
              >
                Add {props.activeSection}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
