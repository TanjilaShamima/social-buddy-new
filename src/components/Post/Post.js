import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { Button } from 'react-bootstrap';


const Post = (props) => {
    const post = props.post;
    // console.log(post);
    
    return (
        <div>
            <Card style={{width : '60%', margin : '10px auto'}}>
                <Card.Header>Post Id : {post.id}</Card.Header>
                <Card.Body>
                    <Card.Title><Link to={"/posts/"+post.id}>{post.title}</Link></Card.Title>
                    <Card.Text>
                    {post.body}
                    </Card.Text>
                    <Link to={"/posts/"+post.id}><Button variant="primary">See More</Button></Link>
                </Card.Body>
            </Card>
         
            
        </div>
    );
};

export default Post;