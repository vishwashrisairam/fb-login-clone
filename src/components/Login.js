import React,{useState} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';

import {useDispatch,useSelector} from 'react-redux';
import {Card,Row} from 'react-bootstrap';


import '../App.css';

const Login = () => {

    const dispatch = useDispatch();
    const {validUsers,dummyPass} =useSelector((state)=>state);
    const [loginError,setLoginError] = useState("");

    return (
        <div>
            <Card className="card-container" style={{marginTop:"25px"}}>
            <Card.Body>
            <Formik
                initialValues = {{username:'',password:''}}
                onSubmit={(values,{setSubmitting})=>{
                    setSubmitting(false);
                    const {username,password}= values
                    if(validUsers.includes(username) && password===dummyPass){
                        console.log('dispatch')
                        dispatch({type:"LOGIN_USER",payload:username.split('@')[0]});

                    }else{
                        setLoginError('The email you’ve entered doesn’t match any account. Sign up for an account.')
                        
                    }
                    
                    // props.login(values)                
                    
                }}
                validationSchema={Yup.object().shape({
                    username: Yup.string().email("The email you’ve entered doesn’t match any account").required("Required"),
                    password: Yup.string().required("No password entered").required("Required").matches(/[a-zA-Z0-9]{8,}/,"Enter valid password")
                })}
                >
                
                {formik => {
                    const {values,touched, errors, handleChange,handleBlur, handleSubmit} = formik;

                    return (
                        <form onSubmit={handleSubmit}>
                            {/* Username */}
                            <Row className="form-group">
                            <input 
                                name = "username"
                                type="text"
                                placeholder="Email"
                                value = {values.username}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className= {"form-control text-box " + (errors.username && touched.username ? "errorField":"")}
                            />

                            {loginError.length > 0 && (
                                <div className="error">{loginError}</div>
                            )}

                            {errors.username && touched.username && (
                                <div className="error">{errors.username}</div>
                            )}
                            </Row>
                            {/* Password */}
                            <Row className="form-group">
                            <input
                                name="password"
                                type="password"
                                placeholder="Password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={"form-control text-box "+ (errors.password && touched.password ? "errorField":"")}
                            />
                            {errors.password && touched.password && (
                                <div className="error">{errors.password}</div>
                            )}
                            </Row>
                            {/* Login button */}
                            <Row className="form-group jc">
                            <button type="submit" disabled={!(formik.isValid && formik.dirty) } className="btn btn-primary btn-lg home-buttons">
                                Login
                            </button>
                            <Card.Link href="#" className="forgot-link">Forgot password?</Card.Link>
                            </Row>
                        </form>
                    );
                
                }}
                
            </Formik>
            <hr/>
            <Row className="form-group jc mt-10">
                <button type="submit" className="btn btn-success btn-lg" onClick={()=>dispatch({type:"SHOW_SIGNUP"})}>
                    Create New Account
                </button>
            </Row> 
            </Card.Body>
            </Card>
        </div>
    )
}

export default Login;