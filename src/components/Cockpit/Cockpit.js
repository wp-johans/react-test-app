import React from 'react';
import Classes from '../../containers/App.css'

const cockpit = (props) => {
    let buttonClass = Classes.teal;

    if (props.showPersons) {
        buttonClass = Classes.purple;
    }

    return (
        <div>
            <h1>Hi, i'm Johan's first react app!</h1>
            <button className={buttonClass}
                onClick={props.togglePersons}>Toggle persons</button>
        </div>
    );
};

export default cockpit;