import React from 'react';
// import {Formik} from 'formik';
// import * as Yup from 'yup';

import {Navbar,Nav,Form,FormControl,Button,Container,Row,Col,Card,Image} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux';

import logo from '../logo-red.png';

const Feed = () => {

    const catsUrl = "http://lorempixel.com/400/600/cats/";
    const monkeysUrl = "https://www.placemonkeys.com/500/350?random=";

    const dispatch = useDispatch();
    const {user} =useSelector((state)=>state);

    const imageUrl  = user==="testusera" ? catsUrl : monkeysUrl;

    

    return (
        <div className="App-header">
            <Container fluid className="p-0">
            <Navbar bg="primary" variant="dark" fixed="top">
                <Container>
                
                <Form inline>
                <Navbar.Brand href="#home" className="p-0">
                    <img
                        src={logo}
                        width="35"
                        height="35"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <FormControl type="text" placeholder="Search" className="noborder" style={{borderRadius:"0px",lineHeight:"30px",width:"300px",height:"34px"}} />
                <Button variant="" className="search-button noborder" style={{lineHeight:"1.6",borderRadius:"0"}}><span className="glyphicon glyphicon-search"></span></Button>
                </Form>
                <Nav className="float-right navlinks">
                <Nav.Link href="#"><Button variant="outline-light">Home</Button></Nav.Link>
                <Nav.Link href="#"><Button variant="outline-light">Find Friends</Button></Nav.Link>
                <Nav.Link href="#"><Button variant="outline-light">Create</Button></Nav.Link>
                <Nav.Link href="#"><Button variant="outline-light" onClick={()=>dispatch({type:"LOGOUT_USER"})}>Logout</Button></Nav.Link>
                </Nav>
                </Container>
            </Navbar>
                <Container>
                    <Row>
                        <Col lg={3}>

                        </Col>
                        <Col lg={6}>
                        {[...Array(10)].map((e, i) => {
                                return (
                                    <Card style={{ width: '100%',margin:"10px" }} key={i}>
                                    <Card.Body>
                                        <Card.Title style={{fontWeight:"bold"}}>
                                            <Image src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png" 
                                                height="40"
                                                width="40"    
                                                roundedCircle />
                                            Post Title
                                            </Card.Title>
                                        <Card.Text>
                                        Some text to make up the bulk of the post's content.
                                        </Card.Text>
                                        <Card.Img variant="top" width="600" height="400" src={imageUrl+i} />
                                    </Card.Body>
                                    <hr/>
                                    <Card.Body>
                                        <Button href="#" variant="transparent" size="md" style={{width:"33%"}}><span className="glyphicon glyphicon-thumbs-up"></span>Like </Button>
                                        <Button href="#" variant="transparent" size="md" style={{width:"33%"}}><span className="glyphicon glyphicon-comment"></span>Comment </Button>
                                        <Button href="#" variant="transparent" size="md" style={{width:"33%"}}><span className="glyphicon glyphicon-share"></span>Share </Button>
                                        
                                    </Card.Body>
                                    </Card>
                                )
                            })}
                        
                        </Col>
                        <Col lg={3}>
                            
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    )
}

export default Feed;