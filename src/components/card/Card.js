import React from 'react'

import './Card.css'

function Card() {
    return (
        <div className = "card">
            <div class="prod-details">
                <div className = "title">
                    
                    Eau Sidi Ali metalic
                </div>
                <p>
                details about quantity L/kg/units
                </p>
                <p>
                 unit price
                </p>
            </div>
            <div class="prod-pres">
                <img className = "product_image" src="https://www.carrefour.fr/media/200x200/Photosite/PGC/BOISSONS/3274080001005_PHOTOSITE_20210916_221012_0.jpg?placeholder=1" alt="product image"/>
                <p className = "quantity">
                    6*1.5L
                </p>
            </div>
            <div className = "price-cart">
                <div className = "price">
                    100DH 
                </div>
                <div className = "add-cart">
                    <i class="fas fa-shopping-cart"></i>
                </div>
            </div>
        </div>
    )
}

export default Card
