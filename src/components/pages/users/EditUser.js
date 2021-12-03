import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {useHistory,useParams} from 'react-router-dom';

const EditUser = () => {
    let history = useHistory();
    const {id} = useParams();

    const [user,setUser] = useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:""
    });
    const {name,username,email,phone,website} = user;
    const onInputChanged = e =>{
        e.preventDefault();
        setUser({...user,[e.target.name]:e.target.value})
    }
    useEffect(() => {
        loadUser();
    },[])
    const onSubmit= async e =>{
        e.preventDefault()
        await axios.put(`http://localhost:3002/users/${id}`,user);
        history.push("/");
    }
    
    const loadUser = async () =>{
        const result = await axios.get(`http://localhost:3002/users/${id}`);
        setUser(result.data);
       
    }
    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Edit User</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input type="text"
                        className="form-control form-control-lg"
                            placeholder="Enter Your Name"
                            name="name"
                            value={name}
                            onChange={e => onInputChanged(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input type="text"
                        className="form-control form-control-lg"
                            placeholder="Enter Your User Name"
                            name="username"
                            value={username}
                            onChange={e => onInputChanged(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input type="text"
                        className="form-control form-control-lg"
                            placeholder="Enter Your Email"
                            name="email"
                            value={email}
                            onChange={e => onInputChanged(e)}

                        />
                    </div>
                    <div className="form-group">
                        <input type="text"
                        className="form-control form-control-lg"
                            placeholder="Enter Your Phone number"
                            name="phone"
                            value={phone}
                            onChange={e => onInputChanged(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input type="text"
                        className="form-control form-control-lg"
                            placeholder="Enter Your Web site Name"
                            name="website"
                            value={website}
                            onChange={e => onInputChanged(e)} 
                        />
                    </div>
                    <button className="btn btn-warning btn-block">Update User</button>
                </form>
            </div>
        </div>
    );
}

export default EditUser;