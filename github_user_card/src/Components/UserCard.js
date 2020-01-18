import React from 'react';
import { Card, CardTitle, CardBody, CardText } from 'reactstrap';
import '../App.css';

const UserCard = props => {
    return (
        <div style={{ margin: '20px' }}>
            <Card style={{ backgroundColor: 'blue', width: '500px' }} className='user'>
                {/* {console.log('USER TESTING', props)} */}
                <CardTitle style={{ backgroundColor: 'pink' }} className='name'>Name: {props.user.name}</CardTitle>
                <Card style={{ backgroundColor: 'red' }}>
                    <CardText className='location'>Location: {props.user.location}</CardText>
                    <Card style={{ backgroundColor: 'orange' }} className='bio'>Bio: {props.user.bio}</Card>
                    <CardText className='repo'>Public Repo: {props.user.public_repos}</CardText>
                    <CardText className='followers'>Followers: {props.user.followers}</CardText>
                    <CardText className='following'>Following: {props.user.following}</CardText>
                </Card>
            </Card>
        </div>
    )
}

export default UserCard;