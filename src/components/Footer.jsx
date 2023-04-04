import React from 'react'
import Leaf from '../assets/leaf.png'

const FirstFooterSection = ( {location} ) => {
    return (
        <div>
            {location}
        </div>
    )
}

const LeftBottomFooterLinks = ( {aLink, bLink, cLink, dLink} ) => {
    return (
        <div>
            <div>
                <a href="#">{aLink}</a>
                <a href="#">{bLink}</a>
                <a href="#">{cLink}</a>
                <a href="#">{dLink}</a>
            </div>
        </div>
    )
}

const MiddleBottomFooterLinks = ( {link} ) => {
    return (
        <div>
            <div>
                <img src={Leaf} alt="leaf" />
                <a href="#">{link}</a>
            </div>
        </div>
    )
}

const RightBottomFooterLinks = ( {aLink, bLink, cLink, dLink} ) => {
    return (
        <div>
            <div>
                <a href="#">{aLink}</a>
                <a href="#">{bLink}</a>
                <a href="#">{cLink}</a>
            </div>
        </div>
    )
}

const SecondFooterSection = () => {
    return (
        <div>
            <LeftBottomFooterLinks aLink="About" bLink="Advertising" 
            cLink="Business" dLink="How Search works" />
            <MiddleBottomFooterLinks link="Carbon neutral since 2007" />
            <RightBottomFooterLinks aLink="Privacy" bLink="Terms" 
            cLink="Settings" />
        </div>
    )
}

const Footer = () => {
  return (
    <footer>
        <FirstFooterSection location="Nigeria" />
        <SecondFooterSection />
    </footer>
  )
}

export default Footer
