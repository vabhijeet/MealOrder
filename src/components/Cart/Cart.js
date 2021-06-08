import { useContext } from 'react';
import CartContex from '../../store/cart-contex';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';
const Cart=(props)=>{
        const cartItemRemoveHandler=(id)=>{
            cartCtx.removeItem(id);
        };
        const cartItemAddHandler=(item)=>{
            cartCtx.addItem({...item, amount:1});
        };
        const cartCtx=useContext(CartContex);
        const totalAmount=`$${cartCtx.totalAmount.toFixed(2)}`;
        const hasItems=cartCtx.items.length > 0;
        const cartItems =(
            <ul className={classes['cart-items']}>
                {cartCtx.items.map((item)=>(
                    <CartItem 
                    key={item.key}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onRemove={cartItemRemoveHandler.bind(null,item.id)}
                    onAdd={cartItemAddHandler.bind(null,item)}
                    />
                ))};

            </ul>

        );
    

    return (
        <Modal onUse={props.onUse}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>

            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onUse}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}

            </div>
        </Modal>
    );
}
export default Cart;