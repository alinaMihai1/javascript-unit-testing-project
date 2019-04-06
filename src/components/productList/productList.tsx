import React, { FC } from 'react';
import ProductItem from '../productItem/productItem';
import './productList.css';

interface Props {
    items: any;
}

const ProductList: FC<Props> = ({ items = [] }) => {
    return (
        <ul className='product-list'>
            {items.length > 0 && items.map((item: any) => <ProductItem key={item.id} item={item} />)}
            {!items.length && <p>No items found</p>}
        </ul>
    );
};

export default ProductList;
