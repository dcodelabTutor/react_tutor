//common
import Header from './components/common/Header';
import Footer from './components/common/Footer';

//main
import Visual from './components/main/Visual';
import Intro from './components/main/Intro';
import Info from './components/main/Info';

//sub
import Department from './components/sub/Department';
import Community from './components/sub/Community';
import Gallery from './components/sub/Gallery';
import Youtube from './components/sub/Youtube';
import Location from './components/sub/Location';
import Join from './components/sub/Join';

//sass 연결
import './scss/style.scss';

export default function App() {
  return (
    <div className="App">   
      <Header />
      <Visual />
      <Intro />
      <Info />
      <Department />
      <Community />
      <Gallery />
      <Youtube />
      <Location />
      <Join />
      <Footer />
    </div>
  );
}


