import React, { useState } from 'react';
import './Header.css';






function Header() {
    const [header, setheader] = useState('');
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            setheader('header__active');
        } else {
            setheader('');
        }
    };

    const anchors = document.querySelectorAll('a[href*="#"]')

    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()

            const blockID = anchor.getAttribute('href').substr(1)

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }

    return (
        <header className={`header ${header}`}>
            <div className="wrapper">
                <div className="header__wrapper">
                    <div className="header__logo">
                        <a className="header__logo-link" href="/">
                            <img className="header__logo-img" src="./img/svg/odigo-Logo.svg" alt="Discover Amazing places in Japan" />
                        </a>
                    </div>

                    <nav className="navbar">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <a className="nav__link" href="#articles">Articles</a>
                            </li>
                            <li className="nav__item">
                                <a className="nav__link" href="#locations">Locations</a>
                            </li>
                            <li className="nav__item">
                                <a className="nav__link" href="#videos">Videos</a>
                            </li>
                            <li className="nav__item">
                                <a className="nav__link" href="#signin">Sign in</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>

    );
}

export default Header;
