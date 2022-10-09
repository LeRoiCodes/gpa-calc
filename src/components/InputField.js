import React, { useState } from 'react'

function InputField({ ikey, setStateParentObject }) {

  const handleChange = (e) => {

    const updateObject = {
      ikey : parseInt(e.target.dataset.id),
      name : e.target.name,
      value: e.target.value
    }
    setStateParentObject(updateObject)
  }

  
  return (
    <div>
        <div className="input-field" >
            <input  type="text" placeholder='e.g Course 1' />
            
            <label htmlFor="grade">Grade: </label>
            <select className="grades"  data-id = {ikey.toString()} name="grade" onChange={handleChange}>
                <option value="0">-</option>
                <option value="5">A</option>
                <option value="4">B</option>
                <option value="3">C</option>
                <option value="2">D</option>
                <option value="1">E</option>
                <option value="0">F</option>
            </select>
            
              <label htmlFor="credit">Credits: </label>
            <input type="number" data-id ={ikey.toString()} className='credits' name="credit" onChange={handleChange}/>
            
            
        </div>
    </div>
  )
}

export default InputField