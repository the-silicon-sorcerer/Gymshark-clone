import CollectionItemCard from '../collection-item-card/collection-item-card.component'
import './card-collection.styles.css'

const CardCollection = ({ data }) => {
    const { collectionTitle } = data[0]
    return (
        <div className='collection-container'>
            <div className='collection-topic-container'>
                <div className='collection-title-container'>
                    <h2 className='collection-title'>{collectionTitle}</h2>
                </div>
                <div className='collection-link'>
                    <a href='#'>View All</a>
                </div>
            </div>
            <div className='cards-container'>
                {data.map((product) => {
                    return <CollectionItemCard cardData={product} />
                })}
            </div>
        </div>
    )
}

export default CardCollection;