import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { SocialIcon } from 'react-social-icons';
import * as FaIcons from 'react-icons/fa';
import yogaHeroImage from './images/yoga/hero-image-yoga.jpg';
import yogaHeroImageCropped from './images/yoga/hero-image-yoga-cropped.jpg';
import yogaHayleyPose from './images/yoga/yoga-hayley-pose.jpg';
import yogaDownward from './images/yoga/yoga-downward.JPG';
import yogaGroup from './images/yoga/yoga-group.jpg';
import yogaHearts from './images/yoga/yoga-hearts.jpg';
import yogaBeach from './images/yoga/yoga-beach.JPG';
import yogaStretch from './images/yoga/yoga-stretch.JPG';
import yogaFront from './images/yoga/yoga-front.JPG';
import yogaPose from './images/yoga/yoga-pose.JPG';
import yogaGroup2 from './images/yoga/yoga-group2.JPG';
import yogaHayley from './images/yoga/yoga-hayley.jpg';
import yogaOutside from './images/yoga/yoga-outside.jpg';
import yogaOneOnOne from './images/yoga/yoga-oneOnOne.jpg';
import './scss/main.scss';
import './scss/components/_body.scss';
import './scss/components/_navbar.scss';
import './scss/components/_about.scss';
import './scss/components/_footer.scss';
import './scss/components/_offerings.scss';
import './scss/components/_hero-image.scss';
import './scss/components/_grid-gallery.scss';
import './scss/components/_yoga.scss';

// import SlideMenu from './SlideMenu';


function Yoga() {
  return (
    <div className="Yoga">
      <Helmet>
        <title>Yoga Page</title>
        <meta
          name="description"
          content="Yoga page" />
      </Helmet>

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
          <source media="(max-width:450px)" srcSet={yogaHeroImageCropped} />
          <source srcSet={yogaHeroImage} />
          <img className="hero-image" src={yogaHeroImage} alt="Woman in child's pose on a yoga mat" />
        </picture>
      </header>


      {/* <!-- About section --> */}
      <section>
        <div className="container-fluid px-0">
          <div className="row mx-0">
            <div className="about col-sm-8 px-0">
              <div className="about__text ">
                <h1 className="about__heading">Yoga</h1>
                <hr className="about__line" />
                <p className="about__para">
                  I have completed a Certificate 4 in training and assessment,
                  200-HR Hatha Yoga Teacher training, 50-HR Advanced Chinese
                  Medicine Yin Yoga training with Hugh Lee, a 12-month sacred
                  white tantric mentorship program with Sian Pascale from The
                  Light Collective, as well as many other short courses and
                  workshops. I am a registered Level 2 Yoga Teacher with Yoga
                  Australia and recently graduated from a Diploma of Health
                  Science at Southern School of Natural Therapies.
                </p>
                <p className="about__para">
                  Book a class that meets your needs, whether that's getting
                  started with the yoga basics, adding to the foundations already
                  known, or honing in on a specific technique. I can help you feel energised, relaxed, stretched, balanced, strong and/or calm.
                </p>

              </div>
            </div>
            <div className="about__image col-sm-4 px-0">
              <picture >
                {/* <source media="(max-width:768px)" srcSet={yogaHayleyPoseCropped} /> */}
                <source srcSet={yogaHayleyPose} />
                <img className="about__image" src={yogaHayleyPose} alt="A person sitting crossed-legged on a yoga mat, hands in prayer against forehead" />
              </picture>
            </div>
          </div>
        </div>
      </section>

      <div className="yogaOfferings">
        <p className="yogaOfferings__text">
          <h2 className="yogaOfferings__heading">Yoga Offerings:</h2>

          Regular Sessions or One offs.
          <br />
          <br />
          Private 1:1 Sessions (Face to Face or via Zoom). <br />
          <br />
          Private Groups (Hens, Birthdays, Corporate Team Building,
          Events).
          <br />
          <br />
          <h2 className="yogaOfferings__heading">Choose your yoga style:</h2>
          Hatha, Vinyasa, Kundalini, Restorative, Yin, Meditation, blended dance-yoga
        </p>

      </div>

      {/* <!-- Photos --> */}
      <section id="gallery">
        <div className="gallery">
          <figure className="gallery__item gallery__item--1">
            <img
              src={yogaDownward}
              className="gallery__img"
              alt="Two people in downward dog yoga position"
            />
          </figure>
          <figure className="gallery__item gallery__item--2">
            <img
              src={yogaGroup}
              className="gallery__img"
              alt="Lots of people lying down being lead through meditation"
            />
          </figure>
          <figure className="gallery__item gallery__item--3">
            <img
              src={yogaHearts}
              className="gallery__img"
              alt="The back of three people making heart shapes with their hands"
            />
          </figure>
          <figure className="gallery__item gallery__item--4">
            <img
              src={yogaBeach}
              className="gallery__img"
              alt="Multiple people doing yoga on a beach"
            />
          </figure>
          <figure className="gallery__item gallery__item--5">
            <img
              src={yogaStretch}
              className="gallery__img"
              alt="A person's legs, using hand to help stret"
            />
          </figure>
          <figure className="gallery__item gallery__item--6">
            <img
              src={yogaFront}
              className="gallery__img"
              alt="The front of person lying on a yoga mat, hand on heart and hand on stomach"
            />
          </figure>
        </div>
      </section>


      {/* <!-- Socials --> */}
      <section id="socialMedia">
        <div className="container-fluid px-0">
          <div className="row mx-0">
            <div className="socials">
              <h1 className="socials__heading">Let's connect on social media</h1>
              <a
                className="socials__para"
                href="https://www.instagram.com/hayleydanceandyoga/?hl=en"
              >
                <p>@hayleydanceandyoga</p>
              </a>
              <div className="socials__flex">
                <img
                  className="socials__image"
                  src={yogaPose}
                  alt="A person doing a yoga pose, leg stretch to the air in side plank"
                />
                <img
                  className="socials__image"
                  src={yogaGroup2}
                  alt="A person instructing a yoga class"
                />
                <img
                  className="socials__image"
                  src={yogaHayley}
                  alt="The top half of a person, hands in prayer position"
                /><img
                  className="socials__image"
                  src={yogaOutside}
                  alt="A group of people doing yoga outside with tree behind"
                />
                <img
                  className="socials__image"
                  src={yogaOneOnOne}
                  alt="Two people doing a yoga pose in a studio"
                />
              </div>
            </div>
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

export default Yoga;