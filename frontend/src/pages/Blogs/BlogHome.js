import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export const BlogHome = () => {
    const navigate = useNavigate();
    const [modal, setModal] = useState(false)
    const toggle = () => {
        setModal(!modal)
    }
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'end', paddingTop: '10px' }}>
                <button type="button" onClick={() => toggle()} class="btn btn-primary" >Create Post
                </button>
            </div>
            <div className="container-fluid">
                <div className="row tm-row">
                    <div className="col-12">
                        <form method="GET" className="form-inline tm-mb-80 tm-search-form mt-5 mr-5">
                            <input className="form-control tm-search-input" name="query" type="text" placeholder="Search..." aria-label="Search" />
                            <button className="tm-search-button" type="submit">
                                <i className="fas fa-search tm-search-icon" aria-hidden="true"></i>
                            </button>
                        </form>
                    </div>
                </div>

                <div className="row">
                    <div className="col"> <a onClick={() => navigate("/singalPost")} className="effect-lily tm-post-link tm-pt-60">
                        <div className="tm-post-link-inner">
                            <img src="img/img-01.jpg" alt="Image" className="img-fluid" />
                        </div>
                        <span className="position-absolute tm-new-badge">New</span>
                        <h2 className="tm-pt-30 tm-color-primary tm-post-title">Simple and useful HTML layout</h2>
                    </a>
                        <p className="tm-pt-30">
                            There is a clickable image with beautiful hover effect and active title link for each post item.
                            Left side is a sticky menu bar. Right side is a blog content that will scroll up and down.
                        </p>
                        <div className="d-flex justify-content-between tm-pt-45">
                            <span className="tm-color-primary">Travel . Events</span>
                            <span className="tm-color-primary">June 24, 2020</span>
                        </div>
                        {/* <hr> */}
                        <div className="d-flex justify-content-between">
                            <span>36 comments</span>
                            <span>by Admin Nat</span>
                        </div></div>

                    <div className="col"><a href="post.html" className="effect-lily tm-post-link tm-pt-60">
                        <div className=" tm-post-link-inner">
                            <img src="img/img-02.jpg" alt="Image" className="img-fluid" />
                        </div>
                        <span className="position-absolute tm-new-badge">New</span>
                        <h2 className="tm-pt-30 tm-color-primary tm-post-title">Multi-purpose blog template</h2>
                    </a>
                        <p className="tm-pt-30">
                            <a rel="nofollow" onClick={() => navigate("/singalPost")} target="_blank">Xtra Blog</a>  is a multi-purpose HTML CSS template from TemplateMo website.
                            Blog list, single post, about, contact pages are included. Left sidebar fixed width and content area is a fluid full-width.
                        </p>
                        <div className="d-flex justify-content-between tm-pt-45">
                            <span className="tm-color-primary">Creative . Design . Business</span>
                            <span className="tm-color-primary">June 16, 2020</span>
                        </div>
                        {/* <hr> */}
                        <div className="d-flex justify-content-between">
                            <span>48 comments</span>
                            <span>by Admin Sam</span>
                        </div></div>
                </div>

            </div>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Create Post</ModalHeader>
                <ModalBody>
                    <form action="">

                        <div className="mb-4">
                            <input className="form-control" name="email" type="text" placeholder='Title' />
                        </div>
                        <div className="mb-4">
                            <textarea className="form-control" name="message" rows="6" placeholder='Content'></textarea>
                        </div>
                        <div className="mb-4">
                            <input accept="image/png, image/gif, image/jpeg" type="file" className="form-control" name="message" rows="6" ></input>
                        </div>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" >Submit</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </>
    )
}
