import React from 'react';
import Classes from '../../containers/App.css'

const cockpit = (props) => {
    let buttonClass = Classes.teal;

    if (props.showPersons) {
        buttonClass = Classes.purple;
    }

    // <></> Can be used as wrapper instead of <Aux></Aux> from "../../hoc/Auxiliary.js" when you dont want a useless div as wrapper.
    return (
        <>
            <h1>Hi, i'm Johan's first react app!</h1>
            <button className={buttonClass}
                onClick={props.togglePersons}>Toggle persons</button>
            <label>Clicked: {props.toggleClicked}</label>
            <button onClick={props.login}>Log in</button>
        </>
    );
};

export default cockpit;