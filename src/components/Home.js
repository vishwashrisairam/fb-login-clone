import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import {useSelector} from 'react-redux';
// import {Formik} from 'formik';
// import * as Yup from 'yup';

import logo from '../fb.png';
import '../App.css';

import Login from './Login';
import Signup from './Signup';
import Feed from './Feed';

const Home = () => {

  const {user,showLoginForm} =useSelector((state)=>state);
  if(user){
    return <Feed/>
  }else{
    return (
        <div className="App-header">
        <Container style={{paddingTop:"12vh"}}> 
        <Row>      
            <Col lg={6} md={6} sm={12}>
              <img src={logo} className="App-logo" alt="logo" />
              <p className="header-text hidden-xs">
                Connect with friends and the world around you on Facebook.
              </p>
            </Col>
            <Col lg={6} md={6} sm={12}>
                {showLoginForm? <Login/> :<Signup/>}
            </Col>
        </Row>
      </Container>
      </div>
    )
    }
}

export default Home;