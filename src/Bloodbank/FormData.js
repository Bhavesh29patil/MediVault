
import Form from './Form';
import { useEffect, useState } from 'react';
import Card from './Card';


function FormData(detail) {
  const[details, setDetails] = useState([]);

  const onAddHandler = (detail) => {
    setDetails((prevDetails) => {return [...prevDetails, detail]});
  }
  
  const onIncr = (id) => {
    for(const key in details){
      if(key.id !== id){
        details.splice(key);
      }
    }

    console.log(details)
  }

  return (
    <div className="App">
      <Form onAdd={onAddHandler}/>
      { details.map( (detail)=> {return <Card Data={detail}/>})}
    </div>
  );
}

export default FormData;