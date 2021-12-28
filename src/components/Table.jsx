import {TableItem} from "./TableItem"
export const Table = ({data}) => {
    if(data===null) {
        return null;
    } else {
        return (
            <>
            <table>
                <tbody>
                   <TableItem data={data}/>
                </tbody>
            </table>
            </>
        )
    }
    
}