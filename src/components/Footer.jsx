import React from 'react'
import Leaf from '../assets/leaf.png'
import '../styles/Footer.css'

const Location = ( {location} ) => {
    return (
        <div className='location-section'>
            <p className='location'>{location}</p>
        </div>
    )
}

const bottomLeftList = ['About', 'Advertising', 'Business', 'How Search works'];
const bottomRightList = ['Privacy', 'Terms', 'Settings'];

const bottomLeftLinks = bottomLeftList.map((link, index) => {
    return <li key={index}><a href="#" className='link'>{link}</a></li>
});
const bottomRightLinks = bottomRightList.map((link, index) => {
    return <li key={index}><a href="#" className='link'>{link}</a></li>
});

const Links = () => {
    return (
        <div className='links-section'>
            <div className='bottom-left-links-container'>
                <ul className='bottom-left-links-wrapper'>{bottomLeftLinks}</ul>
            </div>
            <div className='middle-links-container'>
                <img src={Leaf} alt="Leaf" className='leaf' />
                <a href="#" className='link'>Carbon neutral since 2007</a>
            </div>
            <div className='bottom-right-links-container'>
                <ul className='bottom-right-links-wrapper'>{bottomRightLinks}</ul>
            </div>
        </div>
    )
}

const Footer = () => {
    return (
        <footer>
          <Location location="Nigeria" />
          <Links />
        </footer>
    )
}

export default Footer
