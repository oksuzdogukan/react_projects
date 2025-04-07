import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../redux/slices/productSlice';
import Product from './Product'

function ProductList() {

    const dispatch = useDispatch();
    const { products } = useSelector((store) => store.products);
    // console.log(products);

    useEffect(() => {
        dispatch(getAllProducts())
    }, [])

    const searchTerm = useSelector((store) => store.products.searchTerm);
    
    
    const filteredProducts = products.filter((products) =>
        products.title.toLowerCase().includes(searchTerm.toLowerCase())
    );



    return (
        <div className='flex-row' style={{ flexWrap: 'wrap', marginTop: '20px' }}>
            {
                // Eğer filtrelenmiş ürün varsa, onları map'le
                filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <Product key={product.id} product={product} />
                    ))
                ) : (
                    // Filtrelenmiş ürün yoksa, "Ürün bulunamadı" mesajı göster
                    <p style={{ textAlign: 'center', width: '100%' }}>Ürün bulunamadı.</p>
                )
            }
        </div>
    );
}

export default ProductList