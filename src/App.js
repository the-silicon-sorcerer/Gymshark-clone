import heroImage from './assets/hero.image.webp'
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
        <div className='card-container'>
          <div className='collection-topic-container'>
            <div className='collection-title'>
              <h2>GYMSHARK GIFTS</h2>
            </div>
            <div className='collection-link'>
              <a href='#'>view all</a>
            </div>
          </div>
          <div className='cards-container'>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
