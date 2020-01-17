import React from 'react';

const FollowerCard = props => {


    return (
        <>
            {console.log('testing', props.followers)}
            {props.followers &&
                props.followers.map(follower => (
                    <div className='followers'>
                        <h4 className='name'>Name: {follower.name}</h4>
                        <h5 className='location'>Location: {follower.location}</h5>
                        <p className='bio'>Bio: {follower.bio}</p>
                        <h5 className='repo'>Public Repo: {follower.public_repo}</h5>
                        <h6 className='followers'>Followers: {follower.followers}</h6>
                        <h6 className='following'>Following: {follower.following}</h6>
                    </div>))}
        </>
        // ))
    )
}

export default FollowerCard;