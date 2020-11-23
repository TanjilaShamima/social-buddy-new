import React, { useEffect } from 'react';
import { useState } from 'react';
import { Image } from 'react-bootstrap';

const Comment = (props) => {
    const comment = props.comment;
    const [user, setUser] = useState({});
    console.log(user);
    

    useEffect(() =>{
        fetch('https://randomuser.me/api')
        .then(res => res.json())
        .then(user => setUser(user.results[0]))
    }, [])
    return (
        <div style={{display : 'flex', padding : '6px'}}>
            <div className="left" >
                <Image style={{borderRadius: '50%'}} src={user.picture?.medium}/>
            </div>
            <div style={{marginLeft: '20px'}} className="right">
                <h6>{user.name?.title+' '+user.name?.first+' '+user.name?.last}</h6>
                <p><small>{user.email}</small></p>
                <p>{comment.body}</p>
            </div>
        </div>
    );
};

export default Comment;