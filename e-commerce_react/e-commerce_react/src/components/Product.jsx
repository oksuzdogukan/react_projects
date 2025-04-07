import React from 'react'
import '../css/Product.css'
import { useNavigate } from 'react-router-dom'

function Product({ product }) {

    const navigate = useNavigate();

    const { id, price, image, title } = product;

    

    return (
        <div className='card flex-column'>

            <img className='image' src={image} alt="" />

            <div>
                <p style={{ textAlign: 'center', height: '50px' }}>{title}</p>
                <h3 style={{ textAlign: 'center' }}>${price}</h3>
            </div>

            <div>
                <button onClick={() => navigate("/product-details/" + id)} className='detail-button'>Detayina Git</button>
            </div>
        </div>
    )
}

export default Product