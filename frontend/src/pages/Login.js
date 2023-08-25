import React from "react";
import { FaSignInAlt } from "react-icons/fa";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router";
import axios from 'axios'

const API_URL = 'http://localhost:7000/api'

const Login = () => {
  const navigate = useNavigate();
  const SignupSchema = Yup.object().shape({
    username: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
  });

  const login1 = async(value) => {
    console.log(API_URL + '/login');
    const data = {
      "userName": "veeramanirajkumar@gmail.com",
      "password": "12345"
  }
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'JWT fefege...'
  }
  
  axios.post(API_URL + '/login', data, {
      headers: headers
    })
    .then((response) => {
      if(response.data.status){
        console.log({response});
        localStorage.setItem('user', JSON.stringify(response.data))
        navigate('/')
    }
    })
    .catch((error) => {
      console.log({error});
    })
  
    

    // return response.data;
  }

  return (
    <>
      <section style={{ textAlign: "center" }} className="heading">
        <h3>
          <FaSignInAlt /> Login
        </h3>
        <p>Please login your account</p>
      </section>
      <section className="form">
        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            login1(values)
            // same shape as initial values
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div clas="form-group">
                <label className="form">Username</label>
                <Field className="userName" name="username" />
                {errors.username && touched.username ? (
                  <div className="text-danger">{errors.username}</div>
                ) : null}
              </div>
              <div className="form-group">
                <label className="form">Password</label>
                <Field type="password" name="password" />
                {errors.password && touched.password ? (
                  <div className="text-danger">{errors.password}</div>
                ) : null}
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-dark w-100">
                  Submit
                </button>
                <button
                  type="button"
                  className="btn btn-info w-100"
                  onClick={() => navigate("/register")}
                >
                  Create Login
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </section>
    </>
  );
};

export default Login;
