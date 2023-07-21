import {  Field, Form, Formik,ErrorMessage } from "formik";
import axios from "axios";
import { useContext, useState } from "react";
import { json } from "react-router";
import {Link} from 'react-router-dom';
import { useNavigate} from 'react-router';

export default function Addprofession() {
  
  const Navigate = useNavigate();
  const submitHandler = async(values, setSubmitting) => {
    
    
    const {service} =values;
    const value  = { ...values ,service : service.split(",")};
    alert(JSON.stringify(value));
    await axios.post('http://localhost:8081/job',value)
    .then((response)=>Navigate('/Home'))

  };


  const validator=(values)=>{
    const errors = {};
    if (!values.cmp_name) {
      errors.cmp_name = "Required";
    }
    // if (!values.email) {
    //   errors.email = "Required";
    // } else if (
    //  values.email.indexOf("@")<0 || values.email.indexOf("@")>values.email.lastIndexOf(".")
    // ) {
    //   errors.email = "Invalid email address";
    // }
    return errors;
  };
  return (
    <section className="h-100 h-custom" style={{backgroundColor:"#8fc4b7"}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-8 col-xl-6">
        <div className="card rounded-3">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp"
            className="w-100"
            alt="Sample photo"/>
          <div className="card-body p-4 p-md-5">
            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Register Your company</h3>
            <Formik
      onSubmit={submitHandler}
      initialValues={{ cmp_name: "", location:"",address: "",desp:"" }}
      validate={validator}
      style={{margin:'0 auto'}}
    >
      {({ isSubmitting }) => (
        <Form className="px-md-2">
            
            <div className="form-outline mb-4">

            </div>
            <div class="form-group">
            <label className="form-label" for="form3Example1q">Professional username*</label>
            <Field text="text" id="prof_uname" name="prof_uname" class="form-control" placeholder="Enter Username" />
            <ErrorMessage class="form-text text-muted" name="prof_uname" id="prof_uname" component="div" />
            </div>

            <div className="form-outline mb-4">
              <div class="form-group">
              <label className="form-label" for="form3Example1q">Company username*</label>
              <Field
              text="text"
              id="cmp_name" name="cmp_name"
              placeholder="Enter company name"
              class="form-control"
              />
              <ErrorMessage class="form-text text-muted" name="cmp_name" id="cmp_name" component="div" />
              </div>
            </div>
            

            <div className="form-outline mb-4">
              <div class="form-group">
              <label className="form-label" for="form3Example1q">Location*</label>
              <Field
              text="text"
              id="location" name="location"
              placeholder="Enter your Location"
              class="form-control"
              />
              <ErrorMessage class="form-text text-muted" name="Location" id="Location" component="div" />
              </div>
            </div>
            

            <div className="form-outline mb-4">
              <div class="form-group">
              <label className="form-label" for="form3Example1q">Address*</label>
              <Field text="text" id="address" name="address" class="form-control" placeholder="Enter company address"/>
              <ErrorMessage class="form-text text-muted" name="address" id="address" component="div" />
              </div>
            </div>
            

            <div className="form-outline mb-4">
              <div class="form-group">
              <label className="form-label" for="form3Example1q">description*</label>
              <Field text="text" id="desp" name="desp" class="form-control" placeholder="Enter description"/>
              <ErrorMessage class="form-text text-muted" name="desp" id="desp" component="div" />
              </div>
            </div>
            
{/*  */}

            <div className="form-outline mb-4">
              <div class="form-group">
              <label className="form-label" for="form3Example1q">Avg Charge per hour*</label>
              <Field type="number" id="price" name="price" class="form-control" placeholder="Enter avg price/hour"/>
              <ErrorMessage class="form-text text-muted" name="price" id="price" component="div" />
              </div>
            </div>
            

            <div className="form-outline mb-4">
              <div class="form-group">
              <label className="form-label" for="form3Example1q">Phone*</label>
              <Field type="tel" id="mobile" name="mobile" class="form-control" placeholder="Enter mobile"/>
              <ErrorMessage class="form-text text-muted" name="mobile" id="mobile" component="div" />
              </div>
            </div>
            

            <div className="form-outline mb-4">
              <div class="form-group">
              <label className="form-label" for="form3Example1q">Services you offer*</label>
              <Field type="text" id="service" name="service" class="form-control" placeholder="Enter Service" />
              <ErrorMessage class="form-text text-muted" name="service" id="service" component="div" />
              </div>
            </div>
            

          <button type="submit" class="btn btn-success btn-lg mb-1"  disabled={isSubmitting} >
          Create
          </button>
        </Form>
      )}
    </Formik>
            {/* <Formik
              onSubmit={submitHandler}
              initialValues={{ cmp_name: "", location:"",desp: "",service:"" }}
              validate={validator}
              style={{margin:'0 auto'}}
            > 
          {({ isSubmitting }) => (
            <Form className="px-md-2">

              <div className="row">
                <div className="col-md-6 mb-4">

                  <div className="form-group">
                    <div className="form-outline mb-4">
                      <label className="form-label" for="form3Example1q">Professional username*</label>
                      <Field type="text" id="prof_uname" className="form-control"  name="prof_uname "placeholder="  "/>
                      <ErrorMessage class="form-text text-muted" name="prof_uname" id="prof_uname" component="div" />
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="form-outline">
                      <label for="exampleDatepicker1" className="form-label">Company Name*</label>
                      <Field text="text" className="form-control" id="cmp_name" name="cmp_name " placeholder="  "/>
                      <ErrorMessage class="form-text text-muted" name="cmp_name" id="cmp_name" component="div" />
                    </div>
                  </div>

                </div>
                <div className="col-md-6 mb-4">

                  <div className="form-group">
                    <div className="form-outline">
                      <label for="exampleDatepicker1" className="form-label">Location*</label>
                      <Field text="text" className="form-control" id="location"name="location" placeholder="  "/>
                      <ErrorMessage class="form-text text-muted" name="location" id="location" component="div" />
                    </div>
                  </div>

                </div>
              </div>

              <div className="form-group">
                <div className="form-outline mb-4">
                  <label className="form-label" for="form3Example1q">Company address*</label>
                  <Field text="text" id="address" className="form-control" name="address" placeholder="  "/>
                  <ErrorMessage class="form-text text-muted" name="address" id="address" component="div" />
                </div>
              </div>

              <div className="form-group">
                <div className="form-outline mb-4">
                  <label className="form-label" for="form3Example1q">Description*</label>
                  <Field text="text" id="desp" className="form-control" name="desp" placeholder="  "/>
                  <ErrorMessage class="form-text text-muted" name="desp" id="desp" component="div" />
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-4">

                  <div className="form-group">
                    <div className="form-outline">
                      <label for="exampleDatepicker1" className="form-label">Avg Charge per hour*</label>
                      <Field type="number" className="form-control" id="price" name="price" placeholder="  "/>
                      <ErrorMessage class="form-text text-muted" name="price" id="price" component="div" />
                    </div>
                  </div>

                </div>
                <div className="col-md-6 mb-4">

                  <div className="form-group">
                    <div className="form-outline">
                      <label for="exampleDatepicker1" className="form-label">Phone*</label>
                      <Field type="tel" className="form-control" id="mobile" name="mobile" placeholder="  " />
                      <ErrorMessage class="form-text text-muted" name="mobile" id="mobile" component="div" />
                    </div>
                  </div>

                </div>
              </div>

                <div className="form-group">
                    <div className="form-outline mb-4">
                    <label className="form-label" for="form3Example1q">Services you offer*</label>
                    <Field text="text" id="service" className="form-control"  name="service "placeholder="  "/>
                    <ErrorMessage class="form-text text-muted" name="service" id="service" component="div" />
                    </div>
                </div>

              <button type="submit" className="btn btn-success btn-lg mb-1"  disabled={isSubmitting}>Submit</button>

            </Form>
          )}
          </Formik> */}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    
  );
}
