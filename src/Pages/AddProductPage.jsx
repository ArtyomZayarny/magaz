import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextareaAutosize } from '@material-ui/core';
import Catalog from '../components/Catalog/Catalog';
import { useDispatch, useSelector } from 'react-redux';
import {addProduct} from '../redux/store';
import shortid from 'shortid';
import './AddProductPage.scss'

const useStyles = makeStyles({
    form: {
        maxWidth:250,
        display:"flex",
        flexDirection:"column"
      
    },
    input: {
        marginBottom:20
    },
    textArea: {
        minHeight:60,
        marginBottom:20,
        padding:15
    }
    
  });

export default function AddProductPage({addProductLS, ...props}) {
    const classes = useStyles();
    const products =  useSelector(state => state.products);
    const dispatch = useDispatch();
    

    const [product,setProduct] = useState({
        name:'',
        description:'',
        price:'',
    })

    const handleChange = (name, value) => {
        setProduct({...product, [name]:value})
    }

    const handleSubmit = (e) => {
        product.id = shortid.generate();
        e.preventDefault();
        //Write to LS
        addProductLS(product);

        //Update store
        let updatedProductList = [...products];
        updatedProductList.push(product);
        dispatch(addProduct({products:updatedProductList}));
        //Clear form
        setProduct({...product, name:'', description:''})
    }
    
    return (
        <div className="container">
            <div className="add wrapper">
                <div className="add">
                <h3>Add  New Product</h3>
          <form 
                autoComplete="off" 
                className={classes.form}
                onSubmit={ (e) => {handleSubmit(e)}}
                >
                <TextField 
                    className={classes.input}
                    name="name" 
                    label="Name" 
                    onChange={(e) =>{handleChange(e.target.name,e.target.value)}} 
                    value={product.name}
                    variant="outlined"
                    required={true}
                />
                <TextField 
                    className={classes.input}
                    name="price"
                    type="number" 
                    label="Price" 
                    onChange={(e) =>{handleChange(e.target.name,e.target.value)}} 
                    value={product.price}
                    variant="outlined"
                    required={true}
                />
                <TextareaAutosize 
                    className={classes.textArea}
                    name="description" 
                    label="Description"  
                    variant="outlined"
                    onChange={(e) =>{handleChange(e.target.name,e.target.value)}} 
                    value={product.description}
                    rowsMax={4}
                    placeholder="Description"
                    aria-label="maximum height"
                    required={true}
                />

                <Button 
                    variant="contained" 
                    color="primary"
                    type="submit"
                    >Add Product</Button>
            </form>
                </div>
                <div className="catalog">
                    <Catalog />
                </div>
            </div>
       
        </div>
    )
}