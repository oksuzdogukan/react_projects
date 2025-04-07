import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import Loading from "./components/Loading";
import RouterConfig from "./config/RouterConfig";
import PageContainer from "./container/PageContainer";
import Drawer from '@mui/material/Drawer';
import './css/Cart.css'
import { calculateCart, removeProduct, setDrawer } from "./redux/slices/cartSlice";
import { useEffect } from "react";



function App() {

  const { products, drawer, totalAmount } = useSelector((store) => store.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateCart());
  },[])

  return (
    <div>
      <PageContainer>
        <Header />
        <RouterConfig />
        <Loading />
        <Drawer open={drawer} anchor={"right"} onClose={()=> dispatch(setDrawer())}>
          <div>
            <h3 className="cart-title">Sepetiniz</h3>
          </div>

          {
            products && products.map((product) => {
              return (
                <div key={product.id}>
                  <div className="cart">
                    <img className="cart-img" src={product.image} width={50} height={70} alt="#" />
                    <p className="product-title">{product.title} <span style={{ fontWeight:'800'}}>Adet:</span> ({product.count})</p>
                    <p>${product.price}</p>
                    <button onClick={()=> dispatch(removeProduct({id : product.id}))} className="cart-del-btn">Sil</button>
                  </div>
                </div>
                
              )
            })
            
          }
          <div style={{textAlign:'center'}}>

            <p>Toplam Tutar: {totalAmount}</p>
          </div>
          
        </Drawer>
      </PageContainer>
    </div>
  );
}

export default App;
