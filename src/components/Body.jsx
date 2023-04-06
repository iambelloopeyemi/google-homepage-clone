import React from 'react'
import GoogleLogo from '../assets/google-logo.png'
import GoogleMicIcon from '../assets/google-mic-icon.png'
import GoogleLensIcon from '../assets/google-lens-icon.png'
import '../styles/Body.css'

const LogoSection = () => {
  return (
    <div className='logo-container'>
      <img src={GoogleLogo} alt="Google Logo" className='logo' />
    </div>
  )
}

const SearchSection = () => {
  return (
    <div className='search-section'>
      <form action="#" className='search-field-wrapper' >
        <i className="material-symbols-outlined search-icon">search</i>
        <input type='search' className='search-field' />
        <img src={GoogleMicIcon} alt="Google Mic Icon" className='google-mic-icon' />
        <img src={GoogleLensIcon} alt="Google Mic Icon" className='google-lens-icon' />
      </form>
      </div>
  )
}

const ButtonSection = ( {FirstButtonTitle, SecondButtonTitle } ) => {
  return (
    <div className='btn-section'>
      <button className='first-btn'>{FirstButtonTitle}</button>
      <button className='second-btn'>{SecondButtonTitle}</button>
    </div>
  )
}

const languages = ['Hausa', 'Igbo', 'Èdè Yorùbá', 'Nigeria Pidgin'];

const languagesOptions = languages.map((language, index) => {
  return <li key={index}><a href="#" className='language'>{language}</a></li>
});

const LanguagesSection = () => {
  return (
    <div className='languages-section'> 
      <p className='languages-offering'>Google offered in:</p>
      <ul className='languages-options'>{languagesOptions}</ul>
    </div>
  )
}

const Body = () => {
  return (
    <main>
      <LogoSection />
      <SearchSection />
      <ButtonSection FirstButtonTitle='Google Search' SecondButtonTitle="I'm Feeling Lucky" />
      <LanguagesSection />
    </main>
  )
}

export default Body