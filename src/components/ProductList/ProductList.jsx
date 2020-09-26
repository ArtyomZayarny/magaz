import React, {useState, useEffect} from 'react';
import ProductCard from '../Product/ProductCard';
import catalog from '../../catalog.json';
import styles from './ProductList.module.css';
import Button from '@material-ui/core/Button';

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
        let totalSum = 0;
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
        {data.products.length > 0 ?
        <>
            <div className={styles.general}>
                <span className={styles.generalItem}><b>Total products: </b>{data.products.length}</span> 
                <span className={styles.generalItem}><b>Total sum: </b>{calcTotalSum(data.products)} $</span>
                <span className={styles.generalItem}><b>Average price: {calcAveragePrice(data.products)}</b></span>
                <Button className={styles.delete} variant="contained" onClick={() => {setData({...data,products:[]})} }>Delete All</Button>
            </div>
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