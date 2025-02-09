import Input from './components/Input'
import Todo from './components/Todo'
import { useState } from 'react';

function App() {
  const[apiData,setApiData]=useState([]);
  return (
    <>
      <Input apiData={apiData} setApiData={setApiData} />
      <Todo apiData={apiData} setApiData={setApiData} />
    </>
  )
}

export default App;
