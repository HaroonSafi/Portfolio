import React from 'react'
import reactDom from 'react-dom'
import { Link } from 'react-router-dom'
import 'tachyons'

    
export default function Home() {
    return (
        <React.Fragment>
        {/* <!-- ==================== Start Loading ==================== --> */}

        {/* <div id="preloader">
        </div> */}

        {/* <!-- ==================== End Loading ==================== -->


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



        <!-- ==================== Start Slider ==================== --> */}

        <header className="freelancer sub-bg valign bg-img parallaxie" 
        data-background="assets/img/slid/freelancer.jpg" data-overlay-dark="4">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="tl cont">
                            <h6>Hello, I'm</h6>
                            <h1>Haroon Safi</h1>
                            <h4>UI/UX Designer</h4>
                            <div className=" social-icon">
                                <a href="https://www.facebook.com/haroonsafaikhan" className="grow bw2 shadow-5 icon " target="_blank">
                                    <i className=" fab fa-facebook-f"></i>
                                </a>
                                <a href="https://twitter.com/HaroonSafiKhan" className="grow bw2 shadow-5 icon" target="_blank">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="https://www.pinterest.com/haroonsafai/" className="grow bw2 shadow-5 icon" target="_blank">
                                    <i className="fab fa-pinterest"></i>
                                </a>
                                <a href="https://www.behance.net/haroonsafi" className="grow bw2 shadow-5 icon" target="_blank">
                                    <i className="fab fa-behance"></i>
                                </a>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
                
            </div>
            

        </header>

        {/* <!-- ==================== End Slider ==================== -->



        <!-- ==================== Start about ==================== --> */}

        <div className="hero-sec section-padding">
            <div className="container">
                <div className="tl row">
                    <div className="col-lg-6">
                        <div className="cont">
                            <div className="sub-title">
                                <h6 >About Me</h6>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <h3 className="main-title wow" data-splitting>My mission for your brand is to be impactful, remembered and recognized.</h3>
                            <p className="wow fadeInUp" data-wow-delay=".5s">I help businesses to create, build and strengthen their brand. Whether this is through brand identity or simply by marketing stationery - I'm always available to provide an expert level of service to give the best design services for your companies print materials or web Content. </p>
                            <a href="assets/img/Haroon Safi CV.pdf" className="grow bw2 shadow-5 simple-btn mt-40">Download C.V</a>
                        </div>
                    </div>
                    <div className="col-lg-6 valign">
                        <div className="skills-box full-width">
                            <div className="skill-item">
                                <h6 className="custom-font">UI / UX Design</h6>
                                <div className="skill-progress">
                                    <div className="progres custom-font" data-value="90%"></div>
                                </div>
                            </div>
                            <div className="skill-item">
                                <h6 className="custom-font">Brand Identity Design</h6>
                                <div className="skill-progress">
                                    <div className="progres custom-font" data-value="95%"></div>
                                </div>
                            </div>
                            <div className="skill-item">
                                <h6 className="custom-font">Web Development</h6>
                                <div className="skill-progress">
                                    <div className="progres custom-font" data-value="78%"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* <!-- ==================== End about ==================== -->



        <!-- ==================== Start Services ==================== --> */}

        <section className="services">
            <div className="container">
                <div className="sec-head custom-font text-center">
                    <h6 className="wow fadeIn" data-wow-delay=".5s">Best Features</h6>
                    <h3 className="wow" data-splitting>Services.</h3>
                    <span className="tbg">Services</span>
                </div>
                <div className="row">
                    <div className="grow col-lg-4">
                        <div className="item md-mb50 wow fadeInUp" data-wow-delay=".5s">
                            <span className="far fa-user-circle"></span>
                            <h6>UI/UX Design</h6>
                            <p>Tempore corrupti temporibus fuga earum asperiores fugit laudantium.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="item md-mb50 wow fadeInUp" data-wow-delay=".5s">
                            <span className="far fa-object-group"></span>
                            <h6>Brand Identity Design</h6>
                            <p>Tempore corrupti temporibus fuga earum asperiores fugit laudantium.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="item wow fadeInUp" data-wow-delay=".5s">
                            <span className="far fa-file-code "></span>
                            <h6>Web & App Development</h6>
                            <p>Tempore corrupti temporibus fuga earum asperiores fugit laudantium.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="half-bg bottom"></div>
        </section>

        {/* <!-- ==================== End Services ==================== -->



        <!-- ==================== Start numbers ==================== --> */}

        <section className="number-sec section-padding sub-bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="item no-bord">
                            <span className="icon pe-7s-smile"></span>
                            <h3 className="custom-font"><span className="count">34</span></h3>
                            <p className="wow txt" data-splitting>Happy Clients</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="item">
                            <span className="icon pe-7s-portfolio"></span>
                            <h3 className="custom-font"><span className="count">50+</span></h3>
                            <p className="wow txt" data-splitting>Compleate Projects</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="item">
                            <span className="icon pe-7s-smile"></span>
                            <h3 className="custom-font"><span className="count">100+</span></h3>
                            <p className="wow txt" data-splitting>Target Clients</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="item">
                            <span className="icon pe-7s-medal"></span>
                            <h3 className="custom-font"><span className="count">10+</span></h3>
                            <p className="wow txt" data-splitting>Social Contribution</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* <!-- ==================== End numbers ==================== -->



        <!-- ==================== Start Works ==================== --> */}

        <section className="portfolio section-padding pb-70">
            <div className="tl container">
                <div className="sec-head custom-font">
                    <h6 className="wow fadeIn" data-wow-delay=".5s">Portfolio</h6>
                    <h3 className="wow" data-splitting>My Works.</h3>
                    <span className="tbg text-right">Portfolio</span>
                </div>
            </div>
            <div className="container">
                <div className="row">

                    {/* <!-- filter links --> */}
                    <div className="tl filtering col-12">
                        <div className="filter wow fadeIn" data-wow-delay=".5s">
                            <span data-filter='*' className="active">All</span>
                            <span data-filter='.brand'>Branding</span>
                            <span data-filter='.web'>UI Designs</span>
                            <span data-filter='.graphic'>Creative</span>
                        </div>
                    </div>

                    {/* <!-- gallery --> */}
                    <div className="gallery full-width">

                        {/* <!-- gallery item --> */}
                        <div className="col-md-6 items graphic lg-mr wow fadeInUp" data-wow-delay=".4s">
                            <div className="item-img">
                                <a href="project-details.html" className="imago wow">
                                    <img src="assets/img/portfolio/mas1/1.jpg" alt="image"/>
                                    <div className="item-img-overlay"></div>
                                </a>
                            </div>
                            <div className="cont">
                                <span className="tags"><a href="#0">Design</a>, <a href="#0">WordPress</a></span>
                                <h6>Creativity Demand</h6>
                            </div>
                        </div>

                        {/* <!-- gallery item --> */}
                        <div className="col-md-6 items web wow fadeInUp" data-wow-delay=".4s">
                            <div className="item-img">
                                <a href="project-details.html" className="imago wow">
                                    <img src="assets/img/portfolio/mas1/2.jpg" alt="image"/>
                                    <div className="item-img-overlay"></div>
                                </a>
                            </div>
                            <div className="cont">
                                <span className="tags"><a href="#0">Design</a>, <a href="#0">WordPress</a></span>
                                <h6>Through The Breaking</h6>
                            </div>
                        </div>

                        {/* <!-- gallery item --> */}
                        <div className="col-md-6 items web wow fadeInUp" data-wow-delay=".4s">
                            <div className="item-img">
                                <a href="project-details.html" className="imago wow">
                                    <img src="assets/img/portfolio/mas1/5.jpg" alt="image"/>
                                    <div className="item-img-overlay"></div>
                                </a>
                            </div>
                            <div className="cont">
                                <span className="tags"><a href="#0">Design</a>, <a href="#0">WordPress</a></span>
                                <h6>Through The Breaking</h6>
                            </div>
                        </div>

                        {/* <!-- gallery item --> */}
                        <div className="col-md-6 items web graphic wow fadeInUp" data-wow-delay=".4s">
                            <div className="item-img">
                                <a href="project-details.html" className="imago wow">
                                    <img src="assets/img/portfolio/mas1/3.html" alt="image"/>
                                    <div className="item-img-overlay"></div>
                                </a>
                            </div>
                            <div className="cont">
                                <span className="tags"><a href="#0">Design</a>, <a href="#0">WordPress</a></span>
                                <h6>See It Yourself</h6>
                            </div>
                        </div>

                        {/* <!-- gallery item --> */}
                        <div className="col-md-6 items brand wow fadeInUp" data-wow-delay=".4s">
                            <div className="item-img">
                                <a href="project-details.html" className="imago wow">
                                    <img src="assets/img/portfolio/mas1/4.jpg" alt="image"/>
                                    <div className="item-img-overlay"></div>
                                </a>
                            </div>
                            <div className="cont">
                                <span className="tags"><a href="#0">Design</a>, <a href="#0">WordPress</a></span>
                                <h6>Blast From The Past</h6>
                            </div>
                        </div>

                        {/* <!-- gallery item --> */}
                        <div className="col-md-6 items brand wow fadeInUp" data-wow-delay=".4s">
                            <div className="item-img">
                                <a href="project-details.html" className="imago wow">
                                    <img src="assets/img/portfolio/mas1/6.jpg" alt="image"/>
                                    <div className="item-img-overlay"></div>
                                </a>
                            </div>
                            <div className="cont">
                                <span className="tags"><a href="#0">Design</a>, <a href="#0">WordPress</a></span>
                                <h6>Blast From The Past</h6>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>

        {/* <!-- ==================== End Works ==================== -->


        <!-- ==================== Start Blog ==================== --> */}

        {/* <section className="blog-grid section-padding">
            <div className="container">
                <div className="sec-head custom-font text-center">
                    <h6 className="fadeIn" data-wow-delay=".5s">Latest News in</h6>
                    <h3 className="wow" data-splitting>My Blogs.</h3>
                    <span className="tbg">Blogs</span>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="item list md-mb50 wow fadeInUp" data-wow-delay=".3s">
                            <div className="img">
                                <img src="assets/img/blog/1.jpg" alt=""/>
                            </div>
                            <div className="cont">
                                <a href="#0" className="date custom-font">
                                    <span><i>06</i> August</span>
                                </a>
                                <div className="info custom-font">
                                    <a href="#0" className="author">
                                        <span>by / Admin</span>
                                    </a>
                                    <a href="#0" className="tag">
                                        <span>WordPress</span>
                                    </a>
                                </div>
                                <h6>
                                    <a href="#0">The Start-Up Ultimate Guide to Make Your WordPress
                                        Journal.</a>
                                </h6>
                                <div className="btn-more custom-font">
                                    <a href="#0" className="simple-btn">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="item list md-mb50 wow fadeInUp" data-wow-delay=".5s">
                            <div className="img">
                                <img src="assets/img/blog/2.jpg" alt=""/>
                            </div>
                            <div className="cont">
                                <a href="#0" className="date custom-font">
                                    <span><i>06</i> August</span>
                                </a>
                                <div className="info custom-font">
                                    <a href="#0" className="author">
                                        <span>by / Admin</span>
                                    </a>
                                    <a href="#0" className="tag">
                                        <span>WordPress</span>
                                    </a>
                                </div>
                                <h6>
                                    <a href="#0">The Start-Up Ultimate Guide to Make Your WordPress
                                        Journal.</a>
                                </h6>
                                <div className="btn-more custom-font">
                                    <a href="#0" className="simple-btn">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="item list wow fadeInUp" data-wow-delay=".8s">
                            <div className="img">
                                <img src="assets/img/blog/3.jpg" alt=""/>
                            </div>
                            <div className="cont">
                                <a href="#0" className="date custom-font">
                                    <span><i>06</i> August</span>
                                </a>
                                <div className="info custom-font">
                                    <a href="#0" className="author">
                                        <span>by / Admin</span>
                                    </a>
                                    <a href="#0" className="tag">
                                        <span>WordPress</span>
                                    </a>
                                </div>
                                <h6>
                                    <a href="#0">The Start-Up Ultimate Guide to Make Your WordPress
                                        Journal.</a>
                                </h6>
                                <div className="btn-more custom-font">
                                    <a href="#0" className="simple-btn">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}

        {/* <!-- ==================== End Blog ==================== -->



        <!-- ==================== Start clients Brands ==================== --> */}

        <section className="clients-brand section-padding sub-bg">
            <div className="container">
                <div className="brands-crs">
                    <div className="brands">
                        <div className="item" data-wow-delay=".3s">
                            <div className="img">
                                <img src="assets/img/clients/brands/01.svg" alt=""/>
                            </div>
                        
                        </div>
                    </div>
                    <div className="brands">
                        <div className="item" data-wow-delay=".6s">
                            <div className="img">
                                <img src="assets/img/clients/brands/02.svg" alt=""/>
                            </div>
                            
                        </div>
                    </div>
                    <div className="brands">
                        <div className="item" data-wow-delay=".8s">
                            <div className="img">
                                <img src="assets/img/clients/brands/03.svg" alt=""/>
                            </div>
                        
                        </div>
                    </div>
                    <div className="brands">
                        <div className="item" data-wow-delay=".3s">
                            <div className="img">
                                <img src="assets/img/clients/brands/04.svg" alt=""/>
                            </div>
                        
                        </div>
                    </div>
                    <div className="brands">
                        <div className="item" data-wow-delay=".4s">
                            <div className="img">
                                <img src="assets/img/clients/brands/05.svg" alt=""/>
                            </div>
                        
                        </div>
                    </div>
                    <div className="brands">
                        <div className="item" data-wow-delay=".7s">
                            <div className="img">
                                <img src="assets/img/clients/brands/06.svg" alt=""/>
                            </div>
                        
                        </div>
                    </div>
                    <div className="brands">
                        <div className="item" data-wow-delay=".5s">
                            <div className="img">
                                <img src="assets/img/clients/brands/07.svg" alt=""/>
                            </div>
                        
                        </div>
                    </div>
                    <div className="brands">
                        <div className="item" data-wow-delay=".3s">
                            <div className="img">
                                <img src="assets/img/clients/brands/08.svg" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="brands">
                        <div className="item" data-wow-delay=".3s">
                            <div className="img">
                                <img src="assets/img/clients/brands/09.svg" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="brands">
                        <div className="item" data-wow-delay=".3s">
                            <div className="img">
                                <img src="assets/img/clients/brands/10.svg" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="brands">
                        <div className="item" data-wow-delay=".3s">
                            <div className="img">
                                <img src="assets/img/clients/brands/11.svg" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="brands">
                        <div className="item" data-wow-delay=".3s">
                            <div className="img">
                                <img src="assets/img/clients/brands/12.svg" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="brands">
                        <div className="item" data-wow-delay=".3s">
                            <div className="img">
                                <img src="assets/img/clients/brands/13.svg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* <!-- ==================== End clients Brands ==================== -->



        <!-- ==================== Start Contact Section ==================== --> */}

        <section className="contact-sec section-padding">
            <div className="container">
                <div className="sec-head custom-font text-center">
                    <h6 className="wow fadeIn" data-wow-delay=".5s">Get In Touch</h6>
                    <h3 className="wow" data-splitting>Contact Me.</h3>
                    <span className="tbg">Contact</span>
                </div>
                <div className="row justify-content-center wow fadeInUp" data-wow-delay=".5s">
                    <div className="col-lg-10">
                        <div className="form">
                            <form id="contact-form" method="post" action="#">

                                <div className="messages"></div>

                                <div className="controls">

                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <input id="form_name" type="text" name="name" placeholder="Name"
                                                    required="required"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <input id="form_email" type="email" name="email" placeholder="Email"
                                                    required="required"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <input id="form_name" type="text" name="name" placeholder="Name"
                                                    required="required"/>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <textarea id="form_message" name="message" placeholder="Message" rows="4"
                                                    required="required"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="text-center">
                                                <button type="submit"
                                                    className="simple-btn custom-font cursor-pointer"><span className="simple-btn">Send Message</span></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* <!-- ==================== End Contact Section ==================== -->



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
