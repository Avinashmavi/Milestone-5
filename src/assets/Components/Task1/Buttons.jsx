import React, { useState } from "react";

const Button = ({ handleSort }) => {
const [click , setClick] = useState(true)


    return (
        <>


            <div className="">
                <ul className=" mt-7 flex justify-center flex-row">
                    <h3 className="mt-2 font-bold">Sort by :</h3>

                    <li>
                        {click && <button onClick={() => {handleSort("upvotes"); setClick(false)}} className="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded ml-10 px-6">
                            Most Upvoted
                        </button>}
                    </li>
                    <li>
                        {!click && <button onClick={() => {handleSort("date"); setClick(true)}} className="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded ml-10 px-6">
                            Most Recent
                        </button>}
                    </li>
                </ul>
            </div>

        </>


    )
}


export default Button;
