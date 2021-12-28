import { useState } from "react"

export const Form = ({GetFormData}) => {
    const [form,setForm]=useState({
        Name:"",
        Age:"",
        Address:"",
        Options:"",
        Single:"",
        Married:"",
        file:"",
        Department:"",
        Salary:""
    });
    const handleChange = (e) => {
        const {value,name}=e.target;
        setForm({
            ...form,
            [name]:e.target.type==="checkbox" ? e.target.checked : value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        GetFormData(form)
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
            <label>Name : </label>
            <input onChange={handleChange} type="text" name="Name" placeholder="Enter Name"></input>
            <br/>
            <label>Age : </label>
            <input onChange={handleChange} type="text" name="Age" placeholder="Enter Age"></input>
            <br/>
            <label>Address : </label>
            <input onChange={handleChange} type="text" name="Address" placeholder="Enter Address"></input>
            <br/>
            <label>Department : </label>
            <select onChange={handleChange} name="Department">
                <option>Teaching</option>
                <option default>Student</option>
            </select>
            <br/>
            <label>Salary : </label>
            <input onChange={handleChange} type="text" name="Salary" placeholder="Enter Salary"></input>
            <br/>
            <label>Marital Status</label>
            <br/>
            <input onChange={handleChange} type="checkbox" name="Single"></input>
            <label>Single</label>
            <input onChange={handleChange} type="checkbox" name="Married"></input>
            <label>Married</label>
            <br/>
            <input onChange={handleChange} type="file" name="ProfileImage"></input>
            <br/>
            <input type="submit"></input>
        </form>
        </>
    )
}