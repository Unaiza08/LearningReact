import React from "react";

const Home=()=>{
    return(
        <div className="flex gap-6 my-6">
            <div className="flex-none mx-2 ">
                <label htmlFor="">Enter a number between 3 and 10</label>
                <input className="mx-2 border-solid border-2 border-black"  type="number" min={3} max={10} />
            </div>
       
        <div className="flex-1 mx-2 border-2 border-black border-solid rounded-md w-[calc(100vh - 200px)] min-h-8">

        </div>
           
        </div>
    )
}
export default Home