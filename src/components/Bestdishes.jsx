import React from 'react';

function Bestdishes() {
  // Dish data array - yahan aap apni marzi se items add/remove kar sakte hain
  const dishes = [
    {
      id: 1,
      name: 'Grilled Chicken',
      description: 'Served with Fries',
      price: '$12.5',
      img: 'img-7.png',
    },
    {
      id: 2,
      name: 'Zinger Burger',
      description: 'Crispy & Spicy',
      price: '$10.0',
      img: 'img-2.png',
    },
    {
      id: 3,
      name: 'Crispy Fries',
      description: 'With Cheese Sauce',
      price: '$8.0',
      img: 'img-3.png',
    },
    {
      id: 4,
      name: 'Chicken Wrap',
      description: 'With Garlic Mayo',
      price: '$11.0',
      img: 'img-4.png',
    },
    {
      id: 5,
      name: 'BBQ Platter',
      description: 'Family Meal',
      price: '$25.0',
      img: 'img-5.png',
    },
    {
      id: 6,
      name: 'Spicy Wings',
      description: '6 Pieces',
      price: '$9.5',
      img: 'img-6.png',
    },
    {
      id: 7,
      name: 'Chicken Tikka',
      description: 'With Mint Sauce',
      price: '$14.0',
      img: 'img-4.png', // different image
    },
    {
      id: 8,
      name: 'Veggie Pizza',
      description: 'Thin Crust',
      price: '$13.0',
      img: 'img-4.png', // you can change
    },
  ];

  // Split dishes into two groups of 4 for carousel slides
  const slide1 = dishes.slice(0, 4);
  const slide2 = dishes.slice(4, 8);

  // Helper to render a row of dishes
  const renderDishRow = (dishesArray) => (
    <div className="row">
      {dishesArray.map((dish) => (
        <div className="col-md-3" key={dish.id}>
          <img
            src={dish.img}
            className="d-block w-100 rounded-circle food-img"
            alt={dish.name}
          />
          <div className="m-3 py-3 my-auto text-black bg-light border rounded-5">
            <h5 className="text-danger fw-bold">{dish.name}</h5>
            <p className="fw-bold">{dish.description}</p>
            <p className="text-danger fw-bold">{dish.price}</p>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <div id="bestdishes">
        <section id="best-food" className="text-center sub">
          <div className="container">
            <p className="sub">BEST FOOD DISHES</p>
            <h2 className="mb-4 text-dark">Best Selling Dishes</h2>
            {/* Bootstrap Carousel */}
            <div id="foodCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  {renderDishRow(slide1)}
                </div>
                <div className="carousel-item">
                  {renderDishRow(slide2)}
                </div>
              </div>
              {/* Optional: add carousel controls if needed */}
              {/* <button className="carousel-control-prev" type="button" data-bs-target="#foodCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#foodCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button> */}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Bestdishes;
