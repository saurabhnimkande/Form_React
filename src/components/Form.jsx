import { useEffect, useState } from "react";
import displayimage from "../images/dummyprofileimage.png";

export const Form = ({ GetFormData }) => {
  useEffect(() => {
    fetch("http://localhost:3001/forms")
      .then((e) => e.json())
      .then((e) => GetFormData(e));
  }, []);
  const [form, setForm] = useState({
    Name: "",
    Age: "",
    Address: "",
    Options: "",
    Single: "",
    Married: "",
    file: "",
    Department: "",
    Salary: "",
  });
  const handleChange = (e) => {
    const { value, name } = e.target;
    setForm({
      ...form,
      [name]: e.target.type === "checkbox" ? e.target.checked : value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/forms", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    }).then(() => fetchdata());
  };

  const fetchdata = () => {
    fetch("http://localhost:3001/forms")
      .then((e) => e.json())
      .then((e) => GetFormData(e));
  };

  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setForm({ ...form, file: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const salarySort = (val) => {
    fetch(`http://localhost:3001/forms?_sort=Salary&_order=${val}`)
      .then((e) => e.json())
      .then((e) => GetFormData(e));
  };
  return (
    <>
      <img
        src={form.file || displayimage}
        alt="displayimage"
        style={{ width: "200px", borderRadius: "50%" }}
      ></img>
      <form onSubmit={handleSubmit}>
        <label>Name : </label>
        <input
          onChange={handleChange}
          type="text"
          name="Name"
          placeholder="Enter Name"
        ></input>
        <br />
        <label>Age : </label>
        <input
          onChange={handleChange}
          type="text"
          name="Age"
          placeholder="Enter Age"
        ></input>
        <br />
        <label>Address : </label>
        <input
          onChange={handleChange}
          type="text"
          name="Address"
          placeholder="Enter Address"
        ></input>
        <br />
        <label>Department : </label>
        <select onChange={handleChange} name="Department">
          <option>Teaching</option>
          <option default>Student</option>
        </select>
        <br />
        <label>Salary : </label>
        <input
          onChange={handleChange}
          type="text"
          name="Salary"
          placeholder="Enter Salary"
        ></input>
        <br />
        <label>Marital Status</label>
        <br />
        <input onChange={handleChange} type="checkbox" name="Single"></input>
        <label>Single</label>
        <input onChange={handleChange} type="checkbox" name="Married"></input>
        <label>Married</label>
        <br />
        <input onChange={imageHandler} type="file" name="ProfileImage"></input>
        <br />
        <input type="submit"></input>
      </form>
      <button onClick={() => salarySort("asc")}>Salary Low to High</button>
      <button onClick={() => salarySort("desc")}>Salary High to Low</button>
    </>
  );
};
