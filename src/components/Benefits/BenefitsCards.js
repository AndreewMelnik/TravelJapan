import { Component } from 'react'
import "./BenefitsCards.css";



import Odigo from "../../assets/img/svg/odigo_icon.svg";
import Guide from "../../assets/img/svg/guide_icon.svg";
import Local from "../../assets/img/svg/local_icon.svg";

class BenefitsCards extends Component {
  render() {
    return <div className="benefits__cards">

      {serverData.map((snippet, id) => <Card key={id} {...snippet} />)}
    </div>;
  }
}

const serverData = [
  { name: "Welcome to Odigo!", descr: "Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over.", src: Odigo, id: 1 },
  { name: "Your Personal Japan Guide", descr: "Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over.", src: Guide, id: 2 },
  { name: "Promoting Local Businesses", descr: "Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over.", src: Local, id: 3 },

]


class Card extends Component {
  render() {
    const { name, descr, src } = this.props;
    return (
      <div class="benefits__card">
        <div class="benefits__card-pic">
          <img src={src} alt={name} />
        </div>
        <h3 class="benefits__card-title">{name}</h3>
        <p class="benefits__card-desc">{descr}</p>
        <a class="benefits__card-more" href="#!">LEARN MORE</a>
      </div>

    )
  }
}

export default BenefitsCards;

