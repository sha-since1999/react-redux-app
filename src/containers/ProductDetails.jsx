import React, { useEffect } from 'react'
import { useParams } from "react-router-dom"
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux'
import { selectedProduct,removeSelectedProduct } from "../redux/actions/productAction"

const ProductDetails = () => {

    let param = useParams()
    let dispatch = useDispatch()
    const {productID} = param
    const product = useSelector(state => state.product.product)
    // console.log(product.product);
    const { title, image, description, category, price } = product

    const fetchProductDetail = async (productID) => {
        const response = await axios.get(`https://fakestoreapi.com/products/${ productID }`).catch(err => console.log("Err :", err))
        dispatch(selectedProduct(response.data))
        // console.log(response.data)
    }

    useEffect(() => {
        if (productID && productID !== "") fetchProductDetail(productID)
        return () =>dispatch(removeSelectedProduct());
    }, [productID])

    return (
        <div className="ui grid container">
            {Object.keys(product).length == 0 ? (<div>.......loading </div>) : (
                
                <div className="ui placeholder segment">
                    <div className="ui two column stackable center aligned grid">
                        <div className="ui vertical divider"> AND</div>
                        <div className="middle aligned row">
                            <div className="column lp"> <img src={image} alt={title} /></div>
                            <div className="column rp">
                                <h1>{title}</h1>
                                <h2><a href="#" className="ui teal tag label">${price}</a></h2>
                                <h3 className="ui brown block header"> {category}</h3>
                                <p>{description}</p>
                                <div className="ui vertical animated button" tabIndex="0">
                                    <div className="hidden content"> <i className="shop icon"></i></div>
                                    <div className="visible content"> Add to Cart</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>

    )
}

export default ProductDetails