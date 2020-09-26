import React,{useState} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useDispatch} from 'react-redux';

import {Card,Row,Col,Dropdown,ButtonGroup,ToggleButton} from 'react-bootstrap'



const Signup = () => {
    var d = new Date()
    const months  = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov',"Dec"]

    const [month,setMonth]= useState(months[d.getMonth()])
    const [date,setDate]= useState(d.getDate())
    const [year,setYear]= useState(d.getFullYear())
    const [radioValue,setRadioValue] =useState(1)

    const dispatch = useDispatch();

    let dates = [];
    for(var i =1 ; i <=31;i++ ){
        dates.push(i)
    }

    let years = []
    for(i =2020;i>=1905;i--){
        years.push(i) 
    }

    const genderValues = [
        { name: 'Male', value: '1' },
        { name: 'Female', value: '2' },
        { name: 'Other', value: '3' },
      ];

    return (
        <div>
            <Card className="card-container">
            <Card.Body>
            <Card.Title className="card-title">Sign Up</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">It is quick and easy</Card.Subtitle>
            <hr/>
            <Formik
                initialValues = {{username:'',password:''}}
                onSubmit={(values,{setSubmitting})=>{
                    setSubmitting(false);
                    console.log(values)
                    
                    // props.login(values)                
                    
                }}
                validationSchema={Yup.object().shape({
                    firstName : Yup.string().required("Required").max(20,"Maximum 20 characters"),
                    lastName : Yup.string().required("Required").max(20,"Maximum 20 characters"),
                    username: Yup.string().required("Required"),
                    password: Yup.string().required("No password entered").required("Required").matches(/[a-zA-Z0-9]{8,}/,"Enter valid password")
                })}
                >
                
                {formik => {
                    const {values,touched, errors, handleChange,handleBlur, handleSubmit} = formik;

                    return (
                        <form onSubmit={handleSubmit}>
                            <Row className="form-group">
                            <Col>
                            <input 
                                name = "firstName"
                                type="text"
                                placeholder="First Name"
                                value = {values.firstName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                style={{marginLeft:"-5px"}}
                                className= {"form-control text-box " + (errors.firstName && touched.firstName ? "errorField":"")}
                            />

                            {errors.firstName && touched.firstName && (
                                <div className="error">{errors.firstName}</div>
                            )}
                            </Col>
                            <Col>
                            <input
                                name="lastName"
                                type="text"
                                placeholder="Last Name"
                                value={values.lastName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                style={{marginLeft:"-5px"}}
                                className={"form-control text-box "+ (errors.lastName && touched.lastName ? "errorField":"")}
                            />
                            {errors.lastName && touched.lastName && (
                                <div className="error">{errors.lastName}</div>
                            )}
                            </Col>
                            </Row>
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

                            {errors.username && touched.username && (
                                <div className="error" style={{marginLeft:"10px"}}>{errors.username}</div>
                            )}
                            </Row>
                            {/* Password */}
                            <Row className="form-group">
                            <input
                                name="password"
                                type="password"
                                placeholder="New Password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={"form-control text-box "+ (errors.password && touched.password ? "errorField":"")}
                            />
                            {errors.password && touched.password && (
                                <div className="error" style={{marginLeft:"10px"}}>{errors.password}</div>
                            )}
                            </Row>
                            <Row>
                            <label htmlFor="birthDay" className="form-label">Birthday</label>
                            </Row>
                            <Row>
                            <Col>
                                    <Dropdown>
                                    <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                                        {month}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        {months.map(
                                            (m)=> <Dropdown.Item key={m} onClick={()=>setMonth(m)}>{m}</Dropdown.Item>
                                        )}
                                    </Dropdown.Menu>
                                    </Dropdown>
                                </Col>
                                <Col>
                                <Dropdown>
                                    <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                                        {date}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        {dates.map(
                                            (d)=> <Dropdown.Item key={d} onClick={()=>setDate(d)}>{d}</Dropdown.Item>
                                        )}
                                    </Dropdown.Menu>
                                    </Dropdown>
                                </Col>
                                <Col>
                                    <Dropdown>
                                    <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                                        {year}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        {years.map(
                                            (y)=> <Dropdown.Item key={y} onClick={()=>setYear(y)}>{y}</Dropdown.Item>
                                        )}
                                    </Dropdown.Menu>
                                    </Dropdown>
                                </Col>
                                
                            </Row>
                            <Row>
                            <label htmlFor="gender" className="form-label">Gender</label>
                            </Row>
                            <Row>
                            <ButtonGroup toggle style={{width:"100%"}}>
                                {genderValues.map((radio, idx) => (
                                <Col lg={4} md={4} xs={4}>
                                <ToggleButton
                                    key={idx}
                                    type="radio"
                                    variant="transparent"
                                    name="radio"
                                    value={radio.value}
                                    style={{width:"100%",border:"1px solid"}}
                                    checked={radioValue === radio.value}
                                    onChange={(e) => setRadioValue(e.currentTarget.value)}
                                >
                                    {radio.name}
                                </ToggleButton>
                                </Col>
                                ))}
                            </ButtonGroup>
                            
                            </Row>
                            <hr/> 
                            <Row className="form-group jc">
                            <Card.Link href="#" className="forgot-link" onClick={()=>dispatch({type:"SHOW_LOGIN"})}>Already have account? Login</Card.Link>
                            </Row>
                            {/* Signup button */}
                            
                            <Row className="form-group jc">
                              
                            <button type="submit" disabled={!(formik.isValid && formik.dirty) } className="btn btn-success btn-lg">
                                Signup
                            </button>
                            </Row>
                        </form>
                    );
                
                }}
                
            </Formik>
            </Card.Body>
            </Card>
        </div>
    )
}

export default Signup;