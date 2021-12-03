import React, {useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const AddUser = () => {
    let history = useHistory();
    const [user,setUser] = useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:""
    });

    const onInputChanged = e =>{
        e.preventDefault();
        setUser({...user,[e.target.name]:e.target.value})
    }
    const {name,username,email,phone,website} = user;
    const onSubmit= async e =>{
        e.preventDefault()
        await axios.post("http://localhost:3002/users",user);
        history.push("/");
    }
    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Add User</h2>
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
                    <button className="btn btn-primary btn-block">Add User</button>
                </form>
            </div>
        </div>
    );
}

export default AddUser;