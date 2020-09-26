import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextareaAutosize } from '@material-ui/core';

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

export default function AddProductPage() {
    const classes = useStyles();
    const [product,setProduct] = useState({
        name:'',
        description:'',
    })

    const handleChange = (name, value) => {
        setProduct({...product, [name]:value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
       //localStorage
    }
    

    return (
        <div className="container">
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
    )
}