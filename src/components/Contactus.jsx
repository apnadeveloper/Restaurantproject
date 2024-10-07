import React from 'react'

function Contactus() {
  return (
    // <!--contact-->
        <section id="contact" className="back container-fluid text-black text-center my-3">
            <div className="row d-flex justify-aligns-start py-5 ">
                <div className="col-md-4">
                <i className="bi bi-geo-alt-fill fs-3 fw-bold"></i>
                    <span className="fs-5 fw-bold">Address</span>
                    <p>4648 Rocky Road Philadelphia</p>
                </div>
                <div className="col-md-4">
                    <i className="bi bi-envelope fs-3 fw-bold"></i>
                    <span className="fs-5 fw-bold">Send Email</span>
                    <p>info@apnarestaurant.com</p>
                </div>
                <div className="col-md-4"><i className="bi bi-geo-alt-fill fs-3 fw-bold"></i>
                    <span className="fs-5 fw-bold">Call Emergency</span>
                    <p>+88 0123 654 99</p>
                </div>
            </div>
        </section>
  )
}

export default Contactus