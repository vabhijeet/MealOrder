import { useContext } from 'react';
import CartContex from '../../../store/cart-contex';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = (props)=>{
    const cartCtx=useContext(CartContex);
    const price=`$${props.price.toFixed(2)}`;
    const addToCartHandler= amount =>{
        cartCtx.addItem({
            id:props.id,
            name:props.name,
            price:props.price,
            amount:amount
        })
    };
    return <li className={classes.meal}>
         <div>
             <h3>{props.name}</h3>
             <div className={classes.discription}>{props.discription}</div>
             <div className={classes.price}>{price}</div>
         </div>
         <div>
             <MealItemForm onAddToCart={addToCartHandler}></MealItemForm>
         </div>
         
    </li>
};
export default MealItem;