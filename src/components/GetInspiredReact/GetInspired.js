import './GetInspired.css';
import GetInspiredCard from './GetInspiredCard';


function GetInspired() {
    return (
        <section class="trip">
            <div class="trip__caption">
                <h2 class="trip__title">
                    Get inspired for your next trip
                </h2>
                <a class="trip__card-more" href="#!">VIEW ALL</a>
            </div>

            <GetInspiredCard />

        </section>
    );
}

export default GetInspired;
