import React  from 'react';
import './Button.css';

const Button = ({ vieillir, num }) => {
    return(
        <button onClick={vieillir}>
            Vieillir de { num } ans
        </button>
    )
}

export default Button