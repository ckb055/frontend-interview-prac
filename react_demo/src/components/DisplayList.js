import React from "react";

const DisplayList = (props) => {
    return (
        <div>
            {
                props.words.map((item, idx) => {
                    return (<li key={idx}>{item}</li>)
                })
            }
        </div>
    );
};

export default DisplayList;