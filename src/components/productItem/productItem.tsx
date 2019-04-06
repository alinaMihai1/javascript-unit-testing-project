import React, { FC, useState } from 'react';
import { Product } from '../../data/entities';
import './productItem.css';
const notfound = require('../../assets/notfound.png');

interface Props {
    item: Product;
}

const ProductItem: FC<Props> = ({ item = {} as Product }) => {
    const [toggleDescription, setToggleDescription] = useState(false);
    const { src } = item.images['365'] || ({} as any);
    return (
        <li
            className={`product-item ${toggleDescription ? 'product-item--expanded' : ''}`}
            onClick={() => setToggleDescription(!toggleDescription)}
        >
            <div className={'product-item__header'}>
                <img src={src ? src : notfound} />
                <span className={'product-item__title'}>{item.title}</span>
            </div>
            
            {toggleDescription && (
                    <p className={'product-item__description'}>{item.description}</p>
            )}
        </li>
    );
};

export default ProductItem;
