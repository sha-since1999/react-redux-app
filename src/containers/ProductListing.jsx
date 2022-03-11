import React, {useEffect } from 'react';
import { useSelector,useDispatch } from "react-redux";
import { setProducts } from '../redux/actions/productAction';
import ProductComponent from './ProductComponent';
import axios from "axios";
const ProductListing = () => {
    const products = useSelector(state => state.allProducts)
    console.log("products :" , products )
    let dispatch = useDispatch()

    const fetchProducts = async() =>{
        const response = await axios.get('https://fakestoreapi.com/products')
        .catch((err) => console.log("Err",err));
        dispatch(setProducts(response.data,));
        // console.log(response.data); 
    }
    useEffect(() => {
        fetchProducts();
    }, []);
    return (
        <div className="ui grid container">
            <ProductComponent/>
        </div>
    );
};
export default ProductListing;

