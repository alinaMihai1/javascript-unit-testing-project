import React, { FC, ChangeEvent } from 'react';
import { Dispatch } from 'redux';
import { searchBy } from '../../apiUtils';
import { connect } from 'react-redux';
import './searchProductsInput.css';

interface IDispatch {
    setSearchText?: (value: string) => any;
}

const SearchProductsInput: FC<IDispatch> = ({ setSearchText = () => {} }) => {
    function handleTextChange(e: ChangeEvent<any>) {
        const { value } = e.target;
        setSearchText(value);
    }
    return (
        <div className={'search-product-input'}>
            <input placeholder='Search products' type='text' onChange={handleTextChange} />
        </div>
    );
};

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = (dispatch: Dispatch): IDispatch => {
    return {
        setSearchText: (value: string) => searchBy(dispatch, value),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SearchProductsInput);
