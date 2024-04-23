import './App.css'
import { useState } from 'react'
import Task1 from './assets/Components/Task1'
import Task2 from './assets/Components/Task2/Task2';



function App() {
  const [choose, setChoose] = useState();


  const handleSelect = (task) => {
    setChoose(task);
  };
  return (
    <>

      <div className="w-100 p-4 ">
        <ul className="flex flex-row justify-center items-center">
          <li>
            <button onClick={() => { handleSelect(1) }}
              className={choose !== 1 ?  "bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" :"bg-green-300 text-white font-bold py-2 px-4 border border-blue-200 rounded"}>
              Task 1
            </button>

          </li>
          <li className="ml-4">
            <button onClick={() => { handleSelect(2) }}
              className={choose === 1 ?  "bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" : "bg-green-300 text-white font-bold py-2 px-4 border border-blue-200 rounded" }>
              Task 2
            </button>
          </li>
        </ul>


      </div>
      <hr className="mt-10" />
      {choose === 1 && <Task1 />}
      {choose === 2 && <Task2 />}
    </>
  )
}

export default App
