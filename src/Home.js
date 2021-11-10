import React from "react";
import { Link } from 'react-router-dom';
// import { SocialIcon } from 'react-social-icons';
import { Helmet } from 'react-helmet';
import logo from './images/logo.png';
import heroImage from './images/hero-image.JPG';
import heroImageCropped from './images/hero-image-cropped.jpg';
import './scss/main.scss';
import './scss/components/_body.scss';
import './scss/components/_navbar.scss';
import './scss/components/_about.scss';
import './scss/components/_hero-image.scss';


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
      {/* <div className='burger-menu'>
        <SlideMenu />
      </div> */}

      <header>
        {/* <!-- Nav bar  --> */}
        <nav className="navbar">
          <div className='navbar__main-menu'>
            <div className='navbar__sub-main-menu'>
              <div>
                <a className="navbar__logo" href="/">
                  <img src={logo} alt="Hayley's Logo" />
                </a>
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
            <div className="about">
              <div className="about__text">
                <h1 className="about__heading">About</h1>
                <hr className="about__line" />
                <p className="about__para">
                  <span className="about__paraHeading">Hello, my name is Hayley Uberti.</span>
                  I am a skilful and a wholehearted dance and yoga teacher with a
                  background in performance. As a professional dancer with two
                  decades of dance training and teaching, I already had a keen
                  interest in how the body moved and ways to keep fit and healthy
                  but unfortuntely with so much demand on the body, my dancing
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
                  giving me the confidence and knowledge to open my own bespoke
                  studio in Bath, England and running
                  <span
                  ><a href="retreats.html"
                  ><button className="about__retreats">Retreats</button></a
                    >
                  </span>
                  around the world. I have been teaching passionately ever since
                  and continue my dedicated daily self-practice and professional
                  skills development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>


  );
}

export default Home;
