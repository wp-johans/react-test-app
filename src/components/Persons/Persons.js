import React from 'react';
import Person from './Person/Person';

const persons = (props) => {
    return (
        props.persons.map((p, index) =>
            <Person
                key={p.id}
                click={props.clicked.bind(this, index)}
                changed={(event) => props.changed(event, p.id)}
                name={p.name}
                age={p.age}
                hobby={p.hobby} />
        )
    );
}

export default persons;