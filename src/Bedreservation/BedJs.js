import styles from './BedJs.module.css';
import Bed from './Bed';
import React,{useState} from 'react';

function BedJs() {
  
  const [list, setList] = useState([]);
  const [count,setCount] = useState(1);
  const[add,setAdd] = useState(false);

  const onClickHandler =()=> {
    setCount(count+1);
    setList((prev)=>[...prev, count]);

  }

  const onYes = ()=>{
    setAdd(true);    
  }

  const onNo = () =>{
    setAdd(false);
  }

  return (
    <div >
      Add more beds: <button onClick={onYes}>Yes</button> <button onClick={onNo}>NO</button>
      <br></br>
      {add && <button onClick={onClickHandler}>Add Bed</button>}
      <div className={styles.main}>
        {list.map((cnt)=><Bed cnt={cnt}/>)}
      </div>
    </div>
  );
}

export default BedJs;