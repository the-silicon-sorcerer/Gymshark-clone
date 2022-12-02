import './header.styles.css'
import { Fragment } from 'react';

const Header = ({ heroData }) => {
    return (
        <Fragment>
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
                        <img src='/images/gymshark-logo-3F1E7A14A4-seeklogo.com.png'></img>
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
        </Fragment>
    )
}

export default Header;