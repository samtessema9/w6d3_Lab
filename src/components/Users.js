import React, {useEffect, useState} from 'react';
import User from './User';
import './index.css';

const Users = () => {
    const [userData, setUserData] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setUserData(data));
    }, [])


    return ( 
        <div id="wrapper">
            {
                userData.map(user => {
                    return <User 
                        name = {user.name}
                        email = {user.email}
                        website = {user.website}
                    />
                })   
            }
        </div>
     );
}
 
export default Users;