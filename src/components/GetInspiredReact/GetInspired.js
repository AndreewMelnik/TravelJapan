import './GetInspired.css';
import GetInspiredCard from './GetInspiredCard';


function GetInspired() {
    return (
        <section class="trip">
            <div className="wrapper__main">
                <div className="trip__caption">
                    <h2 className="trip__title">
                        Get inspired for your next trip
                    </h2>
                    <a className="trip__card-more" href="#!">VIEW ALL</a>
                </div>
            
            <GetInspiredCard />
            </div>
        </section>
    );
}

export default GetInspired;
