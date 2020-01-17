import React from 'react';

const UserCard = props => {
    return (
        <div className='user'>
            <h4 className='name'>Name: {props.user.name}</h4>
            <h5 className='location'>Location: {props.user.location}</h5>
            <p className='bio'>Bio: {props.user.bio}</p>
            <h5 className='repo'>Public Repo: {props.user.public_repo}</h5>
            <h6 className='followers'>Followers: {props.user.followers}</h6>
            <h6 className='following'>Following: {props.user.following}</h6>
        </div>
    )
}

export default UserCard;

// - name, location, bio, public_repo, followers, following