import React from 'react'

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark text-white fixed-top">
                <div className="container">
                    <img style={{ width: '10%' }} src="/logo.png" />
                    <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#bestdishes">BEST DISHES</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#specialoffer">SPECIAL OFFERS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#about">ABOUT US</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#populardishes">POPULAR DISHES</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#ourmenu">OUR MENU</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#chefs">CHEF'S</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#testimonial">TESTIMONIAL</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#contact">CONTACT</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* <!--slider--> */}
            <div className="bs-container-fluid my-5">
                <div className="row">
                    <div className="col-md-12">
                        <img width="100%" src="/slides.gif" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar