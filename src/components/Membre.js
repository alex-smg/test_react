import React, { Fragment } from 'react';

const Membre = ({ nom, age, children }) => {
    return(
        <Fragment>
        <h2 style={{backgroundColor: age > 20 ? '#3F3F3F' : 'red' , color: 'white' }}>{nom.toUpperCase()} : {age}</h2>

            { children ? <p>{children}</p> : <Fragment /> }

        </Fragment>
    )
}

export default Membre