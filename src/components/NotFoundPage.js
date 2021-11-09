import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
const NotFoundPage = ()  => {
    return(
        <React.Fragment>
            <Header/>
            Page Not Found. Goto <Link To="/dashboard">Home page</Link>
        </React.Fragment>
    )
}

export default NotFoundPage;