import React, { useEffect }  from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import { useState } from "react";

const Home = ()=>{
    const [users,setUser] = useState([]);
    useEffect(()=>{
        loadUsers();
        console.log("helo bro...???")
    },[])
    const deleteuser = async id=>{
        await axios.delete(`http://localhost:3003/users/${users.id}`);
        loadUsers();
    }
    const loadUsers = async ()=>{
        const result = await axios.get('http://localhost:3003/users');
        setUser(result.data.reverse())
    }
    return(
        <div className="container" >
            <div className="py-4">
                <h1>Home Page</h1>
                <table class="table table-hover">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">User Name</th>
      <th scope="col">Email</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
        {
            users.map((user,index)=>(
                <tr>
                    <th scope="row">{index +1}</th>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>
                        <Link className="btn btn-primary mr-2" to={`/users/${users.id}`} >View</Link>
                        <Link className="btn btn-outline-primary mr-2" to={`/users/edituser/${users.id}`}>Edit</Link>
                        <Link className="btn btn-danger" onClick={()=>deleteuser(users.id)} >Delete</Link>
                    </td>
                </tr>
            ))
        }
  </tbody>
</table>
            </div>

        </div>
    )
}
export default Home