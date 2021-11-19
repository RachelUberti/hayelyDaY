import { slide as Menu } from 'react-burger-menu';
import { SocialIcon } from 'react-social-icons';
import * as FaIcons from "react-icons/fa";
import './scss/components/_navbar.scss';
import './scss/components/_slide-menu.scss';


function SlideMenu() {
  return (
    <Menu>
      <a href='/'>
        <button className='slide-menu__button'>About</button>
      </a>
      <a href="/menuspage">
        <button className='slide-menu__button'>Offerings</button>
      </a>
      <a href="/menuspage">
        <button className='slide-menu__button'>Connect</button>
      </a>
      <div className="footer__socials">
        <SocialIcon className="socials-button" url="https://www.facebook.com/profile.php?id=100012157428974" network="facebook" bgColor="#859a81" fgColor="#ffffff" color="currentColor" style={{ height: 65, width: 65 }} />
        <SocialIcon className="socials-button" url="https://www.instagram.com/threecrownshotel/?hl=en" network="linkedin" bgColor="#859a81" fgColor="#ffffff" style={{ height: 65, width: 65 }} />
        <SocialIcon className="socials-button" url="https://www.instagram.com/hayleydanceandyoga/?hl=en" network="instagram" bgColor="#859a81" fgColor="#ffffff" color="currentColor" style={{ height: 65, width: 65 }} />
      </div>
      <div>
        <p className='slide-menu__logo-text'><FaIcons.FaAtlassian className='logo' />
          Hayley Dance & Yoga</p>
      </div>
    </Menu>
  );
}

export default SlideMenu;