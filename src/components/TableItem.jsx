export const TableItem =({data}) => {
    return (
        <>
        <tr>
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
            <td>{data?.Single ? "Single" : data?.Married ? "Married" : "Not Avaliable"}</td>
        </tr>
        </>
    )
}