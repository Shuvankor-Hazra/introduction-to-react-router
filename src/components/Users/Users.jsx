import { useLoaderData } from "react-router-dom";
import User from "../User/User";


const Users = () => {

    const users = useLoaderData();

    return (
        <div>
            <h1>Our Users: {users.length} </h1>
            <p>Good for nothing user !</p>

            <div className="grid grid-cols-3 gap-5">
            {
                users.map((user) => <User key={user.id} user={user} ></User>)
            }
            </div>
        </div>
    );
};

export default Users;