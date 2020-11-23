import React, { useState } from 'react';
import { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, } from '@fortawesome/free-solid-svg-icons'
import Comment from '../Comment/Comment'

const SinglePost = () => {
    
    const {id} = useParams();
    const [posts, setPosts] = useState({});
    const [comments, setComments] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data => setPosts(data))

        fetch('https://jsonplaceholder.typicode.com/posts/'+id+'/comments')
        .then(res => res.json())
        .then(data => setComments(data))

    }, [id])
    return (
        <div>
        
            <Card style={{height :'400px', width : '800px' , margin : '20px auto'}} >
                <Card.Img variant="top" src="https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" />
            </Card>
            <br />
            <Card style={{ width : '800px' , margin : '20px auto'}} >
                <Card.Body>
                <Card.Title>{posts.title}</Card.Title>
                <Card.Text>
                    {posts.body}
                </Card.Text>
                <br/>
                <br/>
                <h4>Comments</h4>
                    {
                        comments.map(comment => <Comment comment={comment}></Comment> )

                    }
                </Card.Body>
                
            </Card>
            
        </div>
    );
};

export default SinglePost;