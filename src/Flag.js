import React from 'react';
import './Flag.css';

const Flag = (props) => {
    if (props.flag) return (
        <div>
            <img 
                className="flag"
                src={ props.flag }
                alt="flag" />
        </div>
    );
    else return <div></div>;
};

export default Flag;