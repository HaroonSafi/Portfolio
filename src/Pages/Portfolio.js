import React from 'react'
import { Link } from 'react-router-dom'
import 'tachyons'

export default function Portfolio() {
    return (
        <React.Fragment>
        {/* <!-- ==================== Start Loading ==================== -->

        <div id="preloader">
        </div>

        <!-- ==================== End Loading ==================== -->



        <!-- ==================== Start progress-scroll-button ==================== --> */}

        <div className="progress-wrap cursor-pointer">
            <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
            </svg>
        </div>

        {/* <!-- ==================== End progress-scroll-button ==================== -->



        <!-- ==================== Start cursor ==================== --> */}

        <div className="mouse-cursor cursor-outer"></div>
        <div className="mouse-cursor cursor-inner"></div>

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

        {/* <!-- ==================== End Navbar ==================== --> */}



        {/* <!-- ==================== Start header ==================== --> */}

        <header className="works-header fixed-slider hfixd valign">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-9 col-md-11 static">
                        <div className="capt mt-50">
                            <div className="parlx">
                                <h2 className="custom-font">My amazing works</h2>
                                <p>Creative way to showcase your works at their absolute best.</p>
                            </div>

                            <div className="bactxt custom-font valign">
                                <span className="full-width">Works</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        {/* <!-- ==================== End header ==================== --> */}



        <div className="main-content">

            {/* <!-- ==================== Start works ==================== --> */}

            <section className="portfolio section-padding pb-70">
                <div className="container">

                    {/* <!-- gallery --> */}
                    <div className="gallery full-width">

                        {/* <!-- gallery item --> */}
                        <div className="col-md-6 items graphic">
                            <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                                <a href="project-details.html">
                                    <img src="assets/img/portfolio/works/1.jpg" alt="image"/>
                                </a>
                                <div className="cont">
                                    <h6>Creativity Demand</h6>
                                    <span><a href="#0">Design</a>, <a href="#0">WordPress</a></span>
                                </div>
                            </div>
                        </div>

                        {/* <!-- gallery item --> */}
                        <div className="col-md-6 items web">
                            <div className="row">
                                <div className="col-lg-10">
                                    <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                                        <a href="project-details.html">
                                            <img src="assets/img/portfolio/works/2.jpg" alt="image"/>
                                        </a>
                                        <div className="cont">
                                            <h6>Through The Breaking</h6>
                                            <span><a href="#0">Design</a>, <a href="#0">WordPress</a></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- gallery item --> */}
                        <div className="col-md-6 items brand">
                            <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                                <a href="project-details.html">
                                    <img src="assets/img/portfolio/works/3.jpg" alt="image"/>
                                </a>
                                <div className="cont">
                                    <h6>Create With Creatives</h6>
                                    <span><a href="#0">Design</a>, <a href="#0">WordPress</a></span>
                                </div>
                            </div>
                        </div>

                        {/* <!-- gallery item --> */}
                        <div className="col-md-6 items brand">
                            <div className="row">
                                <div className="col-lg-10 offset-lg-2">
                                    <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                                        <a href="project-details.html">
                                            <img src="assets/img/portfolio/works/6.jpg" alt="image"/>
                                        </a>
                                        <div className="cont">
                                            <h6>Blast From The Past</h6>
                                            <span><a href="#0">Design</a>, <a href="#0">WordPress</a></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- gallery item --> */}
                        <div className="col-md-6 items web">
                            <div className="row">
                                <div className="col-lg-11 offset-lg-1">
                                    <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                                        <a href="project-details.html">
                                            <img src="assets/img/portfolio/works/5.jpg" alt="image"/>
                                        </a>
                                        <div className="cont">
                                            <h6>See It Yourself</h6>
                                            <span><a href="#0">Design</a>, <a href="#0">WordPress</a></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- gallery item --> */}
                        <div className="col-md-6 items graphic">
                            <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                                <a href="project-details.html">
                                    <img src="assets/img/portfolio/works/4.jpg" alt="image"/>
                                </a>
                                <div className="cont">
                                    <h6>Energies of Love</h6>
                                    <span><a href="#0">Design</a>, <a href="#0">WordPress</a></span>
                                </div>
                            </div>
                        </div>
        {/* 
                        <!-- gallery item --> */}
                        <div className="col-md-6 items brand">
                            <div className="row">
                                <div className="col-lg-10">
                                    <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                                        <a href="project-details.html">
                                            <img src="assets/img/portfolio/works/7.jpg" alt="image"/>
                                        </a>
                                        <div className="cont">
                                            <h6>Blast From The Past</h6>
                                            <span><a href="#0">Design</a>, <a href="#0">WordPress</a></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- gallery item --> */}
                        <div className="col-md-6 items web">
                            <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                                <a href="project-details.html">
                                    <img src="assets/img/portfolio/works/8.jpg" alt="image"/>
                                </a>
                                <div className="cont">
                                    <h6>See It Yourself</h6>
                                    <span><a href="#0">Design</a>, <a href="#0">WordPress</a></span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* <!-- ==================== End works ==================== -->



            <!-- ==================== Start call-to-action ==================== --> */}

            <section className="call-action section-padding bg-img" data-background="assets/img/pattern.png">
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

            <footer className="footer-half sub-bg">
                <div className="container">
                        <div className="copyrights text-center">
                            <p>© 2022, Made with passion by <a href="#">Haroon Safi</a>.</p>
                        </div>
                </div>
            </footer>

            {/* <!-- ==================== End Footer ==================== --> */}

        </div>




        {/* <!-- jQuery --> */}
        <script src="js/jquery-3.0.0.min.js"></script>
        <script src="js/jquery-migrate-3.0.0.min.js"></script>

        {/* <!-- plugins --> */}
        <script src="js/plugins.js"></script>


        {/* <!-- custom scripts --> */}
        <script src="js/scripts.js"></script>

                </React.Fragment>
    )
}
