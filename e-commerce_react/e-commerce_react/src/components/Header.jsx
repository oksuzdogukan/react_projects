import React, { useState } from "react";
import "../css/Header.css";
import { SlBasket } from "react-icons/sl";
import { GoSun } from "react-icons/go";
import { FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { useDispatch, useSelector } from "react-redux";
import { setDrawer } from "../redux/slices/cartSlice";
import { setSearchTerm } from "../redux/slices/productSlice";

function Header() {
  const [theme, setTheme] = useState(true);

  const { products } = useSelector((store) => store.cart);

  const dispatch = useDispatch();

  const handleSearchChange = (e) => { 
    dispatch(setSearchTerm(e.target.value));
  }


  const changeTheme = () => {
    const html = document.getElementById("html");
    setTheme(!theme);
    if (theme) {
      html.style.backgroundColor = " #1b263b";
      html.style.color = "#fff";
    } else {
      html.style.backgroundColor = "#fff";
      html.style.color = "#1b263b";
    }
  };

  return (
    <div className="header">
      <div className="flex-row">
        <Link to="/">
          <img className="logo" src="./src/img/logo.png" alt="#" />
        </Link>
        <p className="logo-text">ÖKSÜZ A.Ş</p>
      </div>

      <div className="flex-row">
        <input className="search-input" type="text" placeholder="Ürün Ara" onChange={handleSearchChange}/>

        <div>
          {theme ? (
            <FaMoon className="icon" onClick={changeTheme} />
          ) : (
            <GoSun className="icon" onClick={changeTheme} />
          )}

          <Badge badgeContent={products.length} color="primary">
            <SlBasket onClick={()=> dispatch(setDrawer())} style={{ marginRight: "5px" }} className="icon" />
          </Badge>
        </div>

        
      </div>
    </div>
  );
}

export default Header;
