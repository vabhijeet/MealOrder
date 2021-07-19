import React from 'react';
import { useHistory } from 'react-router-dom';
import './Header.module.css';
import mealsImage from '../../assests/meals.jpg';
import {Fragment} from 'react';
import { auth } from '../../firebase';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
const Header=props=>{
    const history = useHistory()
    async function handleLogout() {
        await auth.signOut()
        history.push("/")
      }
    
       return <Fragment>
           <header className={classes.header}>
               <h1>Foody Order</h1>
               <HeaderCartButton onClick={props.onShowCart}/>
               <div onClick={handleLogout} className='logout-tab'>
                    Logout
                </div>
           </header>
           <div className={classes['main-image']}>
               <img src={mealsImage} alt='table of food'/>
           </div>
       </Fragment>
};

export default Header;