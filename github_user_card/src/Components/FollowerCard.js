import React from 'react';
import { Card, CardTitle, CardBody, CardText } from 'reactstrap';
import '../App.css';

const FollowerCard = props => {


    return (
        <div style={{ margin: '20px' }}>
            <Card style={{ backgroundColor: 'blue', width: '500px' }} className='allFollowers'>
                <CardTitle style={{ backgroundColor: 'pink' }} className='name'>Name: {props.follower.name}</CardTitle>
                <Card style={{ backgroundColor: 'red' }}>
                    <h5 className='location'>Location: {props.follower.location}</h5>
                    <Card style={{ backgroundColor: 'orange' }} className='bio'>Bio: {props.follower.bio}</Card>
                    <h5 className='repo'>Public Repo: {props.follower.public_repos}</h5>
                    <h6 className='followers'>Followers: {props.follower.followers}</h6>
                    <h6 className='following'>Following: {props.follower.following}</h6>
                </Card>
            </Card>
        </div>
    )
}

export default FollowerCard;