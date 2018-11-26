import React from 'react';

const char = (props) => {

    const style = {
        display: 'inline-block',
        padding: '16px',
        textAllign: 'center',
        margin: '16px',
        border: '1px solid'
      };

    return (
        <div className="Char" style={style} onClick={props.clicked}>
            {props.character}
        </div>
    )

}



export default char;