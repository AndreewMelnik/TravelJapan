import './Tour.css';
import Tottori from "../../assets/img/tottori.jpg";
import Arashiyama from "../../assets/img/arashiyama.jpg";

function Tour() {
    return (
        <div className="tour" id="articles">
            <div className="wrapper__main">
                <div className="tour__cards">
                    <div className="tour__card-pic">
                        <img className="trip__card-thumb" src={Tottori}  alt="Tottori" />
                    </div>
                    <div className="tour__caption">
                        <h1 className="tour__title">
                            Prefecture in Focus: Tottori
                        </h1>
                        <p className="tour__subtitle">
                            Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this if i had the energy but under the bed, for attack the child, open the door.Being gorgeous with belly side up i could pee on this.
                        </p>
                        <a className="tour__card-more" href="#!">VIEW PREFECTURE</a>
                    </div>
                </div>
                <div className="tour__cards">
                    <div className="tour__caption">
                        <h1 className="tour__title">
                            Featured Neighborhood: Kyoto’s Arashiyama
                        </h1>
                        <p className="tour__subtitle">
                            Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this if i had the energy but under the bed, for attack the child, open the door.Being gorgeous with belly side up i could pee on this.
                        </p>
                        <a className="tour__card-more" href="#!">VIEW NEIGHBORHOOD</a>
                    </div>
                    <div className="tour__card-pic">
                        <img className="trip__card-thumb" src={Arashiyama}  alt="Arashiyama" />
                    </div>
                </div>
            </div>
        </div>

    );
}
// src="./img/arashiyama.jpg"
export default Tour;
// src="./img/tottori.jpg"