import React, { useState} from 'react'
import Semester from './Semester'

function Calculator() {

  //usestate for adding semesters
  const [semestersComponent, setSemestersComponent] = useState(['0'])
  const [semesterObject, setSemesterObject] = useState([{
    key:0,
    gpa: 0,
    updated: false
  }])
  const [cgpa, setCgpa] = useState(NaN);
  //adds semesters 
  const addSemester = () => {
    const val = semestersComponent.length.toString();
    const newObject = {
      key: parseInt(val),
      gpa: 0
    }
    console.log("key of semester added" + val)
    setSemestersComponent([...semestersComponent, val])
    setSemesterObject([...semesterObject, newObject])
  }

  const calculateGpa = () => {
    let gpa = 0;
    let credits= 0;
    semesterObject.map((i,k) => {
      gpa = gpa + i.gpa;
      if (i.updated) {
        credits = credits + 1
      } 
    })
    const finalGpa = Math.round(((gpa / credits) + Number.EPSILON) * 100) /100

    setCgpa(finalGpa)
  }

  const setStateSemesterObject = (updateObject) => {
    const newUpdate = semesterObject
    newUpdate.map((i,k) => {
      if (i.key === updateObject.skey){
        i.gpa = updateObject.gpa
        i.updated = updateObject.updated
      }
    })
    setSemesterObject(newUpdate)
    calculateGpa(semesterObject)
  }

  return (
    <div>
        <h3>GPA Calculator</h3>
        <p>Want to calculate your college course grades? Our easy to use college GPA calculator will help you calculate your GPA and stay on top of your study grades in just minutes! Whether you are taking degree courses online or are on a community college campus, no matter what study grant or scholarship you are aiming for – we’ve got you covered.</p>
        <div className="semester">
            {semestersComponent.map((item, i) => (
              <Semester key={item} skey={item} 
              setStateSemesterObject = {setStateSemesterObject}
              />))}
            <button className="btn" onClick={addSemester}>Add Semester</button>
              
        </div>
        { isNaN(cgpa) ? null :
              <center><div className={'gpa ' + (cgpa >= 2.5 ? 'green' : 'red')}>{cgpa}</div></center>
              }
    </div>
  )
}

export default Calculator