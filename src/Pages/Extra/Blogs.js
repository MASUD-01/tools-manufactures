import React from 'react';

const Blogs = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                <p className='card-body pb-0'>Q: How will you improve the performance of a React Application?</p>
                <div className="card-body pb-0">
                    <p>Ans: Keeping component state local where necessary.
                        Memoizing React components to prevent unnecessary re-renders.
                        Code-splitting in React using dynamic import()
                        Windowing or list virtualization in React.
                        Lazy loading images in React.</p>
                </div>
            </div>
            <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                <p className='card-body pb-0'>Q: What are the different ways to manage a state in a React application??</p>
                <div className="card-body pb-0">
                    <p>Ans:1.Local state.
                        2.Global state.
                        3.Server state.
                        4.URL state.</p>
                </div>
            </div>
            <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                <p className='card-body pb-0'>Q: How does prototypical inheritance work?</p>
                <div className="card-body pb-0">
                    <p>Ans:The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the of an object, we use Object. getPrototypeOf and Object.</p>
                </div>
            </div>
            <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                <p className='card-body pb-0'>Q: What is a unit test? Why should write unit tests?</p>
                <div className="card-body pb-0">
                    <p>Ans:Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure..</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;