import React from 'react'
import { Link } from 'react-router-dom'


export default function Blog() {
    return (
        <React.Fragment>
         {/* 
        <!-- ==================== Start Loading ==================== -->

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

        {/* <!-- ==================== End Navbar ==================== -->


        <!-- ==================== Start wrapper ==================== --> */}

        <div className="wrapper">

        {/* 
            <!-- ==================== Start Header ==================== --> */}

            <section  className="page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-9">
                            <div  className="cont">
                                <h1 className="extra-title mb-10">Our Blog.</h1>
                                <p>All the most current news and events of our creative team.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- ==================== Start Header ==================== -->



            <!-- ==================== Start Blog ==================== --> */}

            <section className="blog-pg section-padding pt-0">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-11">
                            <div className="posts">
                                <div className="item mb-80">
                                    <div className="img">
                                        <a href="blog-details.html">
                                            <img src="assets/img/blog/b1.jpg" alt=""/>
                                        </a>
                                    </div>
                                    <div className="content">
                                        <div className="row">
                                            <div className="col-10">
                                                <a href="#0" className="date">
                                                    <span className="num">07</span>
                                                    <span>August</span>
                                                </a>
                                                <div className="tags">
                                                    <a href="#0">WordPress</a>
                                                    <a href="#0">Themeforest</a>
                                                    <a href="#0">Avo</a>
                                                </div>
                                                <h4 className="title"><a href="blog-details.html">Build a Beautiful Blog With Ease</a></h4>
                                                <p>My job is simple and sophisticated, so it is possible to describe and simple, and flowery language. I love the feel and sophistication of its superiority. I like people with a keen mind and at the same time easy to talk to. These qualities can be combined perfectly natural. However, things like people look miserable, if these properties are connected.
                                                </p>
                                                <a href="blog-details.html" className="simple-btn mt-30">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item mb-80">
                                    <div className="img">
                                        <a href="blog-details.html">
                                            <img src="assets/img/blog/b2.jpg" alt=""/>
                                        </a>
                                    </div>
                                    <div className="content">
                                        <div className="row">
                                            <div className="col-10">
                                                <a href="#0" className="date">
                                                    <span className="num">07</span>
                                                    <span>August</span>
                                                </a>
                                                <div className="tags">
                                                    <a href="#0">WordPress</a>
                                                    <a href="#0">Themeforest</a>
                                                    <a href="#0">Avo</a>
                                                </div>
                                                <h4 className="title"><a href="blog-details.html">Build a Beautiful Blog With Ease</a></h4>
                                                <p>My job is simple and sophisticated, so it is possible to describe and simple, and flowery language. I love the feel and sophistication of its superiority. I like people with a keen mind and at the same time easy to talk to. These qualities can be combined perfectly natural. However, things like people look miserable, if these properties are connected.
                                                </p>
                                                <a href="blog-details.html" className="simple-btn mt-30">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item mb-80">
                                    <div className="img">
                                        <a href="blog-details.html">
                                            <img src="assets/img/blog/b3.jpg" alt=""/>
                                        </a>
                                    </div>
                                    <div className="content">
                                        <div className="row">
                                            <div className="col-10">
                                                <a href="#0" className="date">
                                                    <span className="num">07</span>
                                                    <span>August</span>
                                                </a>
                                                <div className="tags">
                                                    <a href="#0">WordPress</a>
                                                    <a href="#0">Themeforest</a>
                                                    <a href="#0">Avo</a>
                                                </div>
                                                <h4 className="title"><a href="blog-details.html">Build a Beautiful Blog With Ease</a></h4>
                                                <p>My job is simple and sophisticated, so it is possible to describe and simple, and flowery language. I love the feel and sophistication of its superiority. I like people with a keen mind and at the same time easy to talk to. These qualities can be combined perfectly natural. However, things like people look miserable, if these properties are connected.
                                                </p>
                                                <a href="blog-details.html" className="simple-btn mt-30">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="img">
                                        <a href="blog-details.html">
                                            <img src="assets/img/blog/b4.jpg" alt=""/>
                                        </a>
                                    </div>
                                    <div className="content">
                                        <div className="row">
                                            <div className="col-10">
                                                <a href="#0" className="date">
                                                    <span className="num">07</span>
                                                    <span>August</span>
                                                </a>
                                                <div className="tags">
                                                    <a href="#0">WordPress</a>
                                                    <a href="#0">Themeforest</a>
                                                    <a href="#0">Avo</a>
                                                </div>
                                                <h4 className="title"><a href="blog-details.html">Build a Beautiful Blog With Ease</a></h4>
                                                <p>My job is simple and sophisticated, so it is possible to describe and simple, and flowery language. I love the feel and sophistication of its superiority. I like people with a keen mind and at the same time easy to talk to. These qualities can be combined perfectly natural. However, things like people look miserable, if these properties are connected.
                                                </p>
                                                <a href="blog-details.html" className="simple-btn mt-30">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="pagination">
                                    <span className="active"><a href="#0">1</a></span>
                                    <span><a href="#0">2</a></span>
                                    <span><a href="#0"><i className="fas fa-angle-right"></i></a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- ==================== End Blog ==================== -->



            <!-- ==================== Start Footer ==================== --> */}


        <footer className="footer-half sub-bg section-padding pb-0">
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


        </div>

        {/* <!-- ==================== End wrapper ==================== --> */}





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
