import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
// import EditUser from './users/EditUser';
const Home = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        loadUsers();
    }, [])

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3002/users");
        setUser(result.data.reverse());
    }

    const deleteUser = async id =>{
        await axios.delete(`http://localhost:3002/users/${id}`);
        loadUsers();
    }
    return (
        <div className="container">
            <div className="py-4">
                <h1>Home</h1>

                <table class="table border shadow">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        users.map((user,index)=>(
                            <tr>
                                <th scope="row">{index+1}</th>
                                <th>{user.name}</th>
                                <th>{user.username} </th>
                                <th> {user.email} </th>
                                <th>
                                    <Link className="btn btn-primary mr-2" to={`/user/${user.id}`}>View</Link>
                                    <Link className="btn btn-outline-primary mr-2" to={`/users/edit/${user.id}`}>Edit</Link>
                                    <Link className="btn btn-danger mr-2" onClick={() => deleteUser(user.id)}>Delete</Link>
                                </th>
                            </tr>
                        ))
                       }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Home;