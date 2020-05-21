import React from 'react';
import { Container, Card, CardImg, CardTitle, CardSubtitle, CardHeader, CardBody, CardText, Col, Button} from 'reactstrap';

import '../styles/Profile.scss'; 

function Profile(props){
    return(
        <>
            <Container className='profile'>
                <Col>
                <Card>
                    <CardTitle>Profile</CardTitle>
                    <CardSubtitle>{props.username}</CardSubtitle>
                    <CardHeader>Edit your profile here.</CardHeader>
                    <CardBody>
                        <CardImg></CardImg>
                        <CardText>Name: </CardText>
                        <CardText>Username: </CardText>
                        <CardText>Email: </CardText>
                        <Button>Save Changes</Button>
                    </CardBody>
                </Card>
                </Col>
            </Container>           
        </>
    )
}
export default Profile;
