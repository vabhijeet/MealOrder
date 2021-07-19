import React from 'react';
import { GoogleOutlined ,FacebookOutlined } from '@ant-design/icons';
import 'firebase/auth';
import { auth } from './firebase';
import firebase from 'firebase/app';

const Login=()=>{
    return <div id="login-page">
        <div id="login-card">
            <h2>Welocme to MyChat</h2>
            <div 
            className="login-button google"
            onClick={()=>auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
            >
                <GoogleOutlined />Sign in using Google
            </div>
            <br/><br/>
            <div 
            className="login-button facebook"
            onClick={()=>auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}
            >
                <FacebookOutlined />Sign in using Facebook
            </div>
        </div>
    </div>
}

export default Login;