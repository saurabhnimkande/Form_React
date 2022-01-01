import "./TableItem.css";
import displayimage from "../images/dummyprofileimage.png";
export const TableItem = ({ data, deleteData }) => {
  return (
    <>
      <div className="TableItemclass">
        <div>
          <img src={data.file || displayimage} alt="displayimage"></img>
        </div>
        <div>
          <p>Name : {data.Name}</p>
          <p>Age : {data.Age}</p>
          <p>Address : {data.Address}</p>
          <p>Department : {data.Department}</p>
          <p>Salary : {data.Salary}</p>
          <p>
            Martial Status :{" "}
            {data?.Single
              ? "Single"
              : data.Married
              ? "Married"
              : "Not Avaliable"}
          </p>
        </div>
        <div>
          <button className="deleteButton" onClick={() => deleteData(data.id)}>
            X
          </button>
        </div>
      </div>
      {/* <tr>
        <td>Name : </td>
        <td>{data?.Name}</td>
      </tr>
      <tr>
        <td>Age : </td>
        <td>{data?.Age}</td>
      </tr>
      <tr>
        <td>Address : </td>
        <td>{data?.Address}</td>
      </tr>
      <tr>
        <td>Address : </td>
        <td>{data?.Address}</td>
      </tr>
      <tr>
        <td>Department : </td>
        <td>{data?.Department}</td>
      </tr>
      <tr>
        <td>Salary : </td>
        <td>{data?.Salary}</td>
      </tr>
      <tr>
        <td>Marital Status : </td>
        <td>
          {data?.Single
            ? "Single"
            : data?.Married
            ? "Married"
            : "Not Avaliable"}
        </td>
      </tr> */}
    </>
  );
};
