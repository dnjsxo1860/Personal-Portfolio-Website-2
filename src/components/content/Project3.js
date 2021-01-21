import React from 'react';
import { BsChevronDown } from 'react-icons/bs';

function Project3 (props) {
    return <div>
        <div className="content-scroll" style={{textAlign: "center", width:"80%"}}>
            <p>
                Program: Python
            </p>
            <p>
                Libraries: <br/>
                Pandas, Numpy, scikit-learn
            </p>
            <p className="space">
                Utilizing the algorithm, K-Nearest Neighbors, this model takes the overall 
                buying price, maintenance cost, number of doors, capacity of number of 
                persons, size of the luggage boot, and safety level of a specific vehicle, 
                and attempts to predict a given vehicle's "acceptability".
            </p>
            <p>
                Acceptability (cls column in car.data) was determined by "... a simple 
                hierarchical decision model originally developed for the demonstration of 
                DEX, M. Bohanec, V. Rajkovic: Expert system for decision making. 
                (Sistemica 1(1), pp. 145-157, 1990.)."
            </p>
            <p className="space"> 
                Outcome: <br/>
                Accuracy: 94.22%
            </p>
            <p>
                Dataset: <br/>
                car.data, UCI <br/>
                (University of California, Irvine) <br/>
                machine learning repository
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
                <a href="https://github.com/dnjsxo1860/KNN-Vehicle-Evaluation" target="_blank" rel="noopener noreferrer">In this Github link</a>
            </p>
            <p>
                Detailed explanations:<br/>
                KNN.py<br/> 
                (above each line of code)
            </p>
            <p>
                Table of Contents:<br/>
                README.md
            </p>
        </div>
        <a href="#end-of-scroll">
            <div className="content-scroll-arrow" style={{marginRight:"3rem"}}>
                <BsChevronDown/>
            </div>
        </a>
    </div>
}

export default Project3;