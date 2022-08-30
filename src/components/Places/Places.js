import './Places.css';
import PlacesCards from './PlacesCards';

function Places() {
  return (
    <div className="places" id="locations">
      <div className="wrapper__main">
        <h1 className="places__title">Today top places to visit</h1>
        <PlacesCards />
      </div>
    </div>

  );
}

export default Places;
