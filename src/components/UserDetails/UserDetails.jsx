
// import PropTypes from 'prop-types';

import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const user = useLoaderData();
    const {name, website} = user;
    return (
        <div>
            <h1>Details About User: {name}</h1>
            <h1>Website: {website}</h1>
        </div>
    );
};


UserDetails.propTypes = {

};


export default UserDetails;
