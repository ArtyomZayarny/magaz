import React, {useState, useEffect} from 'react';
import ProductCard from '../Product/ProductCard';
import ProductsInfo from '../ProductList/ProductsInfo';
import catalog from '../../catalog.json';
import styles from './ProductList.module.css';


export default function ProductList() {
    const [data,setData] = useState({
        products:[],
    }) 

    useEffect( () => {
        if(data.products.length === 0) {
            setData({...data,products:catalog.products})
        }
    }, []);
   const deleteProduct = (id) => {
        setData({...data,products:data.products.filter( product => product.id !== id)})
   }
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
   const deleteAll = () => setData({...data, products:[]})

    return (
        <>
        {data.products.length > 0 ?
        <>
            <ProductsInfo 
                totalAmount={data.products.length}
                totalSum={calcTotalSum(data.products)}
                averagePrice={calcAveragePrice(data.products)}
                deleteAll={deleteAll}
            />
            <ul className={styles.grid}>
                        {data.products.map( (product) => {
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