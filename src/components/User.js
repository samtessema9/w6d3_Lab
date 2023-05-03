import React from 'react';

const User = (props) => {
    return ( 
        <div>
            <p>Name: {props.name}</p>
            <p>Email: {props.email}</p>
            <p>Website: {props.website}</p>
        </div>
     );
}
 
export default User;