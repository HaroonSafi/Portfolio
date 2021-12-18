import React from 'react'
import { Link } from 'react-router-dom'
import 'tachyons'


export default function About() {
    return (
        <React.Fragment>
                
        {/* 
        <!-- ==================== Start Loading ==================== -->

        <div id="preloader">
        </div>
        {/* 
        <!-- ==================== End Loading ==================== -->



        <!-- ==================== Start progress-scroll-button ==================== --> */} 

        {/* <div className="progress-wrap cursor-pointer">
            <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
            </svg>
        </div> */}
        {/* 
        <!-- ==================== End progress-scroll-button ==================== -->



        <!-- ==================== Start cursor ==================== --> */}

        {/* <div className="mouse-cursor cursor-outer"></div>
        <div className="mouse-cursor cursor-inner"></div> */}

        {/* <!-- ==================== End cursor ==================== -->



        <!-- ==================== Start Navbar ==================== --> */}

        <nav className="navbar navbar-expand-lg">
                            <div className="container">

                                {/* <!-- Logo --> */}
                                <a className="logo" href="#">
                                    <img className="logo-size" src="assets/img/Logo-light.svg" alt="logo"/>
                                </a>

                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="icon-bar"><i className="fas fa-bars"></i></span>
                                </button>

                                {/* <!-- navbar links --> */}
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item dropdown">
                                        <Link to="/" className="nav-link ">Home</Link> 
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/about" className="nav-link"> About </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/portfolio" className="nav-link"> Portfolio </Link>
                                        </li>
                                        <li className="nav-item dropdown">
                                        <Link to="/blog" className="nav-link"> Blog </Link>                     
                                        </li>
                                        <li className="nav-item">
                                        <Link to="/contact" className="nav-link"> Contact </Link>
                                        </li>
                                    </ul>
                                    <div className="search">
                                        <span className="icon pe-7s-search cursor-pointer"></span>
                                        <div className="search-form text-center custom-font">
                                            <form>
                                                <input type="text" name="search" placeholder="Search"/>
                                            </form>
                                            <span className="close pe-7s-close cursor-pointer"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
        </nav>

        {/* <!-- ==================== End Navbar ==================== -->



        <!-- ==================== Start Slider ==================== --> */}

        <header className="pages-header bg-img valign parallaxie" data-background="../../public/assets/img/slid/freelancer.jpg" data-overlay-dark="5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="cont text-center">
                            <img src="../../public/assets/img/slid/freelancer.jpg" alt="" />
                            <h1>About Us</h1>
                            <div className="path">
                                <a href="#0">Home</a><span>/</span><a href="#0" className="active">About Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        {/* <!-- ==================== End Slider ==================== -->



        <!-- ==================== Start Intro ==================== --> */}

        <section className="intro-section section-padding pb-0">
            <div className="tl container">
                <div className="row">
                    <div className="col-lg-3 col-md-4">
                        <div className="htit sm-mb30">
                            <h4>Who We Are ?</h4>
                        </div>
                    </div>
                    <div className="col-lg-8 offset-lg-1 col-md-8">
                        <div className="text">
                            <p className="wow txt" data-splitting>We develop creative solutions for small and big brands alike, build authentic product
                                identities and much more.Lorem ipsum dolor sit amet, consectetur adipiscing elit sit non
                                facilisis vitae eu. Ultrices ut diam morbi risus dui, nec eget at lorem in id tristique
                                in elementum leo nisi eleifend placerat magna lacus elementum ornare vehicula odio
                                posuere quisque ultrices tempus cras id blandit maecenas in ornare quis dolor tempus
                                risus vitae feugiat fames aliquet sed.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* <!-- ==================== End Intro ==================== -->



        <!-- ==================== Start Services ==================== --> */}

        <section className="services section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="item md-mb50 wow fadeInUp" data-wow-delay=".3s">
                            <span className="icon pe-7s-gleam"></span>
                            <h6>Digital Marketing</h6>
                            <p>Tempore corrupti temporibus fuga earum asperiores fugit laudantium.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="item md-mb50 wow fadeInUp" data-wow-delay=".5s">
                            <span className="icon pe-7s-phone"></span>
                            <h6>Web & App Development</h6>
                            <p>Tempore corrupti temporibus fuga earum asperiores fugit laudantium.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="item wow fadeInUp" data-wow-delay=".7s">
                            <span className="icon pe-7s-magic-wand"></span>
                            <h6>Graphic Design</h6>
                            <p>Tempore corrupti temporibus fuga earum asperiores fugit laudantium.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- ==================== End Services ==================== -->

            <!-- ==================== Start Minimal-Area ==================== --> */}

        <section className="min-area sub-bg">
            <div className="tl container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="img">
                            <img className="thumparallax-down" src="assets/img/min-area.jpg" alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-6 valign">
                        <div className="content">
                            <h4 className="wow custom-font" data-splitting>About us.</h4>
                            <p className="wow txt" data-splitting>Our creative Ad agency is ranked among the finest in
                                the US. We cultivate smart ideas for start-ups and seasoned players.
                            </p>
                            <ul className="feat">
                                <li className="wow fadeInUp" data-wow-delay=".2s">
                                    <h6><span>1</span> Our Mission</h6>
                                    <p>luctus massa ipsum at tempus eleifend congue lectus bibendum</p>
                                </li>
                                <li className="wow fadeInUp" data-wow-delay=".4s">
                                    <h6><span>2</span> Our Goals</h6>
                                    <p>luctus massa ipsum at tempus eleifend congue lectus bibendum</p>
                                </li>
                                <li className="wow fadeInUp" data-wow-delay=".6s">
                                    <h6><span>3</span> Why Us? </h6>
                                    <p>luctus massa ipsum at tempus eleifend congue lectus bibendum</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* <!-- ==================== End Minimal-Area ==================== -->



        <!-- ==================== Start clients Brands ==================== --> */}

        <section className="clients section-padding">
            <div className="tl container">
                <div className="row">
                    <div className="col-lg-4 valign">
                        <div className="sec-head custom-font mb-0">
                            <h6>Clients</h6>
                            <h3>Our <br/> Clients.</h3>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div>
                            <div className="row bord">
                                <div className="col-md-3 col-6 brands">
                                    <div className="item wow fadeIn" data-wow-delay=".3s">
                                        <div className="img">
                                            <img src="assets/img/clients/brands/01.png" alt=""/>
                                            <a href="#0" className="link" data-splitting>www.avo.com</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-6 brands">
                                    <div className="item wow fadeIn" data-wow-delay=".6s">
                                        <div className="img">
                                            <img src="assets/img/clients/brands/02.png" alt=""/>
                                            <a href="#0" className="link" data-splitting>www.avo.com</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-6 brands">
                                    <div className="item wow fadeIn" data-wow-delay=".8s">
                                        <div className="img">
                                            <img src="assets/img/clients/brands/03.png" alt=""/>
                                            <a href="#0" className="link" data-splitting>www.avo.com</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-6 brands">
                                    <div className="item wow fadeIn" data-wow-delay=".3s">
                                        <div className="img">
                                            <img src="assets/img/clients/brands/04.png" alt=""/>
                                            <a href="#0" className="link" data-splitting>www.avo.com</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 col-6 brands">
                                    <div className="item wow fadeIn" data-wow-delay=".4s">
                                        <div className="img">
                                            <img src="assets/img/clients/brands/05.png" alt=""/>
                                            <a href="#0" className="link" data-splitting>www.avo.com</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-6 brands">
                                    <div className="item wow fadeIn" data-wow-delay=".7s">
                                        <div className="img">
                                            <img src="assets/img/clients/brands/06.png" alt=""/>
                                            <a href="#0" className="link" data-splitting>www.avo.com</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-6 brands">
                                    <div className="item wow fadeIn" data-wow-delay=".5s">
                                        <div className="img">
                                            <img src="assets/img/clients/brands/07.png" alt=""/>
                                            <a href="#0" className="link" data-splitting>www.avo.com</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-6 brands">
                                    <div className="item wow fadeIn" data-wow-delay=".3s">
                                        <div className="img">
                                            <img src="assets/img/clients/brands/08.png" alt=""/>
                                            <a href="#0" className="link" data-splitting>www.avo.com</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* <!-- ==================== End clients Brands ==================== -->



        <!-- ==================== Start call-to-action ==================== --> */}

        <section className="call-action section-padding sub-bg bg-img" data-background="assets/img/pattern.png">
            <div className="tl container">
                <div className="row">
                    <div className="col-md-8 col-lg-9">
                        <div className="content sm-mb30">
                            <h6 className="wow" data-splitting>Let's Talk</h6>
                            <h2 className="wow custom-font" data-splitting>about your <b>next project</b>.</h2>
                        </div>
                    </div>

                    <div className="col-md-4 col-lg-3 valign">
                        <a href="contact.html" className="btn-curve btn-lit"><span>Get In Touch</span></a>
                    </div>

                </div>
            </div>
        </section>

        {/* <!-- ==================== End call-to-action ==================== -->



        <!-- ==================== Start Footer ==================== --> */}

       
        <footer className="tl footer-half sub-bg section-padding pb-0">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="cont">
                            <div className="logo">
                                <a href="#">
                                    <img className="logo-size" src="assets/img/Logo-light.svg" alt=""/>
                                </a>
                            </div>
                            <div className="con-info custom-font">
                                <ul>
                                    <li><span>Email : </span> haroon.csku@gmail.com</li>
                                    <li><span>Address : </span> 15th District, Kabul, Afghanistan
                                    </li>
                                    <li><span>Phone : </span> (+93) 770 070 833</li>
                                </ul>
                            </div>
                            <div className="social-icon">
                                <h6 className="custom-font stit">Follow Me</h6>
                                <div className="social">
                                    <a href="https://www.facebook.com/haroonsafaikhan" target="_blank" className="icon">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="https://twitter.com/HaroonSafiKhan" target="_blank" className="icon">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a href="https://www.pinterest.com/haroonsafai/" target="_blank" className="icon">
                                        <i className="fab fa-pinterest"></i>
                                    </a>
                                    <a href="https://www.behance.net/haroonsafi" target="_blank" className="icon">
                                        <i className="fab fa-behance"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 offset-lg-2">
                        <div className="subscribe mb-50">
                            <h6 className="custom-font stit bgs">Newslatter</h6>
                            <p>Sign up for subscribe to my newsletters!</p>
                            <form>
                                <div className="form-group custom-font">
                                    <input type="email" name="subscribe" placeholder="Your Email"/>
                                    <button className="cursor-pointer bgs">Subscribe</button>
                                </div>
                            </form>
                        </div>
                        <div className="insta">
                            <h6 className="custom-font stit bgs">Instagram Post</h6>
                            <div className="insta-gallary">
                                <a href="#">
                                    <img src="assets/img/insta/1.jpg" alt=""/>
                                </a>
                                <a href="#">
                                    <img src="assets/img/insta/2.jpg" alt=""/>
                                </a>
                                <a href="#">
                                    <img src="assets/img/insta/3.jpg" alt=""/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyrights text-center">
                    <p>© 2022, Made with passion by <a href="#">Haroon Safi</a>.</p>
                </div>
            </div>
        </footer>

        {/* <!-- ==================== End Footer ==================== --> */}






        {/* <!-- jQuery --> */}
        <script src="assets/js/jquery-3.0.0.min.js"></script>
        <script src="assets/js/jquery-migrate-3.0.0.min.js"></script>

        {/* <!-- plugins --> */}
        <script src="assets/js/plugins.js"></script>

        {/* <!-- custom scripts --> */}
        <script src="assets/js/scripts.js"></script>


                </React.Fragment>
    )
}
