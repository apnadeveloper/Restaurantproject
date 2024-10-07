import React from 'react'

function Populardishes() {
  return (
    <>
    {/* <!-- Popular Dishes --> */}
    <section id="populardishes">
<section id="popular-dishes" className="text-center">
    <div className="container">
        <p className="sub">POPULAR DISHES</p>
        <h2 className="mb-4 text-black">Best Selling Dishes</h2>
        {/* <!-- Row of Cards --> */}
        <div className="row">
            {/* <!-- Card 1 --> */}
            <div className="col-md-4 col-lg-4 mb-4">
                <div className="card dish-card">
                    <img src="/img-1.png" className="card-img-top" alt="Dish 1" />
                    <div className="card-body">
                        <h5 className="card-title">Dish Title 1</h5>
                        <p className="card-price">$12.99</p>
                    </div>
                </div>
            </div>

            {/* <!-- Card 2 --> */}
            <div className="col-md-4 col-lg-4 mb-4">
                <div className="card dish-card">
                    <img src="/img-2.png" className="card-img-top" alt="Dish 2" />
                    <div className="card-body">
                        <h5 className="card-title">Dish Title 2</h5>
                        <p className="card-price">$14.99</p>
                    </div>
                </div>
            </div>

            {/* <!-- Card 3 --> */}
            <div className="col-md-4 col-lg-4 mb-4">
                <div className="card dish-card">
                    <img src="/img-3.png" className="card-img-top" alt="Dish 3" />
                    <div className="card-body">
                        <h5 className="card-title">Dish Title 3</h5>
                        <p className="card-price">$16.99</p>
                    </div>
                </div>
            </div>

            {/* <!-- Card 4 --> */}
            <div className="col-md-4 col-lg-4 mb-4">
                <div className="card dish-card">
                    <img src="/img-4.png" className="card-img-top" alt="Dish 4" />
                    <div className="card-body">
                        <h5 className="card-title">Dish Title 4</h5>
                        <p className="card-price">$10.99</p>
                    </div>
                </div>
            </div>

            {/* <!-- Card 5 --> */}
            <div className="col-md-4 col-lg-4 mb-4">
                <div className="card dish-card">
                    <img src="/img-5.png" className="card-img-top" alt="Dish 5" />
                    <div className="card-body">
                        <h5 className="card-title">Dish Title 5</h5>
                        <p className="card-price">$18.99</p>
                    </div>
                </div>
            </div>

            {/* <!-- Card 6 --> */}
            <div className="col-md-4 col-lg-4 mb-4">
                <div className="card dish-card">
                    <img src="/img-6.png" className="card-img-top" alt="Dish 6" />
                    <div className="card-body">
                        <h5 className="card-title">Dish Title 6</h5>
                        <p className="card-price">$9.99</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</section>

</>
  )
}

export default Populardishes