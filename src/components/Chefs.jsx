import React from 'react'

function Chefs() {
  return (
<>
{/* <!--our chef--> */}
    <section id="chefs" className="container">
        <div className="row text-center my-5">
            <div className="col">
                <p className="sub">OUR CHEFE</p>
                <h3 className="fw-bold fs-1">Meet Our Expert Chefe</h3>
            </div>
        </div>
        <div className="row text-center">
            <div className="col-md-4">
                <img width="50%" src="/chef-1.png" />
                <div className="chef-top bg-light rounded-5 py-5 rounded-bottom-0 shadow-lg p-3 mb-5 bg-body-tertiary rounded" >
                <h4 className="pt-3 fw-bold">Ralph Edwards</h4>
                <p>Chef Lead</p>
                </div>
            </div>
            <div className="col-md-4">
                <img width="50%" src="/chef-2.png" />
                <div className="chef-top bg-light rounded-5 py-5 rounded-bottom-0 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                <h4 className="pt-3 fw-bold">Leslie Alexander</h4>
                <p>Chef Assistant</p>
                </div>
            </div>
            <div className="col-md-4">
                <img width="50%" src="/chef-3.png" />
                <div className="chef-top bg-light rounded-5 py-5 rounded-bottom-0 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                <h4 className="pt-3 fw-bold">Ronald Richards</h4>
                <p>Chef Lead</p>
            </div>
        </div>
    </div>
    </section>
</>
  )
}

export default Chefs