import React from 'react';
import './QuestionAnswer.css'

const QuestionAnswer = () => {
    return (
        <div className='qna-container'>
            <div className='q1-container'>
            <h3>Q1. What is the difference between props and state? </h3>
                <p>Props are variables supplied to a React component by its parent component. State, on the other hand, is a set of variables that the component directly initializes and manages. Props can be used to set the state. Props can be used in the constructor to set the internal state based on a prop value. Without looking at props, a component can also initialize the state. Props are also used to grant access to functions defined in the parent component to child components. This is a smart technique to keep state management in the parent component and eliminate the requirement for children to have their own state.</p>
            </div>
            <div className='q2-container'>
            <h3>Q2. How useState Works?</h3>
                <p>UseState is a Hook that allows functional components to use state variables. We provide it the starting state, and it returns a variable with the current state value, which can be an object, an array, a boolean, or any other type but not necessarily the initial state, as well as a function to change it. With the useState Hook, we may define one state variable at a time. We can either provide the value directly or utilize a function to do so. The initial value will only be set during the first render. In subsequent renderings, the useState Hook's argument will be ignored, and the current value will be acquired if the user has not set it.</p>
            </div>
        </div>
    );
};

export default QuestionAnswer;
