
// import{UserContext} from "../context/UserContext"
import {  Field, Form, Formik,ErrorMessage } from "formik";
import axios from "axios";
// import { useContext, useState } from "react";
import { json } from "react-router";
import {Link} from 'react-router-dom'
import { useNavigate} from 'react-router';

export default function Login(){
    // const {Person,setPerson}=useContext(UserContext);
    const Navigate = useNavigate();
    const submitHandler = async(values, setSubmitting) => {
        alert(JSON.stringify(values));
        
        const user=await axios.post('http://localhost:8081/user/login',values)
        if(user.data!="invalid"){
            localStorage.setItem('user',JSON.stringify(user));
            callhome();
        }
        else{
            alert("No User Found!");
            Navigate('/Signup');
        }
        console.log(user.data)
        // setPerson(user.data);
        
        // console.log(Person)
        // console.log(user);
        // Person.map((el)=>console.log(el))
        
      };
      const callhome=()=>{
        Navigate('/Home');
        window.location.reload();
    }
      const validator=(values)=>{
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
         values.email.indexOf("@")<0 || values.email.indexOf("@")>values.email.lastIndexOf(".")
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
    };
    return <div>
        <section className="vh-60" style={{backgroundColor:"#9A616D"}}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col col-xl-10">
                    <div className="card" style={{borderRadius:"1rem"}}>
                    <div className="row g-0">
                        <div className="col-md-6 col-lg-5 d-none d-md-block">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                            alt="login form" className="img-fluid" style={{borderRadius:"1rem 0 0 1rem"}}/>
                        </div>
                        <div className="col-md-6 col-lg-7 d-flex align-items-center">
                        <div className="card-body p-4 p-lg-5 text-black">
                            <div className="d-flex align-items-center mb-3 pb-1">
                                <i className="fas fa-cubes fa-2x me-3" style={{color:"#ff6219"}}></i>
                                <span className="h1 fw-bold mb-0">Logo</span>
                            </div>

                            <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing:"1px"}}>Login into your account</h5>
                        <Formik
                        onSubmit={submitHandler}
                        initialValues={{ email: "",password:"" }}
                        validate={validator}
                        style={{margin:'0 auto'}}
                        >
                        {({ isSubmitting }) => (
                            <Form>

                            <div className="form-outline mb-4">
                                <div className="form-group">
                                <label className="form-label" for="form2Example17" >Email address</label>
                                <Field type="email" id="email" className="form-control form-control-lg" name="email" placeholder=" " />
                                <ErrorMessage class="form-text text-muted" name="email" id="email" component="div" />
                                </div>
                            </div>

                            <div className="form-outline mb-4">
                                <div className="form-group">
                                <label className="form-label" for="form2Example27" >Password</label>
                                <Field type="password" id="password" className="form-control form-control-lg" name="password" placeholder=" "/>
                                <ErrorMessage class="form-text text-muted" name="password" id="password" component="div" />
                                </div>
                            </div>
    

                            <div className="pt-1 mb-4">
                                <button className="btn btn-dark btn-lg btn-block" type="submit" disabled={isSubmitting}>Login</button>
                            </div>
                            <p className="mb-5 pb-lg-2" style={{color:"#393f81"}}>Don't have an account? <button
                                style={{color:"black",border:"none",backgroundColor:"white"}}><Link to='/Signup' style={{textDecoration:"none",color:"black"}}>Register Here</Link></button></p>
                            </Form>
                        )}
                        </Formik>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </div>
}



{/* <Formik
                    onSubmit={submitHandler}
                    initialValues={{ fname: "", lname:"",email: "",service:"" }}
                    validate={validator}
                    style={{margin:'0 auto'}}
                    >
                    {({ isSubmitting }) => (
                        <Form class="card" style={{width:'18rem',padding:'10px',marginLeft:'auto',marginRight:'auto'}}>
                            

                            <div class="form-group">
                            <Field type="text" id="id" name="id" class="form-control" placeholder="Create your User ID" />
                            <ErrorMessage class="form-text text-muted" name="id" id="id" component="div" />
                            </div>

                            <div class="form-group">
                            <Field
                            text="text"
                            id="fname" name="fname"
                            placeholder="Enter your First name"
                            class="form-control"
                            />
                            <ErrorMessage class="form-text text-muted" name="fname" id="fname" component="div" />
                            </div>

                            <div class="form-group">
                            <Field
                            text="text"
                            id="lname" name="lname"
                            placeholder="Enter your First name"
                            class="form-control"
                            />
                            <ErrorMessage class="form-text text-muted" name="lname" id="lname" component="div" />
                            </div>

                            <div class="form-group">
                            <Field type="email" id="email" name="email" class="form-control" placeholder="Enter email address"/>
                            <ErrorMessage class="form-text text-muted" name="email" id="email" component="div" />
                            </div>

                            <div class="form-group">
                            <Field type="tel" id="mobile" name="mobile" class="form-control" placeholder="Enter your mobile "/>
                            <ErrorMessage class="form-text text-muted" name="mobile" id="mobile" component="div" />
                            </div>

                            <div class="form-group">
                            <Field type="text" id="services" name="services" class="form-control" placeholder="Enter Services" />
                            <ErrorMessage class="form-text text-muted" name="services" id="services" component="div" />
                            </div>

                        <button type="submit" class="btn btn-primary"  disabled={isSubmitting} >
                            Create
                        </button>
                        </Form>
                    )}
                    </Formik> */}