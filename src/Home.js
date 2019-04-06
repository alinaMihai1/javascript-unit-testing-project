import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProducts } from './apiUtils';
import ProductList from './components/productList/productList';

class Home extends Component {
    componentDidMount() {
        this.props.fetchProducts();
    }
    render() {
        return (
            <div style={{ paddingLeft: '10px' }}>
                <h4>All available products</h4>
                <ProductList items={this.props.products} />
            </div>
        );
    }
}

const mapStateToProps = ({ products }) => ({
    products: products.list,
});

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProducts: () => getProducts(dispatch),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home);
