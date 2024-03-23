import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';


const Post = ({post}) => {
    const {id,title,userId} = post;

    const navigate = useNavigate()

    const handleShowDetails = () => {
        navigate(`/post/${id}`);
    }
    return (
        <div className='border-2 rounded-lg p-5 mt-5 space-y-5 '>
            <h1 className='text-2xl'>User: {id}</h1>
            <h1 className='text-2xl'>Post: {userId}</h1>
            <h1 className='text-2xl pb-5'>Post: {title}</h1>
            <Link to={`/post/${id}`}>Post Details...</Link>
            <Link to={`/post/${id}`}><button className='border p-3 ml-5'>ClickMe</button></Link>
            <button onClick={handleShowDetails} className='border-2 bg-slate-300 p-3 rounded-lg'>Click See Details</button>
        </div>
    );
};


Post.propTypes = {
    post: PropTypes.array
};


export default Post;
