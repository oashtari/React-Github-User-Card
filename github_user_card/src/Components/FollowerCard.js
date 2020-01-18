import React from 'react';
import { Card, CardTitle, CardBody, CardText } from 'reactstrap';
import '../App.css';

const FollowerCard = props => {


    return (
        <>
            {/* {console.log('TSTING', props.followers)} */}
            {/* {props.followers &&
                props.followers.map(follower =>  */}
            <div className='followers'>
                <h4 className='name'>Name: {props.follower.name}</h4>
                <h5 className='location'>Location: {props.follower.location}</h5>
                <p className='bio'>Bio: {props.follower.bio}</p>
                <h5 className='repo'>Public Repo: {props.follower.public_repo}</h5>
                {/* <h6 className='followers'>Followers: {props.followers.followers}</h6>
                <h6 className='following'>Following: {props.followers.following}</h6> */}
            </div>
        </>
        // ))
    )
}

export default FollowerCard;