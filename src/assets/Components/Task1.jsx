import React from "react"
import { useState } from "react"
import Button from "./Task1/Buttons"
import Table from './Task1/Table'
import randomData from './Data1.jsx'

const Task1 = () => {
    const[data, setData] = useState(randomData);
     
  const handleSort = (type) => {
    const sorted = [...data];

    type === "upvotes" && sorted.sort((a, b) => b.upvotes - a.upvotes);
    type === "date" &&
      sorted.sort((a, b) => new Date(a.date) - new Date(b.date));

    setData(sorted);
  };
  return (
    <div>
      <Button handleSort ={handleSort}/>
      <Table data={data}/>
         </div>
  )
}

export default Task1;
