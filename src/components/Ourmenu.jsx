import React from 'react'

function Ourmenu() {
    return (
        <div id="ourmenu" className="text-center">
                    <div className="container">
                        <p className="sub">FOOD MENU</p>
                        <h2 className="mb-4 text-black fw-bold">Best Fresh Menu</h2>
                    </div>

                    <div className="container">
                        <div className="row justify-content-center text-center mb-4">
                            {/* <!-- Salads --> */}
                            <div className="col-md-3 col-6 d-flex d-md-flex justify-content-start justify-content-md-center align-items-center mb-3">
                                <img src="img-1.png" alt="Salads" className="category-img me-2" />
                                <h4 className="text-orange">Salads</h4>
                            </div>
                            {/* <!-- Main Course --> */}
                            <div className="col-md-3 col-6 d-flex d-md-flex justify-content-start justify-content-md-center align-items-center mb-3">
                                <img src="img-2.png" alt="Main Course" className="category-img me-2" />
                                <h4 className="text-orange">Main Course</h4>
                            </div>
                            {/* <!-- Desserts --> */}
                            <div className="col-md-3 col-6 d-flex d-md-flex justify-content-start justify-content-md-center align-items-center mb-3">
                                <img src="img-3.png" alt="Desserts" className="category-img me-2" />
                                <h4 className="text-orange">Desserts</h4>
                            </div>
                            {/* <!-- Drinks --> */}
                            <div className="col-md-3 col-6 d-flex d-md-flex justify-content-start justify-content-md-center align-items-center mb-3">
                                <img src="img-4.png" alt="Drinks" className="category-img me-2" />
                                <h4 className="text-orange">Drinks</h4>
                            </div>
                        </div>
                    </div>

            <div className="row mx-4 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
            {/* <!-- Left Column (5 menus) --> */}
            <div class="col-md-6">
                {/* <!-- Menu Item 1 --> */}
                <div className="menu-item row align-items-center mb-4">
                    <div className="col-8 d-flex align-items-center">
                        <img src="img-1.png" alt="Menu 1" class="menu-img" />
                        <h5 className="menu-title ms-3 text-black fw-bold">Fresh Salad</h5>
                    </div>
                    <div className="col-4 text-end">
                        <span className="menu-price fw-bold fs-4">$8.99</span>
                    </div>
                </div>
                <hr />

                <div className="menu-item row align-items-center mb-4">
                    <div className="col-8 d-flex align-items-center">
                        <img src="img-1.png" alt="Menu 1" class="menu-img" />
                        <h5 className="menu-title ms-3 text-black fw-bold">Grilled Chicken</h5>
                    </div>
                    <div className="col-4 text-end">
                        <span className="menu-price fw-bold fs-4">$8.99</span>
                    </div>
                </div>
                <hr />

                <div className="menu-item row align-items-center mb-4">
                    <div className="col-8 d-flex align-items-center">
                        <img src="img-1.png" alt="Menu 1" class="menu-img" />
                        <h5 className="menu-title ms-3 text-black fw-bold">Grilled Chicken</h5>
                    </div>
                    <div className="col-4 text-end">
                        <span className="menu-price fw-bold fs-4">$8.99</span>
                    </div>
                </div>
                <hr />

                <div className="menu-item row align-items-center mb-4">
                    <div className="col-8 d-flex align-items-center">
                        <img src="img-1.png" alt="Menu 1" class="menu-img" />
                        <h5 className="menu-title ms-3 text-black fw-bold">Cheesecake</h5>
                    </div>
                    <div className="col-4 text-end">
                        <span className="menu-price fw-bold fs-4">$8.99</span>
                    </div>
                </div>
                <hr />

                <div className="menu-item row align-items-center mb-4">
                    <div className="col-8 d-flex align-items-center">
                        <img src="img-1.png" alt="Menu 1" class="menu-img" />
                        <h5 className="menu-title ms-3 text-black fw-bold">Tiramisu</h5>
                    </div>
                    <div className="col-4 text-end">
                        <span className="menu-price fw-bold fs-4">$8.99</span>
                    </div>
                </div>
                <hr />
              </div>

              <div class="col-md-6">
                {/* <!-- Menu Item 1 --> */}
                <div className="menu-item row align-items-center mb-4">
                    <div className="col-8 d-flex align-items-center">
                        <img src="img-1.png" alt="Menu 1" class="menu-img" />
                        <h5 className="menu-title ms-3 text-black fw-bold">Fresh Salad</h5>
                    </div>
                    <div className="col-4 text-end">
                        <span className="menu-price fw-bold fs-4">$8.99</span>
                    </div>
                </div>
                <hr />

                <div className="menu-item row align-items-center mb-4">
                    <div className="col-8 d-flex align-items-center">
                        <img src="img-1.png" alt="Menu 1" class="menu-img" />
                        <h5 className="menu-title ms-3 text-black fw-bold">Grilled Chicken</h5>
                    </div>
                    <div className="col-4 text-end">
                        <span className="menu-price fw-bold fs-4">$8.99</span>
                    </div>
                </div>
                <hr />

                <div className="menu-item row align-items-center mb-4">
                    <div className="col-8 d-flex align-items-center">
                        <img src="img-1.png" alt="Menu 1" class="menu-img" />
                        <h5 className="menu-title ms-3 text-black fw-bold">Grilled Chicken</h5>
                    </div>
                    <div className="col-4 text-end">
                        <span className="menu-price fw-bold fs-4">$8.99</span>
                    </div>
                </div>
                <hr />

                <div className="menu-item row align-items-center mb-4">
                    <div className="col-8 d-flex align-items-center">
                        <img src="img-1.png" alt="Menu 1" class="menu-img" />
                        <h5 className="menu-title ms-3 text-black fw-bold">Cheesecake</h5>
                    </div>
                    <div className="col-4 text-end">
                        <span className="menu-price fw-bold fs-4">$8.99</span>
                    </div>
                </div>
                <hr />

                <div className="menu-item row align-items-center mb-4">
                    <div className="col-8 d-flex align-items-center">
                        <img src="img-1.png" alt="Menu 1" class="menu-img" />
                        <h5 className="menu-title ms-3 text-black fw-bold">Tiramisu</h5>
                    </div>
                    <div className="col-4 text-end">
                        <span className="menu-price fw-bold fs-4">$8.99</span>
                    </div>
                </div>
                <hr />
            </div>
           </div>
           </div>

)
}

export default Ourmenu