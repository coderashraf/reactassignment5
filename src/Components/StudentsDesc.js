import React, { useContext, useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import { useNavigate, useParams } from "react-router-dom";
import {MyContext} from "./StudentDataCompo"

export const StudentsDesc = () => {
  const navigate=useNavigate()
  const [data,setData]=useContext(MyContext)
  let {stuId} =useParams()
  const [formData,setformData]=useState({id:"",name:"",age:"",course:"",batch:""})

  useEffect(() => {
    if(stuId!==null){
      data.map(item=>(
        item.id===stuId?
        setformData({name:item.name,age:item.age,course:item.course,batch:item.batch}):item
      ))
    }
  }, [data,stuId])
  

  const handleChange=(e)=>{
    setformData({...formData,[e.target.name]:e.target.value})
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(stuId===undefined){
      const tempArr={...formData,id:(new Date().getTime()).toString()}
      setData([...data,tempArr])
    }
    else{
      setData((prevState)=>prevState.map((item)=>item.id===stuId?{
        id:stuId,name:formData.name,age:formData.age,course:formData.course,batch:formData.batch
      }:item))
    }
    navigate("/students")
  }

  return (
    <div id="studentsDesc">
      <form onSubmit={handleSubmit}>
        <div className="flex input-container">
          <TextField type="text" name="name" label="Name" variant="outlined" value={formData.name} onChange={handleChange} required/>
          <TextField type="number" name="age" label="Age" variant="outlined" value={formData.age} onChange={handleChange} required/>
        </div>
        <div className="flex input-container">
          <TextField type="text" name="course" label="Course" variant="outlined" value={formData.course} onChange={handleChange} required/>
          <TextField type="text" name="batch" label="Batch" variant="outlined"value={formData.batch} onChange={handleChange} required/>
      </div>
      <button className="cancel-button" onClick={()=>navigate("/students")}>Cancel</button>
      {stuId===undefined? <button>Submit</button>: <button>Update</button>}
      </form>
    </div>
  )
}
