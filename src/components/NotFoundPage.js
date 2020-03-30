import React from 'react';
import {Link} from "react-router-dom";

    const NotFoundPage = () => (
        <div>
            <h2> 404 ! Page not found page.</h2>
           <h2>  <Link to={'/'}> Go back to home. </Link> </h2>
        </div>
    );

export default NotFoundPage;