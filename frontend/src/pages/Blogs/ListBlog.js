import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import axios from 'axios'
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
const API_URL = "http://localhost:7000/api";

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [day, month, year].join('-');
}

export const ListBlog = () => {
	const postSchema = Yup.object().shape({
        title: Yup.string().required("Required"),
        content: Yup.string().required("Required"),
    })
	const navigate = useNavigate();
	const [data, setData] = useState([])
	const [mapData, setMapData] = useState([])
	const [modal, setModal] = useState(false)
	const user = localStorage.getItem('user');
	const userObj = JSON.parse(user)
	const token = (userObj.token) ? userObj.token : '' ;
	const headers = {
		'Content-Type': 'application/json',
		'Authorization': token ? `Bearer ${token}` : '',
		}
		useEffect(() => {
			if(!user){
				navigate('/login')
			}
			fetchData();
		}, []);
	const fetchData = async () => {
		const result = await axios.get(API_URL + '/post/list',{
		headers: headers
		})
		try {
			setData(result.data.data);
			// console.log(result.data.data,result)
		} catch (error) {
			console.log(error);
		}
	};
	const toggle = (data) => {
		setMapData(data)
        setModal(!modal)
    }
  return (
	<>
	  <div className="row">
	 
			
				<Modal isOpen={modal} toggle={toggle} >
					<Formik
						initialValues={{
							title: mapData.title,
							content: mapData.content,
						}}
						validationSchema={postSchema}
							onSubmit={(values) => {
								// createPost(values)
								//same shape as initial values
								console.log(values);
							}}
					>
						{({ errors, touched }) => (
							<Form  >
								<ModalHeader toggle={toggle}>Edit Post</ModalHeader>
								<ModalBody>
								<div className="mb-4">
									<Field className="form-control" name="title" type="text"  placeholder='Title' />
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
				{data.map((data) => {
		return (
			<>
			<div className="col-sm-6">
				<div  rel="nofollow"  className="effect-lily tm-post-link tm-pt-60">
					<div className="tm-post-link-inner">
						<img src="img/img-02.jpg" alt="Image" className="img-fluid" />
					</div>
					<button type="button" onClick={() => toggle(data)} className="position-absolute tm-new-badge btn btn-success" >edit
                    </button>
				</div>
					<h2 onClick={() => navigate("/post/list/"+data.id,{state:data.id})} className="tm-pt-30 tm-post-link tm-color-primary tm-post-title">
					{data.title}
					</h2>
				<p className="tm-pt-30">
					{data.content}
				</p>
				<div className="d-flex justify-content-between tm-pt-45">
					<span className="tm-color-primary">
					Creative . Design . Business
					</span>
					<span className="tm-color-primary">{formatDate(data.createdAt)}</span>
				</div>
				<hr/>
				<div className="d-flex justify-content-between">
					<span>48 comments</span>
					<span>by {data.createdBy}</span>
				</div>
			</div>
				</>
				 )
				})}
	  </div>
	</>
  );
};
