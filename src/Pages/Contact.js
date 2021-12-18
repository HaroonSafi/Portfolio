import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
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

{/* <!-- ==================== End Navbar ==================== -->


<!-- ==================== Start header ==================== --> */}
              
<header style={{marginTop:'90px'}} className="sec-head custom-font text-center">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-9 col-md-11 static">
                <div className="capt mt-50">
                    <div style={{textAlign:'left'}} className="parlx">
                        <h2 className="custom-font"><span>Let's</span>Talk About Your project.</h2>
                        <p>Feel free to ask me any question or let's do to talk about
                            our future collaboration.</p>
                    </div>

                    <div className="bactxt custom-font valign">
                        <span className="tbg full-width">Contact</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
{/* 
<!-- ==================== End header ==================== -->


<!-- ==================== Start main-content ==================== --> */}

<div className="main-content">

    {/* <!-- ==================== Start Contact ==================== --> */}

    <section className="contact section-padding">
        <div className="container">
            <div style={{textAlign: 'left'}}  className="row">
                <div className="col-lg-6">
                    <div className="form md-mb50">

                        <h4 className="extra-title mb-50">Get In Touch.</h4>

                        <form id="contact-form" method="post" action="http://innovationplans.com/idesign/avo2/avo-dark/contact.php">

                            <div className="messages"></div>

                            <div className="controls">

                                <div className="form-group">
                                    <input id="form_name" type="text" name="name" placeholder="Name"
                                        required="required"/>
                                </div>

                                <div className="form-group">
                                    <input id="form_email" type="email" name="email" placeholder="Email"
                                        required="required"/>
                                </div>

                                <div className="form-group">
                                    <textarea id="form_message" name="message" placeholder="Message" rows="4"
                                        required="required"></textarea>
                                </div>

                                <button type="submit" className="btn-curve btn-lit"><span>Send Message</span></button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-5 offset-lg-1">
                    <div className="cont-info">
                        <h4 className="extra-title mb-50">Contact Info.</h4>
                        <h3 className="custom-font wow" data-splitting>Let's Talk.
                        </h3>
                        <div className="item mb-40">
                            <h5><a href="#0">haroon.csku@gmail.com</a></h5>
                            <h5>+93 770 070 833</h5>
                        </div>
                        <h3 className="custom-font wow" data-splitting>Visit Me.
                        </h3>
                        <div className="item">
                            <h6>15th District, Khair Khana
                                <br />Kabul, Afghanistan</h6>
                        </div>
                        <div className="social mt-50">
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
        </div>
    </section>

    {/* <!-- ==================== End Contact ==================== -->


    <!-- ==================== Start Map ==================== --> */}

    <div className="map" id="ieatmaps"></div>

    {/* <!-- ==================== End Map ==================== -->


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

{/* <!-- ==================== End main-content ==================== --> */}






{/* <!-- jQuery --> */}
<script src="assets/js/jquery-3.0.0.min.js"></script>
<script src="aseets/js/jquery-migrate-3.0.0.min.js"></script>

{/* <!-- plugins --> */}
<script src="assets/js/plugins.js"></script>

{/* <!-- custom scripts --> */}
<script src="assets/js/scripts.js"></script>

{/* <!-- Map --> */}
<script src="assets/js/map.js"></script>

{/* <!-- google map api --> */}
<script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA5bpEs3xlB8vhxNFErwoo3MXR64uavf6Y&amp;callback=initMap">
    </script>
        </React.Fragment>
    )
}
