import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from '../pages/Home';
import Cart from '../pages/Cart';

class ShopPage extends React.Component {
  render() {
    return (
                <div>
                  <title>Minishop - </title>
                  <meta charSet="utf-8" />
                  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800" rel="stylesheet" />
                  <link rel="stylesheet" href="css/open-iconic-bootstrap.min.css" />
                  <link rel="stylesheet" href="css/animate.css" />
                  <link rel="stylesheet" href="css/owl.carousel.min.css" />
                  <link rel="stylesheet" href="css/owl.theme.default.min.css" />
                  <link rel="stylesheet" href="css/magnific-popup.css" />
                  <link rel="stylesheet" href="css/aos.css" />
                  <link rel="stylesheet" href="css/ionicons.min.css" />
                  <link rel="stylesheet" href="css/bootstrap-datepicker.css" />
                  <link rel="stylesheet" href="css/jquery.timepicker.css" />
                  <link rel="stylesheet" href="css/flaticon.css" />
                  <link rel="stylesheet" href="css/icomoon.css" />
                  <link rel="stylesheet" href="css/style.css" />
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
                      <a className="navbar-brand" href="index.html">Minishop</a>
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
                          <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home</a></span> <span>Shop</span></p>
                          <h1 className="mb-0 bread">Shop</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                  <section className="ftco-section bg-light">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-8 col-lg-10 order-md-last">
                          <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-4 ftco-animate d-flex">
                              <div className="product d-flex flex-column">
                                <a href="#" className="img-prod"><img className="img-fluid" src="images/product-1.png" alt="Colorlib Template" />
                                  <div className="overlay" />
                                </a>
                                <div className="text py-3 pb-4 px-3">
                                  <div className="d-flex">
                                    <div className="cat">
                                      <span>Lifestyle</span>
                                    </div>
                                    <div className="rating">
                                      <p className="text-right mb-0">
                                        <a href="#"><span className="ion-ios-star-outline" /></a>
                                        <a href="#"><span className="ion-ios-star-outline" /></a>
                                        <a href="#"><span className="ion-ios-star-outline" /></a>
                                        <a href="#"><span className="ion-ios-star-outline" /></a>
                                        <a href="#"><span className="ion-ios-star-outline" /></a>
                                      </p>
                                    </div>
                                  </div>
                                  <h3><a href="#">Nike Free RN 2019 iD</a></h3>
                                  <div className="pricing">
                                    <p className="price"><span>$120.00</span></p>
                                  </div>
                                  <p className="bottom-area d-flex px-3">
                                    <a href="#" className="add-to-cart text-center py-2 mr-1"><span>Add to cart <i className="ion-ios-add ml-1" /></span></a>
                                    <a href="#" className="buy-now text-center py-2">Buy now<span><i className="ion-ios-cart ml-1" /></span></a>
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-4 ftco-animate d-flex">
                              <div className="product d-flex flex-column">
                                <a href="#" className="img-prod"><img className="img-fluid" src="images/product-2.png" alt="Colorlib Template" />
                                  <span className="status">50% Off</span>
                                  <div className="overlay" />
                                </a>
                                <div className="text py-3 pb-4 px-3">
                                  <div className="d-flex">
                                    <div className="cat">
                                      <span>Lifestyle</span>
                                    </div>
                                    <div className="rating">
                                      <p className="text-right mb-0">
                                        <a href="#"><span className="ion-ios-star-outline" /></a>
                                        <a href="#"><span className="ion-ios-star-outline" /></a>
                                        <a href="#"><span className="ion-ios-star-outline" /></a>
                                        <a href="#"><span className="ion-ios-star-outline" /></a>
                                        <a href="#"><span className="ion-ios-star-outline" /></a>
                                      </p>
                                    </div>
                                  </div>
                                  <h3><a href="#">Nike Free RN 2019 iD</a></h3>
                                  <div className="pricing">
                                    <p className="price"><span className="mr-2 price-dc">$120.00</span><span className="price-sale">$80.00</span></p>
                                  </div>
                                  <p className="bottom-area d-flex px-3">
                                    <a href="#" className="add-to-cart text-center py-2 mr-1"><span>Add to cart <i className="ion-ios-add ml-1" /></span></a>
                                    <a href="#" className="buy-now text-center py-2">Buy now<span><i className="ion-ios-cart ml-1" /></span></a>
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-4 ftco-animate d-flex">
                              <div className="product">
                                <a href="#" className="img-prod"><img className="img-fluid" src="images/product-3.png" alt="Colorlib Template" />
                                  <div className="overlay" />
                                </a>
                                <div className="text py-3 pb-4 px-3">
                                  <div className="d-flex">
                                    <div className="cat">
                                      <span>Lifestyle</span>
                                    </div>
                                    <div className="rating">
                                      <p className="text-right mb-0">
                                        <a href="#"><span className="ion-ios-star-outline" /></a>
                                        <a href="#"><span className="ion-ios-star-outline" /></a>
                                        <a href="#"><span className="ion-ios-star-outline" /></a>
                                        <a href="#"><span className="ion-ios-star-outline" /></a>
                                        <a href="#"><span className="ion-ios-star-outline" /></a>
                                      </p>
                                    </div>
                                  </div>
                                  <h3><a href="#">Nike Free RN 2019 iD</a></h3>
                                  <div className="pricing">
                                    <p className="price"><span>$120.00</span></p>
                                  </div>
                                  <p className="bottom-area d-flex px-3">
                                    <a href="#" className="add-to-cart text-center py-2 mr-1"><span>Add to cart <i className="ion-ios-add ml-1" /></span></a>
                                    <a href="#" className="buy-now text-center py-2">Buy now<span><i className="ion-ios-cart ml-1" /></span></a>
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-4 ftco-animate d-flex">
                              <div className="product">
                                <a href="#" className="img-prod"><img className="img-fluid" src="images/product-4.png" alt="Colorlib Template" />
                                  <div className="overlay" />
                                </a>
                                <div className="text py-3 pb-4 px-3">
                                  <div className="d-flex">
                                    <div className="cat">
                                      <span>Lifestyle</span>
                                    </div>
                                    <div className="rating">
                                      <p className="text-right mb-0">
                                        <a href="#"><span className="ion-ios-star-outline" /></a>
                                        <a href="#"><span className="ion-ios-star-outline" /></a>
                                        <a href="#"><span className="ion-ios-star-outline" /></a>
                                        <a href="#"><span className="ion-ios-star-outline" /></a>
                                        <a href="#"><span className="ion-ios-star-outline" /></a>
                                      </p>
                                    </div>
                                  </div>
                                  <h3><a href="#">Nike Free RN 2019 iD</a></h3>
                                  <div className="pricing">
                                    <p className="price"><span>$120.00</span></p>
                                  </div>
                                  <p className="bottom-area d-flex px-3">
                                    <a href="#" className="add-to-cart text-center py-2 mr-1"><span>Add to cart <i className="ion-ios-add ml-1" /></span></a>
                                    <a href="#" className="buy-now text-center py-2">Buy now<span><i className="ion-ios-cart ml-1" /></span></a>
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-4 ftco-animate d-flex">
                              <div className="product d-flex flex-column">
                                <a href="#" className="img-prod"><img className="img-fluid" src="images/product-5.png" alt="Colorlib Template" />
                                  <div className="overlay" />
                                </a>
                                <div className="text py-3 pb-4 px-3">
                                  <div className="d-flex">
                                    <div className="cat">
                                      <span>Lifestyle</span>
                                    </div>
                                    <div className="rating">
                                      <p className="text-right mb-0">
                                        <a href="#"><span className="ion-ios-star-outline" /></a>
                                        <a href="#"><span className="ion-ios-star-outline" /></a>
                                        <a href="#"><span className="ion-ios-star-outline" /></a>
                                        <a href="#"><span className="ion-ios-star-outline" /></a>
                                        <a href="#"><span className="ion-ios-star-outline" /></a>
                                      </p>
                                    </div>
                                  </div>
                                  <h3><a href="#">Nike Free RN 2019 iD</a></h3>
                                  <div className="pricing">
                                    <p className="price"><span>$120.00</span></p>
                                  </div>
                                  <p className="bottom-area d-flex px-3">
                                    <a href="#" className="add-to-cart text-center py-2 mr-1"><span>Add to cart <i className="ion-ios-add ml-1" /></span></a>
                                    <a href="#" className="buy-now text-center py-2">Buy now<span><i className="ion-ios-cart ml-1" /></span></a>
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-4 ftco-animate d-flex">
                              <div className="product d-flex flex-column">
                                <a href="#" className="img-prod"><img className="img-fluid" src="images/product-6.png" alt="Colorlib Template" />
                                  <span className="status">50% Off</span>
                                  <div className="overlay" />
                                </a>
                                <div className="text py-3 pb-4 px-3">
                                  <div className="d-flex">
                                    <div className="cat">
                                      <span>Lifestyle</span>
                                    </div>
                                    <div className="rating">
                                      <p className="text-right mb-0">
                                        <a href="#"><span className="ion-ios-star-outline" /></a>
                                        <a href="#"><span className="ion-ios-star-outline" /></a>
                                        <a href="#"><span className="ion-ios-star-outline" /></a>
                                        <a href="#"><span className="ion-ios-star-outline" /></a>
                                        <a href="#"><span className="ion-ios-star-outline" /></a>
                                      </p>
                                    </div>
                                  </div>
                                  <h3><a href="#">Nike Free RN 2019 iD</a></h3>
                                  <div className="pricing">
                                    <p className="price"><span className="mr-2 price-dc">$120.00</span><span className="price-sale">$80.00</span></p>
                                  </div>
                                  <p className="bottom-area d-flex px-3">
                                    <a href="#" className="add-to-cart text-center py-2 mr-1"><span>Add to cart <i className="ion-ios-add ml-1" /></span></a>
                                    <a href="#" className="buy-now text-center py-2">Buy now<span><i className="ion-ios-cart ml-1" /></span></a>
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-4 ftco-animate d-flex">
                              <div className="product">
                                <a href="#" className="img-prod"><img className="img-fluid" src="images/product-7.png" alt="Colorlib Template" />
                                  <div className="overlay" />
                                </a>
                                <div className="text py-3 pb-4 px-3">
                                  <div className="d-flex">
                                    <div className="cat">
                                      <span>Lifestyle</span>
                                    </div>
                                    <div className="rating">
                                      <p className="text-right mb-0">
                                        <a href="#"><span className="ion-ios-star-outline" /></a>
                                        <a href="#"><span className="ion-ios-star-outline" /></a>
                                        <a href="#"><span className="ion-ios-star-outline" /></a>
                                        <a href="#"><span className="ion-ios-star-outline" /></a>
                                        <a href="#"><span className="ion-ios-star-outline" /></a>
                                      </p>
                                    </div>
                                  </div>
                                  <h3><a href="#">Nike Free RN 2019 iD</a></h3>
                                  <div className="pricing">
                                    <p className="price"><span>$120.00</span></p>
                                  </div>
                                  <p className="bottom-area d-flex px-3">
                                    <a href="#" className="add-to-cart text-center py-2 mr-1"><span>Add to cart <i className="ion-ios-add ml-1" /></span></a>
                                    <a href="#" className="buy-now text-center py-2">Buy now<span><i className="ion-ios-cart ml-1" /></span></a>
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-4 ftco-animate d-flex">
                              <div className="product">
                                <a href="#" className="img-prod"><img className="img-fluid" src="images/product-8.png" alt="Colorlib Template" />
                                  <div className="overlay" />
                                </a>
                                <div className="text py-3 pb-4 px-3">
                                  <div className="d-flex">
                                    <div className="cat">
                                      <span>Lifestyle</span>
                                    </div>
                                    <div className="rating">
                                      <p className="text-right mb-0">
                                        <a href="#"><span className="ion-ios-star-outline" /></a>
                                        <a href="#"><span className="ion-ios-star-outline" /></a>
                                        <a href="#"><span className="ion-ios-star-outline" /></a>
                                        <a href="#"><span className="ion-ios-star-outline" /></a>
                                        <a href="#"><span className="ion-ios-star-outline" /></a>
                                      </p>
                                    </div>
                                  </div>
                                  <h3><a href="#">Nike Free RN 2019 iD</a></h3>
                                  <div className="pricing">
                                    <p className="price"><span>$120.00</span></p>
                                  </div>
                                  <p className="bottom-area d-flex px-3">
                                    <a href="#" className="add-to-cart text-center py-2 mr-1"><span>Add to cart <i className="ion-ios-add ml-1" /></span></a>
                                    <a href="#" className="buy-now text-center py-2">Buy now<span><i className="ion-ios-cart ml-1" /></span></a>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row mt-5">
                            <div className="col text-center">
                              <div className="block-27">
                                <ul>
                                  <li><a href="#">&lt;</a></li>
                                  <li className="active"><span>1</span></li>
                                  <li><a href="#">2</a></li>
                                  <li><a href="#">3</a></li>
                                  <li><a href="#">4</a></li>
                                  <li><a href="#">5</a></li>
                                  <li><a href="#">&gt;</a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 col-lg-2">
                          <div className="sidebar">
                            <div className="sidebar-box-2">
                              <h2 className="heading">Categories</h2>
                              <div className="fancy-collapse-panel">
                                <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                  <div className="panel panel-default">
                                    <div className="panel-heading" role="tab" id="headingOne">
                                      <h4 className="panel-title">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Men's Shoes
                                        </a>
                                      </h4>
                                    </div>
                                    <div id="collapseOne" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
                                      <div className="panel-body">
                                        <ul>
                                          <li><a href="#">Sport</a></li>
                                          <li><a href="#">Casual</a></li>
                                          <li><a href="#">Running</a></li>
                                          <li><a href="#">Jordan</a></li>
                                          <li><a href="#">Soccer</a></li>
                                          <li><a href="#">Football</a></li>
                                          <li><a href="#">Lifestyle</a></li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="panel panel-default">
                                    <div className="panel-heading" role="tab" id="headingTwo">
                                      <h4 className="panel-title">
                                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Women's Shoes
                                        </a>
                                      </h4>
                                    </div>
                                    <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                      <div className="panel-body">
                                        <ul>
                                          <li><a href="#">Sport</a></li>
                                          <li><a href="#">Casual</a></li>
                                          <li><a href="#">Running</a></li>
                                          <li><a href="#">Jordan</a></li>
                                          <li><a href="#">Soccer</a></li>
                                          <li><a href="#">Football</a></li>
                                          <li><a href="#">Lifestyle</a></li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="panel panel-default">
                                    <div className="panel-heading" role="tab" id="headingThree">
                                      <h4 className="panel-title">
                                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Accessories
                                        </a>
                                      </h4>
                                    </div>
                                    <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                      <div className="panel-body">
                                        <ul>
                                          <li><a href="#">Jeans</a></li>
                                          <li><a href="#">T-Shirt</a></li>
                                          <li><a href="#">Jacket</a></li>
                                          <li><a href="#">Shoes</a></li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="panel panel-default">
                                    <div className="panel-heading" role="tab" id="headingFour">
                                      <h4 className="panel-title">
                                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseThree">Clothing
                                        </a>
                                      </h4>
                                    </div>
                                    <div id="collapseFour" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
                                      <div className="panel-body">
                                        <ul>
                                          <li><a href="#">Jeans</a></li>
                                          <li><a href="#">T-Shirt</a></li>
                                          <li><a href="#">Jacket</a></li>
                                          <li><a href="#">Shoes</a></li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="sidebar-box-2">
                              <h2 className="heading">Price Range</h2>
                              <form method="post" className="colorlib-form-2">
                                <div className="row">
                                  <div className="col-md-12">
                                    <div className="form-group">
                                      <label htmlFor="guests">Price from:</label>
                                      <div className="form-field">
                                        <i className="icon icon-arrow-down3" />
                                        <select name="people" id="people" className="form-control">
                                          <option value="#">1</option>
                                          <option value="#">200</option>
                                          <option value="#">300</option>
                                          <option value="#">400</option>
                                          <option value="#">1000</option>
                                        </select>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-12">
                                    <div className="form-group">
                                      <label htmlFor="guests">Price to:</label>
                                      <div className="form-field">
                                        <i className="icon icon-arrow-down3" />
                                        <select name="people" id="people" className="form-control">
                                          <option value="#">2000</option>
                                          <option value="#">4000</option>
                                          <option value="#">6000</option>
                                          <option value="#">8000</option>
                                          <option value="#">10000</option>
                                        </select>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="ftco-gallery">
                    <div className="container">
                      <div className="row justify-content-center">
                        <div className="col-md-8 heading-section text-center mb-4 ftco-animate">
                          <h2 className="mb-4">Follow Us On Instagram</h2>
                          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
                        </div>
                      </div>
                    </div>
                    <div className="container-fluid px-0">
                      <div className="row no-gutters">
                        <div className="col-md-4 col-lg-2 ftco-animate">
                          <a href="images/gallery-1.jpg" className="gallery image-popup img d-flex align-items-center" style={{backgroundImage: 'url(images/gallery-1.jpg)'}}>
                            <div className="icon mb-4 d-flex align-items-center justify-content-center">
                              <span className="icon-instagram" />
                            </div>
                          </a>
                        </div>
                        <div className="col-md-4 col-lg-2 ftco-animate">
                          <a href="images/gallery-2.jpg" className="gallery image-popup img d-flex align-items-center" style={{backgroundImage: 'url(images/gallery-2.jpg)'}}>
                            <div className="icon mb-4 d-flex align-items-center justify-content-center">
                              <span className="icon-instagram" />
                            </div>
                          </a>
                        </div>
                        <div className="col-md-4 col-lg-2 ftco-animate">
                          <a href="images/gallery-3.jpg" className="gallery image-popup img d-flex align-items-center" style={{backgroundImage: 'url(images/gallery-3.jpg)'}}>
                            <div className="icon mb-4 d-flex align-items-center justify-content-center">
                              <span className="icon-instagram" />
                            </div>
                          </a>
                        </div>
                        <div className="col-md-4 col-lg-2 ftco-animate">
                          <a href="images/gallery-4.jpg" className="gallery image-popup img d-flex align-items-center" style={{backgroundImage: 'url(images/gallery-4.jpg)'}}>
                            <div className="icon mb-4 d-flex align-items-center justify-content-center">
                              <span className="icon-instagram" />
                            </div>
                          </a>
                        </div>
                        <div className="col-md-4 col-lg-2 ftco-animate">
                          <a href="images/gallery-5.jpg" className="gallery image-popup img d-flex align-items-center" style={{backgroundImage: 'url(images/gallery-5.jpg)'}}>
                            <div className="icon mb-4 d-flex align-items-center justify-content-center">
                              <span className="icon-instagram" />
                            </div>
                          </a>
                        </div>
                        <div className="col-md-4 col-lg-2 ftco-animate">
                          <a href="images/gallery-6.jpg" className="gallery image-popup img d-flex align-items-center" style={{backgroundImage: 'url(images/gallery-6.jpg)'}}>
                            <div className="icon mb-4 d-flex align-items-center justify-content-center">
                              <span className="icon-instagram" />
                            </div>
                          </a>
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
                  <div id="ftco-loader" className="show fullscreen"><svg className="circular" width="48px" height="48px"><circle className="path-bg" cx={24} cy={24} r={22} fill="none" strokeWidth={4} stroke="#eeeeee" /><circle className="path" cx={24} cy={24} r={22} fill="none" strokeWidth={4} strokeMiterlimit={10} stroke="#F96D00" /></svg></div>
                </div>
      );
    }
  }

  export default ShopPage;