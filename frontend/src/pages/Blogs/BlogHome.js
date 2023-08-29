import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from 'axios'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { TopBar } from './TopBar';
import { ListBlog } from './ListBlog';

export const BlogHome = (props) => {
    const API_URL = 'http://localhost:7000/api'
    const postSchema = Yup.object().shape({
        title: Yup.string().required("Required"),
        content: Yup.string().required("Required"),
    })
    const createPost = async(value) => {
        const user = props.user;
        const userObj = JSON.parse(user)
        const token = userObj.token;
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': token ? `Bearer ${token}` : '',
          }
          
        axios.post(API_URL + '/post/create', value, {
            headers: headers
        })
        .then((response) => {
            if(response.data.status){
                console.log({response});
                toggle()
            }
        })
        .catch((error) => {
            console.log({error});
        })
    }
    const [modal, setModal] = useState(false)
    const toggle = () => {
        setModal(!modal)
    }
    return (
        <>
            <div className="container-fluid">
                <TopBar user={props} />
                <div style={{ display: 'flex', justifyContent: 'end', paddingTop: '10px' }}>
                    <button type="button" onClick={() => toggle()} className="btn btn-primary" >Create Post
                    </button>
                </div>
                <ListBlog modal={modal}/>
            </div>
            <Modal isOpen={modal} toggle={toggle} >
                <Formik
                    initialValues={{
                        title: "",
                        content: "",
                    }}
                      validationSchema={postSchema}
                        onSubmit={(values) => {
                            createPost(values)
                            //same shape as initial values
                            console.log(values);
                        }}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <ModalHeader toggle={toggle}>Create Post</ModalHeader>
                            <ModalBody>
                            <div className="mb-4">
                                <Field className="form-control" name="title" type="text" placeholder='Title' required />
                            </div>
                            <div className="mb-4">
                                <Field as="textarea" className="form-control" name="content" rows="6" placeholder='Content' required />
                            </div>
                            {/* <div className="mb-4">
                                <input accept="image/png, image/gif, image/jpeg" type="file" className="form-control" name="message" rows="6" ></input>
                            </div> */}
                            </ModalBody>
                            <ModalFooter>
                                <button className="btn btn-primary" >Submit</button>{' '}
                            </ModalFooter>
                        </Form>
                    )}
                </Formik>
            </Modal>
        </>
    )
}
