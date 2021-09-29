import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const PostDetail = () => {
    const{postId} = useParams()
    const [post, setPost] = useState({})
    useEffect( () => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
        .then(res => res.json())
        .then (data =>setPost(data) )
    },[])
    return (
        <div>
            <h2>Post Detail : {postId}</h2>   
            <h2>{post.title}</h2>     
            <h2>{post.body}</h2>     
        </div>
    );
};

export default PostDetail;