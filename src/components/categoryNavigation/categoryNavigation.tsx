import React, { useEffect, FC } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Link } from 'react-router-dom';
import { getCategories, selectCategory } from '../../apiUtils';
import { Category } from '../../data/entities';
import './categoryNavigation.css';
import { getSelectedCategory, getAllCategories } from '../../redux/selectors';
import { AppState } from '../../redux';

interface Props {
    categories: Category[];
    selectedCategory: string;
}

interface IDispatch {
    fetchCategories: () => any;
    selectCategory: (categoryId: string) => any;
}

const CategoryItem = ({ value = {} as Category, onClick = () => {}, isSelected = false }) => {
    return (
        <li className={`category-item ${isSelected ? 'category-item--selected' : ''}`} onClick={onClick}>
            <Link to={`/${value.id}`}>{value.title}</Link>
        </li>
    );
};

const CategoryNavigation: FC<Props & IDispatch> = ({
    categories = [],
    selectedCategory = undefined,
    fetchCategories = () => {},
    selectCategory = (categoryId: string) => {},
}) => {
    useEffect(() => {
        fetchCategories();
    });
    function handleCategorySelect(categoryId: string) {
        selectCategory(categoryId);
    }
    return (
        <div className='category-navigation'>
            <ul>
                {categories.map((category: any) => (
                    <CategoryItem
                        key={category.id}
                        value={category}
                        isSelected={selectedCategory === category.id}
                        onClick={() => handleCategorySelect(category.id)}
                    />
                ))}
            </ul>
        </div>
    );
};

const mapStateToProps = (state: AppState) => ({
    categories: getAllCategories(state),
    selectedCategory: getSelectedCategory(state),
});

const mapDispatchToProps = (dispatch: Dispatch): IDispatch => {
    return {
        fetchCategories: () => getCategories(dispatch),
        selectCategory: (categoryId: string) => selectCategory(dispatch, categoryId),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CategoryNavigation);
