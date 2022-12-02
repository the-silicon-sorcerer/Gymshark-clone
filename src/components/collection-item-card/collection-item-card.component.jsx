import { ReactComponent as AddIcon } from '../../assets/icon-add.svg'
import './collection-card-item.styles.css'

const CollectionItemCard = ({ cardData }) => {
    const { productImage, productName, productColor, productPrice } = cardData
    return (
        <div className='collection-item-card'
            onMouseOver={(e) => {
                e.currentTarget.children[0].children[1].classList.remove('hidden')
            }}
            onMouseOut={(e) => {
                e.currentTarget.children[0].children[1].classList.add('hidden')
            }}
        >
            <div className='card-figure'>
                <a href="#" className='card-product-link'>
                    <img className='product-card-image' src={`/images/${productImage}`} />
                </a>
                <div className='quickbuy-container hidden'>
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
                        <h3 className='card-product-name'>{productName}</h3>
                        <div className='card-product-price'>{productPrice}</div>
                    </div>
                    <div className='card-product-color'>{productColor}</div>
                </a>
            </div>
        </div>
    )
}

export default CollectionItemCard;