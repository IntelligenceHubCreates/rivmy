import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from '../pages/Home';
import Cart from '../pages/Cart';

class CartPage extends React.Component {
  render() {
    return (
        <div>
          <div className="py-1 bg-black">
            <div className="container">
              <div className="row no-gutters d-flex align-items-start align-items-center px-md-0">
                <div className="col-lg-12 d-block">
                  <div className="row d-flex">
                    <div className="col-md pr-4 d-flex topper align-items-center">
                      <div className="icon mr-2 d-flex justify-content-center align-items-center"><span className="icon-phone2" /></div>
                      <span className="text">+ 1235 2355 98</span>
                    </div>
                    <div className="col-md pr-4 d-flex topper align-items-center">
                      <div className="icon mr-2 d-flex justify-content-center align-items-center"><span className="icon-paper-plane" /></div>
                      <span className="text">youremail@email.com</span>
                    </div>
                    <div className="col-md-5 pr-4 d-flex topper align-items-center text-lg-right">
                      <span className="text">3-5 Business days delivery &amp; Free Returns</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
            <div className="container">
              <a className="navbar-brand" href="index.html">RIVMY</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="oi oi-menu" /> Menu
              </button>
              <div className="collapse navbar-collapse" id="ftco-nav">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item"><a href="index.html" className="nav-link">Home</a></li>
                  <li className="nav-item dropdown active">
                    <a className="nav-link dropdown-toggle" href="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Catalog</a>
                    <div className="dropdown-menu" aria-labelledby="dropdown04">
                      <a className="dropdown-item" href="shop.html">Shop</a>
                      <a className="dropdown-item" href="product-single.html">Single Product</a>
                      <a className="dropdown-item" href="cart.html">Cart</a>
                      <a className="dropdown-item" href="checkout.html">Checkout</a>
                    </div>
                  </li>
                  <li className="nav-item"><a href="about.html" className="nav-link">About</a></li>
                  <li className="nav-item"><a href="blog.html" className="nav-link">Blog</a></li>
                  <li className="nav-item"><a href="contact.html" className="nav-link">Contact</a></li>
                  <li className="nav-item cta cta-colored"><a href="cart.html" className="nav-link"><span className="icon-shopping_cart" />[0]</a></li>
                </ul>
              </div>
            </div>
          </nav>
          {/* END nav */}
          <div className="hero-wrap hero-bread" style={{backgroundImage: 'url("images/bg_6.jpg")'}}>
            <div className="container">
              <div className="row no-gutters slider-text align-items-center justify-content-center">
                <div className="col-md-9 ftco-animate text-center">
                  <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home</a></span> <span>Cart</span></p>
                  <h1 className="mb-0 bread">My Wishlist</h1>
                </div>
              </div>
            </div>
          </div>
          <section className="ftco-section ftco-cart">
            <div className="container">
              <div className="row">
                <div className="col-md-12 ftco-animate">
                  <div className="cart-list">
                    <table className="table">
                      <thead className="thead-primary">
                        <tr className="text-center">
                          <th>&nbsp;</th>
                          <th>&nbsp;</th>
                          <th>Product</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="text-center">
                          <td className="product-remove"><a href="#"><span className="ion-ios-close" /></a></td>
                          <td className="image-prod"><div className="img" style={{backgroundImage: 'url(images/product-3.jpg)'}} /></td>
                          <td className="product-name">
                            <h3>Nike Free RN 2019 iD</h3>
                            <p>Far far away, behind the word mountains, far from the countries</p>
                          </td>
                          <td className="price">$4.90</td>
                          <td className="quantity">
                            <div className="input-group mb-3">
                              <input type="text" name="quantity" className="quantity form-control input-number" defaultValue={1} min={1} max={100} />
                            </div>
                          </td>
                          <td className="total">$4.90</td>
                        </tr>{/* END TR*/}
                        <tr className="text-center">
                          <td className="product-remove"><a href="#"><span className="ion-ios-close" /></a></td>
                          <td className="image-prod"><div className="img" style={{backgroundImage: 'url(images/product-4.jpg)'}} /></td>
                          <td className="product-name">
                            <h3>Nike Free RN 2019 iD</h3>
                            <p>Far far away, behind the word mountains, far from the countries</p>
                          </td>
                          <td className="price">$15.70</td>
                          <td className="quantity">
                            <div className="input-group mb-3">
                              <input type="text" name="quantity" className="quantity form-control input-number" defaultValue={1} min={1} max={100} />
                            </div>
                          </td>
                          <td className="total">$15.70</td>
                        </tr>{/* END TR*/}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="row justify-content-start">
                <div className="col col-lg-5 col-md-6 mt-5 cart-wrap ftco-animate">
                  <div className="cart-total mb-3">
                    <h3>Cart Totals</h3>
                    <p className="d-flex">
                      <span>Subtotal</span>
                      <span>$20.60</span>
                    </p>
                    <p className="d-flex">
                      <span>Delivery</span>
                      <span>$0.00</span>
                    </p>
                    <p className="d-flex">
                      <span>Discount</span>
                      <span>$3.00</span>
                    </p>
                    <hr />
                    <p className="d-flex total-price">
                      <span>Total</span>
                      <span>$17.60</span>
                    </p>
                  </div>
                  <p className="text-center"><a href="checkout.html" className="btn btn-primary py-3 px-4">Proceed to Checkout</a></p>
                </div>
              </div>
            </div>
          </section>
          <footer className="ftco-footer ftco-section">
            <div className="container">
              <div className="row">
                <div className="mouse">
                  <a href="#" className="mouse-icon">
                    <div className="mouse-wheel"><span className="ion-ios-arrow-up" /></div>
                  </a>
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-md">
                  <div className="ftco-footer-widget mb-4">
                    <h2 className="ftco-heading-2">Minishop</h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                    <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                      <li className="ftco-animate"><a href="#"><span className="icon-twitter" /></a></li>
                      <li className="ftco-animate"><a href="#"><span className="icon-facebook" /></a></li>
                      <li className="ftco-animate"><a href="#"><span className="icon-instagram" /></a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-md">
                  <div className="ftco-footer-widget mb-4 ml-md-5">
                    <h2 className="ftco-heading-2">Menu</h2>
                    <ul className="list-unstyled">
                      <li><a href="#" className="py-2 d-block">Shop</a></li>
                      <li><a href="#" className="py-2 d-block">About</a></li>
                      <li><a href="#" className="py-2 d-block">Journal</a></li>
                      <li><a href="#" className="py-2 d-block">Contact Us</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="ftco-footer-widget mb-4">
                    <h2 className="ftco-heading-2">Help</h2>
                    <div className="d-flex">
                      <ul className="list-unstyled mr-l-5 pr-l-3 mr-4">
                        <li><a href="#" className="py-2 d-block">Shipping Information</a></li>
                        <li><a href="#" className="py-2 d-block">Returns &amp; Exchange</a></li>
                        <li><a href="#" className="py-2 d-block">Terms &amp; Conditions</a></li>
                        <li><a href="#" className="py-2 d-block">Privacy Policy</a></li>
                      </ul>
                      <ul className="list-unstyled">
                        <li><a href="#" className="py-2 d-block">FAQs</a></li>
                        <li><a href="#" className="py-2 d-block">Contact</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md">
                  <div className="ftco-footer-widget mb-4">
                    <h2 className="ftco-heading-2">Have a Questions?</h2>
                    <div className="block-23 mb-3">
                      <ul>
                        <li><span className="icon icon-map-marker" /><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                        <li><a href="#"><span className="icon icon-phone" /><span className="text">+2 392 3929 210</span></a></li>
                        <li><a href="#"><span className="icon icon-envelope" /><span className="text">info@yourdomain.com</span></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 text-center">
                  <p className="text-center text-md-end text-xl-start"> 
                    All Rights Reserved
                  </p>
                </div>
              </div>
            </div>
          </footer>
          {/* loader */}
          {/*<div id="ftco-loader" className="show fullscreen"><svg className="circular" width="48px" height="48px"><circle className="path-bg" cx={24} cy={24} r={22} fill="none" strokeWidth={4} stroke="#eeeeee" /><circle className="path" cx={24} cy={24} r={22} fill="none" strokeWidth={4} strokeMiterlimit={10} stroke="#F96D00" /></svg></div>*/}
        </div>
      );
    }
  }

  export default CartPage;