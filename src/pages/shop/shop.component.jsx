import React from 'react'

import Shop_Data from './shop.data'
import CollectionPreview from '../../components/preview-collection/collection-preview'

class ShopPage extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            collections: Shop_Data,
        }

    }
    
    render() {
        const {collections} = this.state;

        return (
            <div className='shop-page'>
                {
                    collections.map(({id, ...otherCollectionProps}) => (
                        <CollectionPreview key={id} {...otherCollectionProps} />
                    ))
                }
            </div>
        )
    }
}

export default ShopPage

