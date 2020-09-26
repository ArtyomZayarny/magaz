import React from 'react';
import styles from './Catalog.module.css';
import catalog from '../../catalog.json';
import ProductCard from '../Product/ProductCard';


export default function Catalog() {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Catalog</h2>
            <ul className={styles.grid}>
                { catalog.products.map( (product,index) => {
                    return  <li key={index}>
                                <ProductCard 
                                    imgUrl={product.img} 
                                    name={product.name} 
                                    description={product.description}/>
                            </li>
                    })
                } 
            </ul>
        </div>
    )
}
