import { Fragment } from 'react';
import React from 'react';
import classes from './Modal.module.css';
import ReactDOM from 'react-dom';
const Backdrop =props =>{
    return <div className={classes.backdrop} onClick={props.onUse}>
    </div>
};
const ModalOverlay=props=>{
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
};
const portalElement=document.getElementById('overlays');
const Modal=props=>{
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onUse={props.onUse}/>,portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}
        </Fragment>
    );
}
export default Modal;