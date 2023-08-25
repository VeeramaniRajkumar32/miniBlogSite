import React from 'react'
import { FaUser } from 'react-icons/fa'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router';
export const Register = () => {
    const navigate = useNavigate();
    const SignupSchema = Yup.object().shape({
        name: Yup.string()
          .required('Required'),
          userName: Yup.string()
          .required('Required'),
          password: Yup.string()
          .required('Required'),
          confirmPassword: Yup.string()
          .required('Required')
          .oneOf([Yup.ref('password')], 'Passwords must match'),
      });
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
         name: '',
         userName: '',
         password: '',
         confirmPassword:'',
       }}
       validationSchema={SignupSchema}
       onSubmit={values => {
         // same shape as initial values
         console.log(values);
       }}
     >
       {({ errors, touched }) => (
      <form>
        <div className="form-group">
        <label className="form">Name</label>
        <Field name="name" />
           {errors.name && touched.name ? (
             <div className="text-danger">{errors.name}</div>
           ) : null}
           
        </div>
        <div className="form-group">
          <label className="form">Username</label>
          <Field name="userName" />
           {errors.userName && touched.userName ? (
             <div className="text-danger" >{errors.userName}</div>
           ) : null}
          
        </div>
        <div className="form-group">
          <label className="form">Password</label>
          <Field name="password"type ="password" />
           {errors.password && touched.password ? (
             <div className="text-danger" >{errors.password}</div>
           ) : null}
        
        </div>
        <div className="form-group">
          <label className="form">Confirm Password</label>
          <Field name="confirmPassword" type="password"/>
           {errors.confirmPassword && touched.confirmPassword ? (
             <div className="text-danger" >{errors.confirmPassword}</div>
           ) : null}
           
        </div>
        <div className="form-group">
        <button type="button" onClick={()=>navigate("/login")} class="btn btn-dark w-100">Submit</button>
        </div>
      </form>
        )}
        </Formik>
    </section>
  </>
  )
}
