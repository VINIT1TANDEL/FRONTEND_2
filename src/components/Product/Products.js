import React, { useState, Fragment, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { clearErrors, getProduct } from '../../actions/productAction.js';
import Loader from '../layout/Loader/Loader.js';
import ProductCard from '../Home/ProductCard.js';
import './Products.css';
import Pagination from 'react-js-pagination';
import { Slider, Typography, Drawer, IconButton } from '@material-ui/core';
import { useAlert } from 'react-alert';
import MetaData from '../layout/MetaData.js';
import FilterListIcon from '@material-ui/icons/FilterList';
import FilterIcon from '@material-ui/icons/FilterList';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const Product = () => {
  const categories = [
    "Laptop",
    "Footwear",
    "Bottom",
    "Tops",
    "Attire",
    "Camera",
    "SmartPhones",
  ];

  const dispatch = useDispatch();
  const alert = useAlert();
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 250000]);
  const [category, setCategory] = useState("");
  const [ratings, setRatings] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { keyword } = useParams();
  const { products, loading, error, productsCount, resultPerPage } = useSelector((state) => state.products);

  const setCurrentPageNo = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct(keyword, currentPage, price, category, ratings));
  }, [dispatch, keyword, error, currentPage, price, category, ratings, alert]);

  return (
    <Fragment>
      {loading ? <Loader /> : (
        <Fragment>
          <MetaData title="PRODUCTS -- NovaKart" />
          <h2 className="productsHeading">Products</h2>
          <IconButton onClick={() => setDrawerOpen(true)} className="filterButton">
            <FilterListIcon fontSize="large" color="inherit" />
          </IconButton>
          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
            transitionDuration={{ enter: 500, exit: 500 }}
            classes={{ paper: "drawerPaper" }}
          >
            <div className="filterBox">
              <Typography variant="h6" className="filterTitle">Filter</Typography>
              <Typography variant="h6" className="filterSubTitle">Price</Typography>
              <Slider
                value={price}
                onChange={priceHandler}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                min={0}
                max={250000}
                className="priceSlider"
              />
              <Typography variant="h6" className="filterSubTitle">Categories</Typography>
              <ul className="categoryBox">
                {categories.map((cat) => (
                  <li
                    className="category-link"
                    key={cat}
                    onClick={() => setCategory(cat)}
                  >
                    {cat}
                  </li>
                ))}
              </ul>
              <fieldset>
                <Typography component="legend" className="filterSubTitle">Ratings Above</Typography>
                <Slider
                  value={ratings}
                  onChange={(e, newRating) => setRatings(newRating)}
                  aria-labelledby="continuous-slider"
                  valueLabelDisplay="auto"
                  min={0}
                  max={5}
                  className="ratingSlider"
                />
              </fieldset>
            </div>
          </Drawer>
          <div className="products">
            {products && products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
          {!loading && productsCount > 0 && productsCount > resultPerPage && (
  <div className="paginationBox">
    <Pagination
      activePage={currentPage}
      itemsCountPerPage={resultPerPage}
      totalItemsCount={productsCount}
      onChange={setCurrentPageNo}
      nextPageText="Next"
      prevPageText="Prev"
      firstPageText="1st"
      lastPageText="Last"
      itemClass="page-item"
      linkClass="page-link"
      activeClass="pageItemActive"
      activeLinkClass="pageLinkActive"
    />
  </div>

          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Product;
