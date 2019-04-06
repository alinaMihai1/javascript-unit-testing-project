import React, { Component, FC, useEffect } from 'react';
import ProductList from '../components/productList/productList';
import { connect } from 'react-redux';
import { getProductsByCategory, getProductsBySearchKeyword, getSearchKeyword } from '../redux/selectors';
import { getProducts, selectCategory } from '../apiUtils';
import { RouteComponentProps } from 'react-router';
import SearchProductsInput from '../components/searchProductsInput/searchProductsInput';
import { Product } from '../data/entities';
import './categoryDetailsContainer.css';

interface Props {
    categoryProducts: Product[];
    productsBySearchKeyword: Product[];
    searchKeyWord: string;
}

interface Dispatch {
    fetchProducts: () => void;
    selectCategory: (category: string) => void;
}

interface RouteParams {
    categoryId: string;
}

const CategoryDetailsContainer: FC<Props & Dispatch & RouteComponentProps<RouteParams>> = ({
    categoryProducts,
    productsBySearchKeyword,
    searchKeyWord,
    match,
    fetchProducts = () => {},
    selectCategory = (category: string) => {},
}) => {
    useEffect(() => {
        fetchProducts();
        selectCategory(match.params.categoryId);
    });

    function getDisplayProducts() {
        return searchKeyWord.trim() ? productsBySearchKeyword : categoryProducts;
    }

    return (
        <div className='category-details'>
            <SearchProductsInput />
            <ProductList items={getDisplayProducts()} />
        </div>
    );
};

function mapStateToProps(state: any): Props {
    return {
        categoryProducts: getProductsByCategory(state),
        productsBySearchKeyword: getProductsBySearchKeyword(state),
        searchKeyWord: getSearchKeyword(state),
    };
}

function mapDispatchToProps(dispatch: any): Dispatch {
    return {
        fetchProducts: () => getProducts(dispatch),
        selectCategory: (category: string) => selectCategory(dispatch, category),
    };
}

const ConnectedCategoryDetailsContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(CategoryDetailsContainer);

export default ConnectedCategoryDetailsContainer;
