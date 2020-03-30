import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props)=>(
    <div>
        <h1>
            This Component.
        </h1>
        <p>
           the details of the component : {props.info}.
        </p>
    </div>
);

const requiredAuthemtication = ((WrappedComponent) => {


  return  (props)=>(

        <div>
            {props.isAuthenticated ? <WrappedComponent {...props}/> : <h4>Kindly login to access this page.</h4> }

        </div>
    )

});
const IsAuthenticatedInfo = requiredAuthemtication(Info);

ReactDOM.render(<IsAuthenticatedInfo isAuthenticated={false}  info={"This is the info"} /> , document.getElementById("app"));