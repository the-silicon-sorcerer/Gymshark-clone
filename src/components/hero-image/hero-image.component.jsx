import './hero-image.styles.css'

const HeroImage = ({ data }) => {
    const { heroImage, heroTitle, heroCopy, heroLinkCopy, secondLinkHidden } = data
    return (
        <div className='hero-container'>
            <img className='hero-image' src={`/images/${heroImage}`} />
            <div className='hero-overlay'>
                <div className='hero-title-container'>
                    <h1 className='hero-title'>{heroTitle}</h1>
                    <p className='hero-copy'>{heroCopy}</p>
                    <div className='hero-title-links-container'>
                        <div className="hero-link">{heroLinkCopy[0]}</div>
                        <div className={`hero-link ${secondLinkHidden ? 'hidden' : null}`}>{heroLinkCopy[1]}</div>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default HeroImage;