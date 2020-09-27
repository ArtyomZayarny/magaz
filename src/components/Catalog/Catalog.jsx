import React from 'react';
import ProductList from '../ProductList/ProductList'
import styles from './Catalog.module.css';

export default function Catalog({products,deleteAll,deleteProduct, ...props}) {
   
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Catalog</h2>
            <ProductList deleteAll={deleteAll} deleteProduct={deleteProduct} />
        </div>
    )
}
