import { useRef, useState } from 'react';
import './App.css';
import {Form} from './components/Form'
import {Table} from './components/Table'
function App() {
  const [data,useData]=useState(null)
  const GetFormData = (recevedData) => {
    useData(recevedData)
  }
  return (
    <div className="App">
      <Form GetFormData={GetFormData}/>
      <Table data={data}/>
    </div>
  );
}

export default App;
