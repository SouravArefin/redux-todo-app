import React, { useState } from 'react';
import notes from '../assets/notes.png'
import doubleClick from '../assets/double-tick.png'
import plusImage from "../assets/plus.png";
import { useDispatch } from 'react-redux';
import { added, allCompleted, clearCompleted } from '../Redux/Todos/Actions';
import addTodo from '../Redux/Todos/thunk/addTodo';


const Header = () => {
    const dispatch = useDispatch();

    const [input, setInput] = useState("");

    const handleInput = (e) => {
        setInput(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput("");
    };

    const completeHadler = () => {
        dispatch(allCompleted());
    };

    const clearHeandler = () => {
        dispatch(clearCompleted());
    };
    return (
        <div>
            <form
                className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
                onSubmit={submitHandler}
            >
            <img src={notes} className="w-6 h-6" alt="Add todo" />
            <input
                    type="text"
                    placeholder="Type your todo"
                    className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
                    value={input}
                    onChange={handleInput}
                />
            <button
                type="submit"
                    className={`appearance-none w-8 h-8  bg-no-repeat bg-contain`}
                    style={{ backgroundImage: `url(${plusImage})` }}
            ></button>
        </form>

        <ul className="flex justify-between my-4 text-xs text-gray-500">
                <li className="flex space-x-1 cursor-pointer"
                    onClick={completeHadler}
                >
                <img className="w-4 h-4" src={doubleClick} alt="Complete" />
                <span>Complete All Tasks</span>
            </li>
            <li className="cursor-pointer" onClick={clearHeandler}>
                    Clear completed
                </li>
        </ul>
    </div>
    );
};

export default Header;