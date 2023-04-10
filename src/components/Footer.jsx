import React from 'react'
import { footerLinks } from './List'
import { legalAndSettings } from './List'
import leaf from '../assets/leaf.png'
import '../styles/Footer.css'

const Location = ( {location} ) => {
    return (
        <div className='location-section'>
            <p className='location'>{location}</p>
        </div>
    )
}

const FooterLeftLinks = () => {
    const footerLeft = footerLinks.map((link, index) => {
        return <li key={index}><a href="#" className='link'>{link}</a></li>
    });

    return (
        <div className='bottom-left-links-container'>
            <ul className='bottom-left-links-wrapper'>{footerLeft}</ul>
        </div>
    )
}

const FooterMiddleLink = ( {title} ) => {
    return (
        <div className='middle-link-container'>
            <img src={leaf} alt="Leaf" className='leaf' />
            <a href="#" className='link'>{title}</a>
        </div>
    )
}

const FooterRightLinks = () => {
    const footerRight = legalAndSettings.map((link, index) => {
        return <li key={index}><a href="#" className='link'>{link}</a></li>
    });

    return (
        <div className='bottom-right-links-container'>
            <ul className='bottom-right-links-wrapper'>{footerRight}</ul>
        </div>
    )
}

const Links = () => {
    return (
        <div className='links-section'>
            <FooterLeftLinks />
            <FooterMiddleLink title='Carbon neutral since 2007' /> 
            <FooterRightLinks />
        </div>
    )
}

const Footer = () => {
    return (
        <footer>
          <Location location='Nigeria' />
          <Links />
        </footer>
    )
}

export default Footer