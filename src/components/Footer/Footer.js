import { Component } from 'react'
import "./Footer.css";



function Footer() {
  return (
    <header className="footer">
      <div className="wrapper">
        <div className="footer__wrapper">
          <div className="footer__logo">
            <a className="footer__logo-link" href="/">
              <img className="footer__logo-img" src="./img/svg/odigo-Logo-lg.svg" alt="Discover Amazing places in Japan" />
            </a>
          </div>
          <Navigation />
        </div>
      </div>
    </header>

  );
}

export default Footer;

class Navigation extends Component {
  render() {
    return <div className="footer__cards">

      {serverData.map((snippet, id) => <Title key={id} {...snippet} />)}
    </div>;
  }
}

const serverData = [
  { name: "Company", id: 1 }, { name: "About", id: 2 }, { name: "Team", id: 3 }, { name: "Careers", id: 4 }, { name: "Privacy Policy", id: 5 },
  { name: "Locations", id: 6 }, { name: "Tokio", id: 7 }, { name: "Kyoto", id: 8 }, { name: "Osaka", id: 9 }, { name: "Hokkaido", id: 10 },
  { name: "Social Media", id: 11 }, { name: "Facebook", id: 12 }, { name: "Twitter", id: 13 }, { name: "Instagram", id: 14 }, { name: "Youtube", id: 5 },

]
class Title extends Component {
  render() {
    const { name, } = this.props;
    return (
      <h3 className="footer__title">{name}</h3>
    )
  }
}










