import React from 'react'
import Button from '@material-ui/core/Button';
import styles from './ProductList.module.css';

export default function ProductsInfo({totalAmount,totalSum,averagePrice,deleteAll, ...props}) {
return (
    <div className={styles.general}>
        <span className={styles.generalItem}><b>Total products: </b>{totalAmount}</span> 
        <span className={styles.generalItem}><b>Total sum: </b>{totalSum} $</span>
        <span className={styles.generalItem}><b>Average price: </b>{averagePrice} $</span>
        <Button className={styles.delete} variant="contained" onClick={() => {deleteAll()} }>Delete All</Button>
    </div>
)
    
}