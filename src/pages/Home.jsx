import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
    <div className="flex gap-6 my-6">
      <div className=" flex mx-2 gap-4 items-center">
        <label htmlFor="">Enter a number between 3 and 10</label>
        <input
          className="mx-2 border-solid border-2 border-black"
          type="number"
          min={3}
          max={10}
        />
      </div>
      <div className="flex-1 mx-2 border-2 border-black border-solid rounded-md w-[calc(100vh - 200px)] min-h-8"></div>
    </div>
    <Link className="focus:bg-emerald-900" to="/task2"><li className="m-5 text-2xl">Task2</li></Link>

    </>
  );
};
export default Home;
