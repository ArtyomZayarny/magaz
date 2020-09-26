import React from 'react';
import ProductCard from '../Product/ProductCard';
import ProductsInfo from '../ProductList/ProductsInfo';
import styles from './ProductList.module.css';

export default function ProductList({products,deleteAll,deleteProduct, ...props}) {
   
   
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
                deleteAll={deleteAll}
            />
            <ul className={styles.grid}>
                        {products.map( (product) => {
                        return  <li key={product.id}>
                                    <ProductCard
                                        id={product.id}
                                        imgUrl={product.img} 
                                        name={product.name}
                                        price={product.price} 
                                        deleteProduct={deleteProduct}
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