import { Component } from 'react'
import './GetInspiredCard.css';


// import MountFuji from ".";
import MountFuji from "../../assets/img/fuji.jpg";
import Kyoto from "../../assets/img/kyoto.jpg";
import Tokyo from "../../assets/img/tokyo.jpg";
import Niigata from "../../assets/img/nigata.jpg";
import Sapporo from "../../assets/img/sapporo.jpg";



class GetInspiredCard extends Component {
    render() {
        return <div className="trip__cards">

            {serverData.map((snippet, id) => <Card key={id} {...snippet} />)}
        </div>;
    }
}

const serverData = [
    { name: "Mount Fuji", src: MountFuji, id: 1 },
    { name: "Kyoto", src: Kyoto, id: 2 },
    { name: "Tokyo", src: Tokyo, id: 3 },
    { name: "Niigata", src: Niigata, id: 1 },
    { name: "Sapporo", src: Sapporo, id: 2 },
]


class Card extends Component {
    render() {
        const { name, src } = this.props;
        return (
            <div className="trip__card">
                <figure>
                    <img className="trip__card-pic" src={src} alt={name} />
                    <figcaption className="trip__card-title">{name}</figcaption>
                </figure>
            </div>

        )
    }
}

export default GetInspiredCard;



