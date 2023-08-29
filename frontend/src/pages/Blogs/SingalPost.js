import React, {useState,useEffect} from "react";
import {useLocation, useNavigate } from "react-router";
import { TopBar } from "./TopBar";
import axios from "axios";
import {model} from 'reactstrap'
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

export const SingalPost = () => {
	const user = localStorage.getItem('user')
	const userObj = JSON.parse(user)
	const token = userObj.token;
	const location = useLocation();
	const [data, setData] = useState([])
	const navigate = useNavigate()
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
		const result = await axios.get(API_URL + `/post/list/${location.state}`,{
		headers: headers
		})
		try {
			setData(result.data.data);
		} catch (error) {
			console.log(error);
		}
	};
  return (
	<div className="container">
	  <div className="row">
			<TopBar />
			{data.map((detail) => {
				return (
					<div className="col-12">
						<div className="row tm-row">
							<div className="col-12 mt-5">
							<img
								width="800"
								height="535"
								src="/img/img-01.jpg"
								className="tm-mb-40"
							/>
							</div>
						</div>
						<div className="row tm-row">
							<div className="col-12">
							<div>
								<div className="mb-4">
								<h2 className="pt-2 tm-color-primary tm-post-title">
									{detail.title}
								</h2>
								<p className="tm-mb-40">{formatDate(detail.createdAt)} posted by {detail.createdBy}</p>
								<p>
									{detail.content}
								</p>
								<span className="d-block text-right tm-color-primary">
									Creative . Design . Business
								</span>
								</div>
								<div>
								<h2 className="tm-color-primary tm-post-title">Comments</h2>
								<div className="tm-comment tm-mb-45">
									<figure className="tm-comment-figure">
									<img
										src="img/comment-1.jpg"
										alt="Image"
										className="mb-2 rounded-circle img-thumbnail"
									/>
									<figcaption className="tm-color-primary text-center">
										Mark Sonny
									</figcaption>
									</figure>
									<div>
									<p>
										Praesent aliquam ex vel lectus ornare tritique. Nunc et
										eros quis enim feugiat tincidunt et vitae dui. Nullam
										consectetur justo ac ex laoreet rhoncus. Nunc id leo
										pretium, faucibus sapien vel, euismod turpis.
									</p>
									<div className="d-flex justify-content-between">
										<a href="#" className="tm-color-primary">
										REPLY
										</a>
										<span className="tm-color-primary">June 14, 2020</span>
									</div>
									</div>
								</div>
								<div className="tm-comment-reply tm-mb-45">
									
									<div className="tm-comment">
									<figure className="tm-comment-figure">
										<img
										src="img/comment-2.jpg"
										alt="Image"
										className="mb-2 rounded-circle img-thumbnail"
										/>
										<figcaption className="tm-color-primary text-center">
										Jewel Soft
										</figcaption>
									</figure>
									<p>
										Nunc et eros quis enim feugiat tincidunt et vitae dui.
										Nullam consectetur justo ac ex laoreet rhoncus. Nunc id
										leo pretium, faucibus sapien vel, euismod turpis.
									</p>
									</div>
									<span className="d-block text-right tm-color-primary">
									June 21, 2020
									</span>
								</div>
								<div className="col-12 w-75 " style={{ marginLeft: "80px" }}>
									<form action="">
									<h2 className="tm-color-primary tm-post-title mb-4">
										Your comment
									</h2>
									<div className="mb-4">
										<input
										className="form-control"
										name="name"
										type="text"
										/>
									</div>
									<div className="mb-4">
										<input
										className="form-control"
										name="email"
										type="text"
										/>
									</div>
									<div className="mb-4">
										<textarea
										className="form-control"
										name="message"
										rows="6"
										></textarea>
									</div>
									<div className="text-right">
										<button className="tm-btn tm-btn-primary tm-btn-small">
										Submit
										</button>
									</div>
									</form>
								</div>
								</div>
							</div>
							</div>
						</div>
					</div>
				)
			})}
	  </div>
	</div>
  );
};
