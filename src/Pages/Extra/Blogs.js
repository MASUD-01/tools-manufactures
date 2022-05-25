import React from 'react';

const Blogs = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <p className='card-body pb-0'>Q: How will you improve the performance of a React Application?</p>
                <div className="card-body pb-0">
                    <p>Ans: Keeping component state local where necessary.
                        Memoizing React components to prevent unnecessary re-renders.
                        Code-splitting in React using dynamic import()
                        Windowing or list virtualization in React.
                        Lazy loading images in React.</p>
                </div>
            </div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <p className='card-body pb-0'>Q: What are the different ways to manage a state in a React application??</p>
                <div className="card-body pb-0">
                    <p>Ans:1.Local state.
                        2.Global state.
                        3.Server state.
                        4.URL state.</p>
                </div>
            </div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <p className='card-body pb-0'>Q: Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</p>
                <div className="card-body pb-0">
                    <p>Ans:useState use in react to manage state. when we need to store any data to stay. we use it.products = [...] copy data taht already exist setproducts. when new data is entered it store setproducts.then that use through products. </p>
                </div>
            </div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <p className='card-body pb-0'>Q: What is a unit test? Why should write unit tests?</p>
                <div className="card-body pb-0">
                    <p>Ans:Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure..</p>
                </div>
            </div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <p className='card-body pb-0'>Q: What is a unit test? Why should write unit tests?</p>
                <div className="card-body pb-0">
                    <p>Ans:Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure..</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;