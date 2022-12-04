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
        <CardCollection data={cardCollection.cards2} />
        <HeroImage data={heroData.heroList[1]} />
        <CardCollection data={cardCollection.cards1} />
        <HeroImage data={heroData.heroList[2]} />
        <div className='promotion-collection'>
          <div className='promo-card'>
            <img className='promo-image' src='/images/promo-image3.webp'></img>
            <div className='promo-content'>
              <div className='promo-content-container'>
                <p>KLARNA</p>
                <div>READ MORE</div>
              </div>
            </div>
          </div>
          <div className='promo-card'>
            <img className='promo-image' src='/images/promo-image2.webp'></img>
            <div className='promo-content'>
              <div className='promo-content-container'>
                <p>STUDENT DISCOUNT</p>
                <div>READ MORE</div>
              </div>
            </div>
          </div>
          <div className='promo-card'>
            <img className='promo-image' src='/images/promo-image.jpg'></img>
            <div className='promo-content'>
              <div className='promo-content-container'>
                <p>AFTERPAY</p>
                <div>READ MORE</div>
              </div>
            </div>
          </div>
        </div>
        <div className='email-signup-promo'>
          <p>Want e-mails you'll actually read? Sign up for exclusive deals, our latest drops, and more!</p>
          <div>SIGN UP</div>
        </div>
      </div>
    </div>
  );
}

export default App;
