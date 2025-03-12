import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { setSelectedProducts } from '../redux/slices/productSlice';
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import '../css/ProductDetails.css'
import { addToCart, calculateCart } from '../redux/slices/cartSlice';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';


function ProductDetails() {
    const { id } = useParams();
    const { products, selectedProduct } = useSelector((store) => store.products);
    const { price, image, title, description } = selectedProduct;

    const dispatch = useDispatch();

    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }


    const [alert, setAlert] = useState(false);

    const addCart = () => {
        const payload = {
            id,
            price,
            image,
            title,
            description,
            count
        }
        dispatch(addToCart(payload));
        dispatch(calculateCart())
    }

    const alertOpen = () => {
        setAlert(true);
    }
    
    const alertClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setAlert(false);
    }


    useEffect(() => {
        getProductById();
    }, [])

    const getProductById = () => {
        products && products.map((product) => {
            if (product.id == id) {
                dispatch(setSelectedProducts(product))
            }
        })
    }

    return (
        <div className='flex-row' style={{ marginTop: '30px' }}>
            <div style={{ marginRight: '60px' }}>
                <img src={image} width={350} height={450} style={{ borderRadius: '20px' }} alt="" />
            </div>

            <div className='flex-column' style={{ width: '500px' }}>
                <h2>{title}</h2>
                <h3>{description}</h3>
                <h1>${price}</h1>

                <div className='flex-row' style={{ gap: '10px' }}>
                    <CiCircleMinus onClick={decrement} style={{ fontSize: '34px' }} /> <span style={{ fontSize: '30px' }}>{count}</span> <CiCirclePlus onClick={increment} style={{ fontSize: '34px' }} />
                </div>

                <div>
                    <button onClick={()=> {addCart(), alertOpen()}}  className='add-cart-btn'>Sepete Ekle</button>
                </div>

            </div>

        {/* alert area */}
        <Snackbar open={alert} autoHideDuration={1500} onClose={alertClose} >
            <Alert
            onClose={alertClose}
            severity='success'
            variant='filled'
            sx={{ width: '100%' }}
            >
            Basariyla Sepete Eklendi!
            </Alert>
        </Snackbar>
        </div>
    )
}

export default ProductDetails