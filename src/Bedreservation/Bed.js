import styles from "./Bed.module.css";
import React,{useEffect, useState} from "react";

const Bed = (props) => {

    const [isValid, setIsValid] = useState(true);

    const onBookHandler = ()=>{
        setIsValid(false);
    }

    const undo = () => {
        setIsValid(true);
    }

    return (
        <>
           <div className={styles.sup}>
                <div className={`${isValid ? styles.valid : styles.invalid}`}> 
                    {props.cnt}
                </div>
                <button onClick={onBookHandler}>Book</button>
                <button onClick={undo}>undo</button>
            </div>
        </>
    )

}

export default Bed;