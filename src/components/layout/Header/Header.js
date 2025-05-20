import React from 'react';
import { ReactNavbar } from 'overlay-navbar';
import { MdAccountCircle } from 'react-icons/md';
import { MdSearch } from 'react-icons/md';
import { MdAddShoppingCart } from 'react-icons/md';
import logo from '../../../images/cover.png';

const options = {
    burgerColorHover: 'grey',
    logo,
    logoWidth: '20vmax',
    navColor1: '#333',
    logoHoverSize: '10px',
    logoHoverColor: '#eb4034',
    link1Text: 'Home',
    link2Text: 'Products',
    link3Text: 'Contact Us',
    link4Text: 'About Us',
    link1Url: '/',
    link2Url: '/products',
    link3Url: '/contact',
    link4Url: '/about',
    link1Size: '1.3vmax',
    link1Color: 'white',  // Change link text color here
    nav1justifyContent: 'flex-end',
    nav2justifyContent: 'flex-end',
    nav3justifyContent: 'flex-start',
    nav4justifyContent: 'flex-start',
    link1ColorHover: '#1abc9c',  // Change link hover color here
    link1Margin: '1vmax',
    profileIcon: true,
    profileIconColor: 'white',  // Change profile icon color here
    profileIconUrl: '/login',
    ProfileIconElement: MdAccountCircle,
    searchIcon: true,
    searchIconColor: 'white',  // Change search icon color here
    SearchIconElement: MdSearch,
    cartIcon: true,
    cartIconColor: 'white',  // Change cart icon color here
    CartIconElement: MdAddShoppingCart,
    profileIconColorHover: '#1abc9c',  // Change profile icon hover color here
    searchIconColorHover: '#1abc9c',  // Change search icon hover color here
    cartIconColorHover: '#1abc9c',  // Change cart icon hover color here
    cartIconMargin: '1vmax',
  };
  
const Header = () => {
return <ReactNavbar {...options} />;
};

export default Header;
