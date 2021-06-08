import './Header.module.css';
import mealsImage from '../../assests/meals.jpg';
import {Fragment} from 'react';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
const Header=props=>{
       return <Fragment>
           <header className={classes.header}>
               <h1>Meals</h1>
               <HeaderCartButton onClick={props.onShowCart}/>
           </header>
           <div className={classes['main-image']}>
               <img src={mealsImage} alt='table of food'/>
           </div>
       </Fragment>
};

export default Header;