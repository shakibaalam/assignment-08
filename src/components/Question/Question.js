import React from 'react';

const Question = () => {
    return (
        <div className='my-5'>
            <h2 className='text-center fw-bold my-5'>Question-Answering Part</h2>
            <section className="mb-5">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title mb-4">Ques-1:How React work?</h5>
                                <p className="card-text">
                                    <span className='text-info fw-bold'>React -</span> <br />
                                    React is Javascript Library for building user interface.React is mostly  used because of its single page application (SPA).It keeps a copy and compare actual DOM with virtual Dom.It lists changing information of state and change those part that are changed neither reload full site.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title mb-4">Ques-2:How UseState() Works?</h5>
                                <p className="card-text">
                                    <span className='text-info fw-bold'>UseState()-</span>
                                    <br />
                                    useState is a hook by which we can declare a state in a function component.
                                    We can declare multiple usestate in one function component.Using useState react save state information and create virtual state and compare the orginal state about what data are changed and thus performance increased
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title mb-4">Ques-3:What are the difference between Props vs State?
                                </h5>
                                <p className="card-text">
                                    <span className='text-info fw-bold'>props</span> - <br />
                                    Props are used to pass data from one component to another as an argument.It is used only for read.It is immutable. <br />
                                    <span className='text-info fw-bold'>states</span> - <br />
                                    States are used to hold data about the components.State changes are asynchronous.It is mutable.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Question;