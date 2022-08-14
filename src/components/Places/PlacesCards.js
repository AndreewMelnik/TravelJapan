import { Component } from 'react'
import "./PlacesCards.css";



import Nagoya from "../../assets/img/nagoya.jpg";
import Niigata from "../../assets/img/niigata.jpg";
import Osaka from "../../assets/img/osaka.jpg";
import Saitama from "../../assets/img/saitama.jpg";
import Ueno from "../../assets/img/ueno.jpg";
import Shibuya from "../../assets/img/shibuya.jpg";

class PlacesCards extends Component {
  render() {
    return <div className="places__cards">

      {serverData.map((snippet, id) => <Card key={id} {...snippet} />)}
    </div>;
  }
}

const serverData = [
  { name: "NAGOYA", descr: "Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over.Being gorgeous with belly side up i could pee on this.", src: Nagoya, id: 1 },
  { name: "NIIGATA", descr: "Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over.Being gorgeous with belly side up i could pee on this.", src: Niigata, id: 2 },
  { name: "OSAKA", descr: "Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over.Being gorgeous with belly side up i could pee on this.", src: Osaka, id: 3 },
  { name: "SAITAMA", descr: "Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over.Being gorgeous with belly side up i could pee on this.", src: Saitama, id: 4 },
  { name: "UENO", descr: "Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over.Being gorgeous with belly side up i could pee on this.", src: Ueno, id: 5 },
  { name: "SHIBUYA", descr: "Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over.Being gorgeous with belly side up i could pee on this.", src: Shibuya, id: 6 }



]


class Card extends Component {
  render() {
    const { name, descr, src } = this.props;
    return (
      <div className="places__card">
        <figure className="places__card-pic">
          <img src={src} alt={name} />

          <figcaption className="places__card-caption">
            <h3 className="places__card-title">{name}</h3>
            <div class="top-places__card-likes">
              <span class="top-places__card-likes-value">221</span>
            </div>
            <div class="top-places__card-comments">
              <span class="top-places__card-comments-value">50</span>
            </div>
          </figcaption>

        </figure>
        <p className="places__card-desc">{descr}</p>
        <button className="places__card-button" type="submit">see more</button>
      </div>

    )
  }
}

export default PlacesCards;

