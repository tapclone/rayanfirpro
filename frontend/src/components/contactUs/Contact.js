import React from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate=useNavigate()
  return (
    <>
      <section
        class="page-title centred"
        style={{
          backgroundImage:
            " url(http://azim.commonsupport.com/Firbrigs/assets/images/background/page-title.jpg)",
        }}
      >
        <div class="overlay-bg"></div>
        <div class="overlay-bg"></div>
        <div class="pattern-layer"></div>

        <div class="auto-container">
          <div class="content-box">
            <div class="title">
              <h1>Contact Us</h1>
            </div>
            <ul class="bread-crumb clearfix">
              <li>
              <a onClick={(e)=>{navigate("/")}}>Home /</a>
              </li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </section>
      <section>
            <div class="gap">
                <div class="container">
                    <div class="cnt-wrp">
                        <div class="row">
                            <div class="col-md-8 col-sm-12 col-lg-8">
                                <div class="cnt-frm">
                                    <h4 itemprop="headline">Stay With us</h4>
                                    <form>
                                        <div class="row">
                                            <div class="col-md-12 col-sm-12 col-lg-12">
                                                <input  type="text" placeholder="Your Name..."/>
                                            </div>
                                            <div class="col-md-12 col-sm-12 col-lg-12">
                                                <input  type="email" placeholder="Email Address"/>
                                            </div>
                                            <div class="col-md-12 col-sm-12 col-lg-12">
                                                <input  type="text" placeholder="Add Subject Here..."/>
                                            </div>
                                            <div class="col-md-12 col-sm-12 col-lg-12">
                                                <textarea  placeholder="Your Message Goes Here"></textarea>
                                            </div>
                                            <div class="col-md-12 col-sm-12 col-lg-12">
                                                <button type="submit" class="theme-btn brd-rd5">Submit Now</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-12 col-lg-4">
                                <div class="cnt-inf-wrp">
                                    <h4 itemprop="headline">Contact info</h4>
                                    <ul class="cnt-inf-lst">
                                        <li><i class="fas fa-envelope theme-clr"></i> <strong>Email</strong><a href="#" title="" itemprop="url">rayanfiresystems@gmail.com</a></li>
                                        <li><i class="fas fa-map-marker-alt theme-clr"></i> <strong>Address</strong><span>791 Commonwealth Dr. Warrendale, PA 15086 United State USA</span></li>
                                        <li><i class="fas fa-phone theme-clr"></i> <strong>Phone</strong><span>04952998879</span><span>9072495879</span><span>9072495878</span> </li>
                                    </ul>
                                    <div class="scl4">
                                        <a href="#" title="Twitter" itemprop="url" target="_blank"><i class="fab fa-twitter"></i></a>
                                        <a href="#" title="Facebook" itemprop="url" target="_blank"><i class="fab fa-facebook-f"></i></a>
                                        <a href="#" title="Linkedin" itemprop="url" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                                        <a href="#" title="Google Plus" itemprop="url" target="_blank"><i class="fab fa-google-plus-g"></i></a>
                                        <a href="#" title="Instagram" itemprop="url" target="_blank"><i class="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="gap no-gap">
                <div class="cnt-mp" id="cnt-mp"></div>
            </div>
        </section>

    </>
  );
}

export default Contact;
