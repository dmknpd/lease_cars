import "./Footer.scss";
import appStore from "../../img/app-store.png";
import googlePlay from "../../img/google-play.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__menus-container">
          <div className="footer__menu">
            <div className="footer__menu-header">Products</div>
            <ul className="footer__menu-list">
              <li className="footer__menu-item">
                <a href="#" className="footer__menu-link">
                  Used
                </a>
              </li>
              <li className="footer__menu-item">
                <a href="#" className="footer__menu-link">
                  New
                </a>
              </li>
              <li className="footer__menu-item">
                <a href="#" className="footer__menu-link">
                  Sell your car
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__menu">
            <div className="footer__menu">
              <div className="footer__menu-header">Resources</div>
              <ul className="footer__menu-list">
                <li className="footer__menu-item">
                  <a href="#" className="footer__menu-link">
                    Blog
                  </a>
                </li>
                <li className="footer__menu-item">
                  <a href="#" className="footer__menu-link">
                    FAQ
                  </a>
                </li>
                <li className="footer__menu-item">
                  <a href="#" className="footer__menu-link">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__menu">
            <div className="footer__menu">
              <div className="footer__menu-header">Work With TrueCar</div>
              <ul className="footer__menu-list">
                <li className="footer__menu-item">
                  <a href="#" className="footer__menu-link">
                    Dealers
                  </a>
                </li>
                <li className="footer__menu-item">
                  <a href="#" className="footer__menu-link">
                    Partners
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__menu">
            <div className="footer__menu">
              <div className="footer__menu-header">About</div>
              <ul className="footer__menu-list">
                <li className="footer__menu-item">
                  <a href="#" className="footer__menu-link">
                    About us
                  </a>
                </li>
                <li className="footer__menu-item">
                  <a href="#" className="footer__menu-link">
                    Team
                  </a>
                </li>
                <li className="footer__menu-item">
                  <a href="#" className="footer__menu-link">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__mobile-store">
          <a href="#" className="footer__mobile-link">
            <img
              src={appStore}
              alt="App store link"
              className="footer__mobile-img"
            />
          </a>
          <a href="#" className="footer__mobile-link">
            <img
              src={googlePlay}
              alt="Google play link"
              className="footer__mobile-img"
            />
          </a>
        </div>
        <div className="footer__text">
          For questions about the TrueCar Auto Buying Service please call
          1-888-878-3227.<br></br>Certified Dealers are contractually obligated
          by TrueCar to meet certain customer service requirements and complete
          the TrueCar Dealer Certification Program.<br></br>TrueCar does not
          broker, sell, or lease motor vehicles. Unless otherwise noted, all
          vehicles shown on this website are offered for sale by licensed motor
          vehicle dealers. All vehicles are subject to prior sale. By accessing
          this website, you agree to the TrueCar Terms of Service and Privacy
          Policy.
        </div>
      </div>
      <div className="footer__terms-container">
        <ul className="footer__terms-list">
          <li className="footer__terms-item">
            <a href="#" className="footer__terms-link">
              Terms of Service
            </a>
          </li>
          <li className="footer__terms-item">
            <a href="#" className="footer__terms-link">
              Privacy Policy
            </a>
          </li>
          <li className="footer__terms-item">
            <a href="#" className="footer__terms-link">
              Do Not Sell My Personal Information
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
