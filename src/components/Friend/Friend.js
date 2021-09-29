import React from 'react';
import { Link,useHistory } from 'react-router-dom';
import "./Friend.css"

const Friend = (props) => {

    const {name, phone, webside,id, address} = props.friend
    const history = useHistory();

    const friendStyle={
        border : '3px solid goldenrod',
        padding:'10px',
        borderRadius: '10px'
    }
        const url= `/friend/${id}`

        const handleFriendClick = () => {
            history.push(`/friend/${id}`);
        }

    return (
        <div style={friendStyle}>
            <h2>I am : {name} {id}</h2>
            <h5>Call me : {phone}</h5>
            <p>Visit me : {webside}</p>
            <p>I live in : {address.city}</p>
            <Link to= {url}> Visit me </Link>

            <br />
            <Link to={url}>
                <button>Visit me</button>
            </Link>
            <br />
            <button onClick={handleFriendClick}>Visit me 2</button>
        </div>
    );
};

export default Friend;