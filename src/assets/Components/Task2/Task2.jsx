import React from 'react'
import Card from './Card'
import Navbar from './Navbar'
import randomData from '../Task2data'
import { useState } from 'react'

const Task2 = () => {
  const [pageNo, setPageNo] = useState(1);
  const handleClick = (data)=>{
    data === "restart" && setPageNo(1);
    data === "Next" && setPageNo(pageNo+1);
    data === "prev" && setPageNo (pageNo-1);

  }




  return (
<>
<Navbar handleClick ={handleClick} pageNo ={pageNo} end={randomData.length}/>
<Card content={randomData[pageNo]}/>
    </>

  )

}

export default Task2
