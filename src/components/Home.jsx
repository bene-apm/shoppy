import React from 'react'
import Products from './Products';

const Home = () => {
    return (
        <div className='hero'>
            <div className="card bg-dark text-white border-0">
                <img className="card-img" href="https://www.freepik.com/free-photo/stylish-asian-girl-shopper-wears-sunglasses-holding-shopping-bag-smartphone-going-discounts-stores-standing-white-background_25980263.htm#query=shopping%20white%20background&position=12&from_view=search" height='550px'/>
                    <div className="card-img-overlay d-flex flex-column justify-content-center">
                        <div className="container bg">
                        <h5 className="card-title display-3 fw-bolder mb-0 text-warning">NEW ARRIVALS </h5>
                        <p className="card-text lead fs-2 text-warning">BEFORE ANYONE ELSE</p>
                        </div>
                    </div>
            </div>
            <Products/>
        </div>
    )
}

export default Home;