import heroImage from './assets/ezgif-5-774f11576e.jpg'
import logo from './assets/gymshark-logo-3F1E7A14A4-seeklogo.com.png'
import './App.css';

function App() {
  return (
    <div className='app'>
      <div className='headers'>
        <div className='utils-nav'>
          <a className='util-link'>My Account</a>
          <a className='util-link'>Blog</a>
          <a className='util-link'>Email Sign up</a>
          <a className='util-link'>Help</a>
          <a className='util-link'>O United States ?</a>
        </div>
        <div className='main-nav'>
          <div className='main-nav-link nav-logo-container'>
            <img src={logo}></img>
          </div>
          <div className='main-nav-link nav-categories-container'>
            <div className='nav-categories'>Womans Sale</div>
            <div className='nav-categories'>Mens Sale</div>
            <div className='nav-categories'>Accessories Sale</div>
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
        <img className='hero-image' src={heroImage} />
      </div>
    </div>
  );
}

export default App;
