import React, { Fragment, useRef } from 'react';
import {v4} from "uuid";
import classes from './Form.module.css'

const Form = (props) => {

    const bloodref = useRef('');
    const unitsref = useRef(null);

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const detail = {
            Blood : bloodref.current.value.toUpperCase(),
            Units : unitsref.current.value.toUpperCase(),
            id: v4(),
        }
        props.onAdd(detail);
        bloodref.current.value = "";
        unitsref.current.value = "";
    }


    return <Fragment>
        <form onSubmit={onSubmitHandler} className={classes.form1}>
            <label htmlFor='boodgrp'>Blood Group: </label>
            <input type='text' htmlFor='bloodgrp' ref={bloodref}></input>
            <label htmlFor='unit'>Number of units: </label>
            <input type='number' htmlFor='unit' ref={unitsref}></input>
            <button type='submit'>submit</button>
        </form>
    </Fragment>
}

export default Form;