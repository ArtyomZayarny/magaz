import React from 'react';
import ProductCard from '../Product/ProductCard';
import ProductsInfo from '../ProductList/ProductsInfo';
import styles from './ProductList.module.css';
import {useSelector } from 'react-redux';


export default function ProductList() {

   const products =  useSelector(state => state.products);

   
   const calcTotalSum = (products) => {
        const reducer = (accumulator, currentValue) => accumulator + parseInt(currentValue.price);
        return products.reduce(reducer,0)
   }
   const calcAveragePrice = (products) => {
        const totalSum = calcTotalSum(products);
        const amount = products.length;
        const average = +(totalSum / amount).toFixed(2);
        return average;
   }

    return (
        <>
        {products.length > 0 ?
        <>
            <ProductsInfo 
                totalAmount={products.length}
                totalSum={calcTotalSum(products)}
                averagePrice={calcAveragePrice(products)}
            />
            <ul className={styles.grid}>
                        {products.map( (product) => {
                        return  <li key={product.id}>
                                    <ProductCard
                                        id={product.id}
                                        imgUrl={product.img} 
                                        name={product.name}
                                        price={product.price} 
                                        description={product.description}/>
                                </li>
                        })
                    } 
                </ul>
            </>
            : <h2>There is no products at this catalog</h2>
            }   
        </>
    )
}