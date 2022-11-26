import React, { useEffect, useState } from 'react'
import './Gender.css'
function Gender() {

  const [isMan , setIsMan] = useState(true)

  //남성을 클릭한다면 ?
  const handleClickMan = () => {
    setIsMan(true)
  }
  //여성을 클릭한다면 ? 
  const handleClickWoman = () => {
    setIsMan(false)
  }

  return (
    <div className='info_Gender'>
      <div>성별</div>
      <div className='select_Gender'>
        <button className={isMan && 'selected_Gender'} onClick={() => handleClickMan()}>남성</button>
        <button className={!isMan && 'selected_Gender'} onClick={() => handleClickWoman()}>여성</button>
      </div>
    </div>
  )
}

export default Gender