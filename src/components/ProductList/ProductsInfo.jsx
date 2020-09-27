import React from 'react'
import Button from '@material-ui/core/Button';
import styles from './ProductList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {deleteAllProducts} from '../../redux/store'

export default function ProductsInfo({totalAmount,totalSum,averagePrice,deleteAll, ...props}) {
    const dispatch = useDispatch();
    return (
        <div className={styles.general}>
            <span className={styles.generalItem}><b>Total products: </b>{totalAmount}</span> 
            <span className={styles.generalItem}><b>Total sum: </b>{totalSum} $</span>
            <span className={styles.generalItem}><b>Average price: </b>{averagePrice} $</span>
            <Button className={styles.delete} variant="contained" onClick={() => {dispatch(deleteAllProducts({products:[]}))} }>Delete All</Button>
        </div>
    )
}