import './App.css';
import Intro from '../Intro/Intro';
import Header from '../Header/Header';
import Benefits from '../Benefits/Benefits';
import GetInspired from '../GetInspiredReact/GetInspired';
import Tour from '../Tour/Tour';
import Places from '../Places/Places'
import Video from '../Video/Video';
import Footer from '../Footer/Footer';


function App() {
  return (
    <div className="app">
      <Header/>
      <Intro/>
      <Benefits/>
      <GetInspired/>
      <Tour/>
      <Places/>
      <Video/>
      <Footer/>
    </div>
   
  );
}

export default App;
