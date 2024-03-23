// import PropTypes from 'prop-types';

import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {

    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h1>Error Page....Oops....!</h1>
            <p> {error.statusText || error.message} </p>
            {
                error.status === 404 && <div>
                    <h3>Page not found !</h3>
                    <p className="pb-5">Go back where you from.</p>
                    <Link to="/" className='border-2 bg-slate-300 p-3 rounded'>Go-Back</Link>
                </div>
            }
        </div>
    );
};


ErrorPage.propTypes = {

};


export default ErrorPage;
