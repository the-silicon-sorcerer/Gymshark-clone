import heroImage from './assets/hero.image.webp'
import { ReactComponent as AddIcon } from './assets/icon-add.svg'
import productCardImage from './assets/card-product-image.webp'
import logo from './assets/gymshark-logo-3F1E7A14A4-seeklogo.com.png'
import './App.css';

function App() {
  return (
    <div className='app'>
      <div className='headers'>
        <div className='utils-nav'>
          <a className='util-link' href="#">My Account</a>
          <a className='util-link' href="#">Blog</a>
          <a className='util-link' href="#">Email Sign up</a>
          <a className='util-link' href="#">Help</a>
          <a className='util-link' href="#">O United States ?</a>
        </div>
        <div className='main-nav'>
          <div className='main-nav-link nav-logo-container'>
            <img src={logo}></img>
          </div>
          <div className='main-nav-link nav-categories-container'>
            <div className='nav-categories'>Womans</div>
            <div className='nav-categories'>Mens</div>
            <div className='nav-categories'>Accessories</div>
          </div>
          <div className='main-nav-link nav-icons-container'>
            <div className='nav-icons'>1</div>
            <div className='nav-icons'>2</div>
            <div className='nav-icons'>3</div>
            <div className='nav-icons'>4</div>
          </div>
        </div>
      </div>
      <div className="headers-block"></div>
      <div className="offers-scroller">
        <p>Want e-mails you'll actually read? Sign up for exclusive deals, our latest drops, and more!</p>
      </div>
      <div className="main-body">
        <div className='hero-container'>
          <img className='hero-image' src={heroImage} />
          <div className='hero-overlay'>
            <div className='hero-title-container'>
              <h1 className='hero-title'>GIFT GYMSHARK</h1>
              <p className='hero-copy'>Take a look at this season's best sellers<br />to find the hottest gifts.</p>
              <div className='hero-title-links-container'>
                <div className="hero-link">gifts for her</div>
                <div className="hero-link">gifts for him</div>
              </div>
            </div>
          </div>
        </div>
        <div className='collection-container'>
          <div className='collection-topic-container'>
            <div className='collection-title-container'>
              <h2 className='collection-title'>GYMSHARK GIFTS</h2>
            </div>
            <div className='collection-link'>
              <a href='#'>View All</a>
            </div>
          </div>
          <div className='cards-container'>
            <div className='collection-item-card'>
              <div className='card-figure'>
                <a href="#" className='card-product-link'>
                  <img className='product-card-image' src={productCardImage} />
                </a>
                <div className='quickbuy-container'>
                  <div className='quickbuy-header'>
                    <AddIcon />
                    <p>quick add</p>
                  </div>
                  <div className='quickbuy-buttons'>
                    <div className='quickbuy-button'>XS</div>
                    <div className='quickbuy-button'>S</div>
                    <div className='quickbuy-button'>M</div>
                    <div className='quickbuy-button'>L</div>
                    <div className='quickbuy-button'>XL</div>
                    <div className='quickbuy-button'>XXL</div>
                  </div>
                </div>
              </div>
              <div className='card-caption'>
                <a>
                  <div className='card-main-info'>
                    <h3 className='card-product-name'>Vital Seamless 2.0 Leggings</h3>
                    <div className='card-product-price'>$54 USD</div>
                  </div>
                  <div className='card-product-color'>black marl</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
