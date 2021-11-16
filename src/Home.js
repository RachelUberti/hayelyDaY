import React from "react";
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import { Helmet } from 'react-helmet';
import * as FaIcons from "react-icons/fa";
// import logo from './images/logo.png';
// import logo2 from './images/logo2.png';
import heroImage from './images/homepage/hero-image.JPG';
import heroImageCropped from './images/homepage/hero-image-cropped.jpg';
import hayleyImage from './images/homepage/hayley.jpg';
import hayleyImageCropped from './images/homepage/hayleyCropped.jpg';
import yogaImage from './images/homepage/yoga.JPG';
import danceImage from './images/homepage/dance.jpg';
import './scss/main.scss';
import './scss/components/_body.scss';
import './scss/components/_navbar.scss';
import './scss/components/_about.scss';
import './scss/components/_footer.scss';
import './scss/components/_offerings.scss';
import './scss/components/_hero-image.scss';
import SlideMenu from "./SlideMenu";



function Home() {
  return (
    <div className="Home">
      <Helmet>
        <title>Home</title>
        <meta
          name="description"
          content="Hayley Dance and Yoga business"
        />
      </Helmet>
      <div className='burger-menu'>
        <SlideMenu />
      </div>

      <header>
        {/* <!-- Nav bar  --> */}
        <nav className="navbar">
          <div className='navbar__main-menu'>
            <div className='navbar__sub-main-menu'>
              <div>
                <p className='navbar__logo-text'><FaIcons.FaAtlassian className='logo' />
                  Hayley Dance & Yoga</p>
              </div>
              <div>
                <button className='navbar__button'>
                  About
                </button>
                <Link to="/yoga">
                  <button className='navbar__button'>
                    Offerings
                  </button>
                </Link>
                <button className='navbar__button'>
                  Contact
                </button>
              </div>
            </div>
          </div>
        </nav>


        {/* <!-- Hero image --> */}
        <picture >
          <source media="(max-width:450px)" srcSet={heroImageCropped} />
          <source srcSet={heroImage} />
          <img className="hero-image" src={heroImage} alt="Hayely dancing" />
        </picture>
      </header>

      {/* <!-- About section --> */}
      <section>
        <div className="container-fluid px-0">
          <div className="row mx-0">
            <div className="about col-lg-8 px-0">
              <div className="about__text ">
                <h1 className="about__heading">About</h1>
                <hr className="about__line" />
                <p className="about__para">
                  <span className="about__paraHeading">Hello, my name is Hayley Uberti. </span>
                  I am a skilful and a wholehearted dance and yoga teacher with a
                  background in performance. As a professional dancer with two
                  decades of dance training and teaching, I already had a keen
                  interest in how the body moved and ways to keep fit and healthy.
                  Unfortuntely, with so much demand on the body, my dancing
                  career came to a halt from injury eight years ago. Turning to
                  yoga for my own healing, it not only benefited my physical body
                  but also greatly supported my journey emotionally.
                </p>
                <p className="about__para">
                  This discovery of yoga awakened a deep spark to learn more about
                  the ancient practice, rich history and powerful tools which
                  eventually led me to complete my Hatha Yoga teacher training in
                  India where I was privileged to receive private tuition and
                  mentoring from a wise, traditional and accomplished yoga master,
                  giving me the confidence and knowledge teach in various formats and run
                  <span
                  ><a href="retreats.html"
                  ><button className="about__retreats">Retreats</button></a>
                  </span>around the world. I have been teaching passionately ever since
                  and continue my dedicated daily self-practice and
                  skills development.
                </p>
              </div>
            </div>
            <div className="about__image col-lg-4 px-0">
              <picture >
                <source media="(max-width:768px)" srcSet={hayleyImageCropped} />
                <source srcSet={hayleyImage} />
                <img className="about__image" src={hayleyImage} alt="A person doing a yoga pose, legs crossed on the floor and holding hands together in prayer position front of head" />
              </picture>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Offerings --> */}
      <section id="offeringsSection">
        <div className="offerings">
          <h1 className="offerings__heading">Offerings</h1>
          <hr className="offerings__line" />
          <div className="offerings__grid">
            <div className="offerings__grid-item">
              <picture >
                <source srcSet={yogaImage} />
                <img className="offerings__image" src={yogaImage} alt="A person doing a yoga pose, legs crossed on the floor and holding hands together in prayer position front of head" />
              </picture>
              <h2 className="offerings__sec-headings">Yoga</h2>
              <p className="offerings__grid-para">
                I offer yoga classes to all ages, levels and abilities. Range of
                styles and practices, and no prior experience required. Classes can be tailored and blended as
                needed.
              </p>
              <p className="offerings__grid-para">Private 1:1 Sessions</p>
              <p className="offerings__grid-para">Private Groups</p>
              <a href="yoga.html"><button className="offerings__grid-button">Find out more</button></a>
            </div>
            <div className="offerings__grid-item">
              <picture >
                <source srcSet={danceImage} />
                <img className="offerings__image" src={danceImage} alt="Top half of a person, of their back, with hands together in prayer but arms are straight up to towards the sky" />
              </picture>
              <h2 className="offerings__sec-headings">Dance</h2>
              <p className="offerings__grid-para">
                I offer dance classes, open to all ages and abilities. No prior
                dance experience needed or partner required. Classes can be
                tailored at your request.
              </p>
              <p className="offerings__grid-para">Private 1:1 Sessions</p>
              <p className="offerings__grid-para">Private Groups</p>
              <a href="dance.html"><button id="offerings-second-button" className="offerings__grid-button">Find out more</button></a>
            </div>
          </div>
          <div id="enquiry" className="offerings__message">
            <a href="contact.html"><button className="offerings__message-button">
              Click here to submit an enquiry or connect below
              <FaIcons.FaFeatherAlt />
            </button></a>
          </div>
        </div>
      </section>


      {/* <!-- Footer --> */}
      <footer>
        <div className="container-fluid px-0">
          <div className="row mx-0">
            <div className="footer">
              <div className="footer__text">
                <div className="footer__logo" >
                  {/* <a href="/">
                    <img src={logo2} alt="Hayley's Logo" />
                  </a> */}
                  <FaIcons.FaAtlassian className="logo-footer" />
                </div>
                <h1 className="footer__heading">Connect</h1>
                <div className="footer__line-div" >
                  <hr className="footer__line" />
                </div>
                <p className="footer__hours">Hayley Dance and Yoga</p>
                <div className="footer__socials">
                  <SocialIcon className="footer__socials-button" url="https://www.facebook.com/profile.php?id=100012157428974" network="facebook" bgColor="#403F48" fgColor="#ebe5db" color="currentColor" style={{ height: 65, width: 65 }} />
                  <SocialIcon className="footer__socials-button" url="https://www.instagram.com/threecrownshotel/?hl=en" network="linkedin" bgColor="#403F48" fgColor="#ebe5db" style={{ height: 65, width: 65 }} />
                  <SocialIcon className="footer__socials-button" url="https://www.instagram.com/hayleydanceandyoga/?hl=en" network="instagram" bgColor="#403F48" fgColor="#ebe5db" color="currentColor" style={{ height: 65, width: 65 }} />
                </div>
                <div class="footer__links">
                  <a href="index.html"><button class="footer__link-item">Homepage</button></a>
                  <a href="#about"><button class="footer__link-item">About</button></a>
                  <a href="#offeringsSection"><button class="footer__link-item">Offerings</button></a>
                  <a href="#enquiry"><button class="footer__link-item">Connect</button></a>
                </div>
                <p className="footer__credit">Website design and engineering by <a className="footer__credit-link" href="https://www.linkedin.com/in/racheluberti/">Rachel Uberti</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer >
    </div >
  );
}

export default Home;
