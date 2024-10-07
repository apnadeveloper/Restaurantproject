import React from 'react'

function Testimonial() {
  return (
    // <!-- testimonial-->
        <section id="testimonial" className="container-fluid">
            <div className="row bg-dark">
                <div className="col-md-6" width="100%">
                    <img width="100%" src="/testimonialleft.png" />
                 </div>
                 <div className="col-md-6 p-5 my-5">
                      <h3 className="fw-bold text-center">Testimonial</h3>
                     <h3 className="text-white fw-bold text-center">What our Clients Say</h3>
                     <div className="row bg-light text-black rounded py-4">
                         <div className="col-md-2">
                         <img width="100%" className="rounded-circle" src="/testi.png" />
                         </div>
                         <div className="col-md-10">
                         <h4>Albert Flores</h4>
                         <p>Amazing food and quick service! I stopped by during my lunch break and was surprised at how fast I got my order. The burgers were hot, the fries were crispy, and everything tasted fresh.</p>
                         </div>
                     </div>
                 </div>
            </div>
</section>
  )
}

export default Testimonial