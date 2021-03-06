import React, { useEffect, useRef } from 'react';

function CanverSvmModel (props) {
    const top = useRef(null);

    useEffect(() => {
        top.current.scrollIntoView();
    })

    return <div className="animated" ref={top}>
        <p id="start-of-scroll">
            Program: Python
        </p>
        <p>
            Libraries: <br/>
            Scikit-learn
        </p>
        <p className="space">
            Utilizing the algorithm, Support Vector Machine, This model takes patients' 
            breast cancer characteristics, such as mean radius, mean texture, mean 
            perimeter, mean area, etc. to determine if the cancer is malignant or 
            benign.
        </p>
        <p className="space"> 
            Outcome: <br/>
            Accuracy: 93.86%
        </p>
        <p>
            Dataset: innate sklearn dataset
        </p>
        <p>
            Reference: techwithtim
        </p>
        <h2 className="space">
            More info:
        </h2>
        <p id="end-of-scroll">
            Code and documentation:
        </p>
        <p>
            <a href="https://github.com/dnjsxo1860/SVM-Cancer-Assessment-Algorithm" target="_blank" rel="noopener noreferrer">In this Github link</a>
        </p>
    </div>
}

export default CanverSvmModel;