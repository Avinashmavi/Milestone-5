import React from 'react'

const Navbar = ( {handleClick,pageNo, end}) => {
    return (
        <div>
            <div className="flex justify-center p-4">
                <button
                    onClick={() => handleClick("restart")}
                    className={ pageNo != 1 ?"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded ml-3" :  "bg-green-300 text-white font-bold py-2 px-4 rounded shadow-md"}>
                    Restart
                </button>
                <button
                    disabled={pageNo === 1}
                    onClick={() => handleClick("prev")}
                    className= { pageNo != 1 ?"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded ml-3 " :  "bg-green-300 text-white font-bold py-2 px-4 rounded shadow-md ml-3"}>
                    prev
                </button>
                <button
                    disabled={pageNo === end - 1}
                    onClick={() => handleClick("Next")}
                    className= { pageNo != end-1  ?"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded ml-3" :  "bg-green-300 text-white font-bold py-2 px-4 rounded shadow-md ml-3"}>
                    Next
                </button>

            </div>
        </div>
    )
}

export default Navbar
