import React from 'react'

function Footer() {
  return (
    <section>
<footer className="bg-dark text-white pt-5">
    <div className="container">
        <div className="row">
            {/* <!-- First Column: Logo, Description, Social Media Icons --> */}
            <div className="col-md-3">
                <h5 className="mb-3 fw-bold">About Us</h5>
                <img width="20%" src="/logo.png" alt="Restaurant Logo" className="mb-3 logo-img" />
                <p className="small">
                    Welcome to our restaurant. We provide the best culinary experience with fresh ingredients and expert chefs.
                </p>
                {/* <!-- Social Media Icons --> */}
                <div className="social-icons">
                    <a href="#"><i className="fab fa-facebook-f text-white me-2"></i></a>
                    <a href="#"><i className="fab fa-twitter text-white me-2"></i></a>
                    <a href="#"><i className="fab fa-instagram text-white"></i></a>
                </div>
            </div>

            {/* <!-- Second Column: Quick Links --> */}
            <div className="col-md-3">
                <h5 className="mb-3 fw-bold">Quick Links</h5>
                <ul className="list-unstyled">
                    <li><a href="#bestdishes" className="text-white text-decoration-none">BEST DISHES</a></li>
                    <li><a href="#specialoffer" className="text-white text-decoration-none">SPECIAL OFFERS</a></li>
                    <li><a href="#about" className="text-white text-decoration-none">ABOUT US</a></li>
                    <li><a href="#populardishes" className="text-white text-decoration-none">POPULAR DISHES</a></li>
                </ul>
            </div>

            {/* <!-- Third Column: Our Menu --> */}
            <div className="col-md-3">
                <h5 className="mb-3 fw-bold">Our Menu</h5>
                <ul className="list-unstyled">
                    <li><a href="#ourmenu" className="text-white text-decoration-none">OUR MENU</a></li>
                    <li><a href="#chefs" className="text-white text-decoration-none">CHEF'S</a></li>
                    <li><a href="#testimonial" className="text-white text-decoration-none">TESTIMONIAL</a></li>
                    <li><a href="#contact" className="text-white text-decoration-none">CONTACT</a></li>
                </ul>
            </div>

            {/* <!-- Fourth Column: Contact Info --> */}
            <div className="col-md-3">
                <h5 className="mb-3 fw-bold">Contact</h5>
                <p className="mb-1"><i className="fas fa-phone-alt me-2"></i>+123 456 7890</p>
                <p className="mb-1"><i className="fas fa-envelope me-2"></i>info@fastrestaurant.com</p>
            </div>
        </div>

        {/* <!-- Second Row: Copyright Section --> */}
        <div className="row">
            <div className="col text-center">
                <p className="small mb-0 pb-2">&copy; 2024 Fast Restaurant. All Rights Reserved.</p>
            </div>
        </div>
    </div>

</footer>
</section>
  )
}

export default Footer