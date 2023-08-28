import React from "react";
import { FaUser } from "react-icons/fa";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router";
import axios from 'axios'
const API_URL = 'http://localhost:7000/api'
export const Register = () => {
  const navigate = useNavigate();
  const SignupSchema = Yup.object().shape({
	name: Yup.string().required("Required"),
	userName: Yup.string().required("Required"),
	password: Yup.string().required("Required"),
	confirmPassword: Yup.string()
	  .required("Required")
	  .oneOf([Yup.ref("password")], "Passwords must match"),
  });

  const signup = async(value) => {
	const headers = {
		'Content-Type': 'application/json',
		'Authorization': 'JWT fefege...'
	  }
	  
	  axios.post(API_URL + '/register', value, {
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
  }
  return (
	<>
	  <section className="heading">
		<h3>
		  <FaUser /> Register
		</h3>
		<p>Please create an account</p>
	  </section>
	  <section className="form">
		<Formik
		  initialValues={{
			name: "",
			userName: "",
			password: "",
			confirmPassword: "",
		  }}
		  validationSchema={SignupSchema}
		  onSubmit={(values) => {
			signup(values)
			// same shape as initial values
			console.log(values);
		  }}
		>
		  {({ errors, touched }) => (
			<Form>
			  <div className="form-group">
				<label className="form">Name</label>
				<Field name="name" required />
				{errors.name && touched.name ? (
				  <div className="text-danger">{errors.name}</div>
				) : null}
			  </div>
			  <div className="form-group">
				<label className="form">Username</label>
				<Field name="userName" required />
				{errors.userName && touched.userName ? (
				  <div className="text-danger">{errors.userName}</div>
				) : null}
			  </div>
			  <div className="form-group">
				<label className="form">Password</label>
				<Field name="password" type="password" />
				{errors.password && touched.password ? (
				  <div className="text-danger">{errors.password}</div>
				) : null}
			  </div>
			  <div className="form-group">
				<label className="form">Confirm Password</label>
				<Field name="confirmPassword" type="password" />
				{errors.confirmPassword && touched.confirmPassword ? (
				  <div className="text-danger">{errors.confirmPassword}</div>
				) : null}
			  </div>
			  <div className="form-group">
				<button
				  type="submit"
				//   onClick={() => navigate("/login")}
				  className="btn btn-dark w-100"
				>
				  Submit
				</button>
			  </div>
			</Form>
		  )}
		</Formik>
	  </section>
	</>
  );
};
