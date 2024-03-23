// import PropTypes from 'prop-types';

import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const PostDetails = () => {

    const posted = useLoaderData();
    const {id,title,body} = posted;

    const {postId} = useParams();
    console.log(postId);

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    }

    return (
        <div>
            <h1>Post Details About: {id} </h1>
            <h1>Title: {title} </h1>
            <h1>Body: {body} </h1>
            <button onClick={handleGoBack} className='border-2 bg-slate-300 p-3 rounded-lg'>Go Back</button>
        </div>
    );
};


PostDetails.propTypes = {

};


export default PostDetails;
