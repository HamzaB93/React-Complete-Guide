import React from 'react';

const validation = (props) => {
    if(props.textLength <= 5) {
        return(
            <div className="Validation">
                <p>Text too short</p>
            </div>
        )
    }
    else if(props.textLength > 5){
        return(
            <div className="Validation">
                <p>Text long enough</p>
            </div>
        )        
    }    
};

export default validation;