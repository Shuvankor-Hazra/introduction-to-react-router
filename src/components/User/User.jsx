import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const User = ({ user }) => {
    console.log(user)
    const {id, name, email, phone } = user;

    return (
        <div className='border-2 rounded-lg p-5 mt-5 space-y-5 space-x-5'>
            <h1 className='text-2xl'>Name: {name} </h1>
            <h3 className='text-2xl'>Email: {email} </h3>
            <h2 className='text-2xl pb-5'>Phone: {phone} </h2>
            <Link to={`/user/${id}`} className='border p-3'>Show Details...</Link>
            <Link to={`/user/${id}`}>
                <button className='border p-3 '>Click Me</button>
            </Link>
        </div>
    );
};

User.propTypes = {
    user: PropTypes.object
};

export default User;


