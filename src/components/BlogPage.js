import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from '../pages/Home';
import Cart from '../pages/Cart';

class BlogPage extends React.Component {
  render() {
    return (
                <div>
                  <title>Minishop -</title>
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
                          <li className="nav-item active"><a href="index.html" className="nav-link">Home</a></li>
                          <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Catalog</a>
                            <div className="dropdown-menu" aria-labelledby="dropdown04">
                              <a className="dropdown-item" href="shop.html">Shop</a>
                              <a className="dropdown-item" href="product-single.html">Single Product</a>
                              <a className="dropdown-item" href="cart.html">Cart</a>
                              <a className="dropdown-item" href="checkout.html">Checkout</a>
                            </div>
                          </li>
                          <li className="nav-item"><a href="about.html" className="nav-link">About</a></li>
                          <li className="nav-item active"><a href="blog.html" className="nav-link">Blog</a></li>
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
                          <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home</a></span> <span>Blog</span></p>
                          <h1 className="mb-0 bread">Blog</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                  <section className="ftco-section ftco-degree-bg">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-8 order-lg-last ftco-animate">
                          <div className="row">
                            <div className="col-md-12 d-flex ftco-animate">
                              <div className="blog-entry align-self-stretch d-md-flex">
                                <a href="/blogsingle" className="block-20" style={{backgroundImage: 'url("images/image_1.jpg")'}}>
                                </a>
                                <div className="text d-block pl-md-4">
                                  <div className="meta mb-3">
                                    <div><a href="#">April 9, 2019</a></div>
                                    <div><a href="#">Admin</a></div>
                                    <div><a href="#" className="meta-chat"><span className="icon-chat" /> 3</a></div>
                                  </div>
                                  <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                  <p><a href="blog-single.html" className="btn btn-primary py-2 px-3">Read more</a></p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12 d-flex ftco-animate">
                              <div className="blog-entry align-self-stretch d-md-flex">
                                <a href="blogsingle" className="block-20" style={{backgroundImage: 'url("images/image_2.jpg")'}}>
                                </a>
                                <div className="text d-block pl-md-4">
                                  <div className="meta mb-3">
                                    <div><a href="#">April 9, 2019</a></div>
                                    <div><a href="#">Admin</a></div>
                                    <div><a href="#" className="meta-chat"><span className="icon-chat" /> 3</a></div>
                                  </div>
                                  <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                  <p><a href="blog-single.html" className="btn btn-primary py-2 px-3">Read more</a></p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12 d-flex ftco-animate">
                              <div className="blog-entry align-self-stretch d-md-flex">
                                <a href="blog-single.html" className="block-20" style={{backgroundImage: 'url("images/image_3.jpg")'}}>
                                </a>
                                <div className="text d-block pl-md-4">
                                  <div className="meta mb-3">
                                    <div><a href="#">April 9, 2019</a></div>
                                    <div><a href="#">Admin</a></div>
                                    <div><a href="#" className="meta-chat"><span className="icon-chat" /> 3</a></div>
                                  </div>
                                  <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                  <p><a href="blog-single.html" className="btn btn-primary py-2 px-3">Read more</a></p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12 d-flex ftco-animate">
                              <div className="blog-entry align-self-stretch d-md-flex">
                                <a href="blog-single.html" className="block-20" style={{backgroundImage: 'url("images/image_5.jpg")'}}>
                                </a>
                                <div className="text d-block pl-md-4">
                                  <div className="meta mb-3">
                                    <div><a href="#">April 9, 2019</a></div>
                                    <div><a href="#">Admin</a></div>
                                    <div><a href="#" className="meta-chat"><span className="icon-chat" /> 3</a></div>
                                  </div>
                                  <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                  <p><a href="blog-single.html" className="btn btn-primary py-2 px-3">Read more</a></p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12 d-flex ftco-animate">
                              <div className="blog-entry align-self-stretch d-md-flex">
                                <a href="blog-single.html" className="block-20" style={{backgroundImage: 'url("images/image_6.jpg")'}}>
                                </a>
                                <div className="text d-block pl-md-4">
                                  <div className="meta mb-3">
                                    <div><a href="#">April 9, 2019</a></div>
                                    <div><a href="#">Admin</a></div>
                                    <div><a href="#" className="meta-chat"><span className="icon-chat" /> 3</a></div>
                                  </div>
                                  <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                  <p><a href="blog-single.html" className="btn btn-primary py-2 px-3">Read more</a></p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row mt-2">
                            <div className="col">
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
                        </div> {/* .col-md-8 */}
                        <div className="col-lg-4 sidebar ftco-animate">
                          <div className="sidebar-box">
                            <form action="#" className="search-form">
                              <div className="form-group">
                                <span className="icon ion-ios-search" />
                                <input type="text" className="form-control" placeholder="Type a keyword and hit enter" />
                              </div>
                            </form>
                          </div>
                          <div className="sidebar-box ftco-animate">
                            <h3 className="heading">Categories</h3>
                            <ul className="categories">
                              <li><a href="#">Shoes <span>(12)</span></a></li>
                              <li><a href="#">Men's Shoes <span>(22)</span></a></li>
                              <li><a href="#">Women's <span>(37)</span></a></li>
                              <li><a href="#">Accessories <span>(42)</span></a></li>
                              <li><a href="#">Sports <span>(14)</span></a></li>
                              <li><a href="#">Lifestyle <span>(140)</span></a></li>
                            </ul>
                          </div>
                          <div className="sidebar-box ftco-animate">
                            <h3 className="heading">Recent Blog</h3>
                            <div className="block-21 mb-4 d-flex">
                              <a className="blog-img mr-4" style={{backgroundImage: 'url(images/image_1.jpg)'}} />
                              <div className="text">
                                <h3 className="heading-1"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                                <div className="meta">
                                  <div><a href="#"><span className="icon-calendar" /> April 27, 2019</a></div>
                                  <div><a href="#"><span className="icon-person" /> Admin</a></div>
                                  <div><a href="#"><span className="icon-chat" /> 19</a></div>
                                </div>
                              </div>
                            </div>
                            <div className="block-21 mb-4 d-flex">
                              <a className="blog-img mr-4" style={{backgroundImage: 'url(images/image_2.jpg)'}} />
                              <div className="text">
                                <h3 className="heading-1"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                                <div className="meta">
                                  <div><a href="#"><span className="icon-calendar" /> April 27, 2019</a></div>
                                  <div><a href="#"><span className="icon-person" /> Admin</a></div>
                                  <div><a href="#"><span className="icon-chat" /> 19</a></div>
                                </div>
                              </div>
                            </div>
                            <div className="block-21 mb-4 d-flex">
                              <a className="blog-img mr-4" style={{backgroundImage: 'url(images/image_3.jpg)'}} />
                              <div className="text">
                                <h3 className="heading-1"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                                <div className="meta">
                                  <div><a href="#"><span className="icon-calendar" /> April 27, 2019</a></div>
                                  <div><a href="#"><span className="icon-person" /> Admin</a></div>
                                  <div><a href="#"><span className="icon-chat" /> 19</a></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="sidebar-box ftco-animate">
                            <h3 className="heading">Tag Cloud</h3>
                            <div className="tagcloud">
                              <a href="#" className="tag-cloud-link">shop</a>
                              <a href="#" className="tag-cloud-link">products</a>
                              <a href="#" className="tag-cloud-link">shirt</a>
                              <a href="#" className="tag-cloud-link">jeans</a>
                              <a href="#" className="tag-cloud-link">shoes</a>
                              <a href="#" className="tag-cloud-link">dress</a>
                              <a href="#" className="tag-cloud-link">coats</a>
                              <a href="#" className="tag-cloud-link">jumpsuits</a>
                            </div>
                          </div>
                          <div className="sidebar-box ftco-animate">
                            <h3 className="heading">Paragraph</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section> {/* .section */}
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

  export default BlogPage;