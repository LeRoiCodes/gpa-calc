import React, { useState, useRef, useEffect } from 'react'
import InputField from './InputField'

function Semester({ skey, setStateSemesterObject}) {

  //useState for adding Inputfields
  const [inputComponent, setInputComponent] = useState(['0']);
  const [inputObject, setInputObject] = useState([{
    key:0,
    grade:0,
    credit:0
  }])
   
  //function for adding input fields
  const addCourse = () => {
    //setting value for key
    let val = inputComponent.length.toString()
    let newObject = {
      key:parseInt(val),
      grade:0,
      credit: 0
    }
    console.log("key of inputField added" + val)
    //adding element to the inputComponent array
    setInputComponent([...inputComponent, val])
    setInputObject([...inputObject, newObject])
    console.log("inputObject", inputObject)
  };

  const calculate = () => {
    let grades = 0
    let credits = 0
    inputObject.map((i,k) => {
      grades = grades + (i.grade * i.credit)
      credits = credits + i.credit
    })
    const semesterScore = Math.round(((grades / credits)+ Number.EPSILON) * 100) / 100

    console.log("semesterScore", semesterScore)
      const updateObject = {
        skey : parseInt(skey),
        gpa : semesterScore,
        updated : true
      }


    console.log("semester update", updateObject)
    setStateSemesterObject(updateObject)

  }

  const setStateParentObject = (updateObject) => {
    const newUpdate = inputObject;
    newUpdate.map((i, k) => {
      if (i.key === updateObject.ikey){
        i[updateObject.name] = parseInt(updateObject.value)
      }
    })
    setInputObject(newUpdate)
    console.log("onchange", inputObject)
    calculate(inputObject)
  }

 

  return (
    <div className="semester-form">
    <h4>Semester {parseInt(skey) + 1}</h4>
      
        {inputComponent.map((item, i) => (
          <InputField
          key= {item}
          ikey={item}
          setStateParentObject= {setStateParentObject}
          />
          ))}
        <button className="btn" onClick={addCourse}>
        Add Course
        </button>
       
    </div>
  )
};

export default Semester;