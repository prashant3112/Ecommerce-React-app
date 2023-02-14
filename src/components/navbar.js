import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const lengthItems = useSelector((state) => state.cartDetail.value);
  console.log(`lengthItems`, lengthItems);
  return (
    <div className="navbar">
      <div className="nav_box">
        <span className="my_shop">
          <Link to={`/`} style={{ color: "white", textDecoration: "none" }}>
            E-commerce
          </Link>
          <Link
            to={`/`}
            style={{
              color: "white",
              textDecoration: "none",
              marginLeft: "40px",
            }}
          >
            Products
          </Link>

          <Link to={`/addProduct`} style={{ textDecoration: "none" }}>
            <span className="mx-5 text-white" style={{ fontSize: "20px" }}>
              Add a Product <i className="fas fa-plus"></i>
            </span>
          </Link>
        </span>
        <div className="cart">
          <Link
            to={`/Cart`}
            style={{ textDecoration: "none", fontSize: "15px" }}
          >
            <span>
              <i className="fas fa-cart-plus"></i>
            </span>
            <span>{lengthItems?.length}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
