import Header from './components/header/header.component'
import OfferScroller from './components/offers-scroller/offers-scroller.component'
import HeroImage from './components/hero-image/hero-image.component'
import CardCollection from './components/card-collection/card-collection.component'

import heroData from './helpers/hero.data'
import cardCollection from './helpers/card-collection.data'

import './App.css';

function App() {
  return (
    <div className='app'>
      <Header />
      <OfferScroller />
      <div className="main-body">
        <HeroImage data={heroData.heroList[0]} />
        <CardCollection data={cardCollection.cards} />
      </div>
    </div>
  );
}

export default App;
