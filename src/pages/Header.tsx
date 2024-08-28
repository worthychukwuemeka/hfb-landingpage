/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Header = () => (
  <header id="header_main" className="header header-fixed style-absolute">
    <div className="header-inner">
      <div id="site-logo">
        <div id="site-logo-inner">
          <a href="index.html" rel="home" className="main-logo">
            <img
              id="logo_header"
              src="assets/images/logo-white.png"
              data-retina="assets/images/logo/logo@2x.png"
              alt="Site Logo"
            />
          </a>
        </div>
      </div>
      {/* logo */}
      <nav id="main-nav" className="main-nav">
        {/* Navigation items can be added here */}
      </nav>
      {/* /#main-nav */}
      <div className="header-right">
        <a href="#" className="sign-in">Sign In</a>
        <a href="#" className="tf-button get-start h45">
          <span>Get Started</span>
          <i className="icon-arrow-right2"></i>
        </a>
      </div>
      <div className="mobile-button hidden">
        <span></span>
      </div>
      {/* /.mobile-button */}
    </div>
    <div className="mobile-nav-wrap">
      <div className="overlay-mobile-nav"></div>
      <div className="inner-mobile-nav">
        <a href="index.html" rel="home" className="main-logo">
          <img
            id="mobile-logo_header"
            src="assets/images/logo-white.png"
            data-retina="assets/images/logo/logo@2x.png"
            alt="Mobile Site Logo"
          />
        </a>
        <div className="mobile-nav-close">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            fill="white"
            x="0px"
            y="0px"
            width="20px"
            height="20px"
            viewBox="0 0 122.878 122.88"
            enableBackground="new 0 0 122.878 122.88"
            xmlSpace="preserve"
          >
            <g>
              <path
                d="M1.426,8.313c-1.901-1.901-1.901-4.984,0-6.886c1.901-1.902,4.984-1.902,6.886,0l53.127,53.127l53.127-53.127c1.901-1.902,4.984-1.902,6.887,0c1.901,1.901,1.901,4.985,0,6.886L68.324,61.439l53.128,53.128c1.901,1.901,1.901,4.984,0,6.886c-1.902,1.902-4.985,1.902-6.887,0L61.438,68.326L8.312,121.453c-1.901,1.902-4.984,1.902-6.886,0c-1.901-1.901-1.901-4.984,0-6.886l53.127-53.128L1.426,8.313L1.426,8.313z"
              />
            </g>
          </svg>
        </div>
        <nav id="mobile-main-nav" className="mobile-main-nav">
          <ul id="menu-mobile-menu" className="menu">
            <li className="menu-item">
              <a className="item-menu-mobile" href="#">Sign in</a>
            </li>
            <li className="menu-item">
              <a href="#" className="item-menu-mobile tf-button get-start h45">
                <span>Get Started</span>
                <i className="icon-arrow-right2"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
);

export default Header;
