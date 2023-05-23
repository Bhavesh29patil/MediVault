import React, { Fragment, useEffect, useState } from "react";
import styles from "./Card.module.css";

const Card = (props)=>{
    const [val, setVal] = useState(props.Data.Units)
    const onIncr = () => {
        setVal(`${eval(val)+1}`)
    }

    const onDecr = () => {
        setVal(`${eval(val)-1}`)
    }
    

    return <Fragment>
        <div className={styles.main}>
            <h1>{props.Data.Blood}</h1>
            <div className={styles.data}>
                <h1>{val} units</h1>
                <button onClick={onIncr}>+</button>
                <button onClick={onDecr}>-</button>
            </div>
        </div>
    </Fragment>
}

export default Card;