/**
 * Created by rockuo on 29.5.17.
 */

import React from 'react';
import {connect} from 'react-redux';

const SignIn = () =>
    <div>
        <h2>Sign Up</h2>
        <form method="post" action="/signin">
            <input type="text" name="username" placeholder="Username"/>
            <input type="password" name="password" placeholder="password"/>
            <button>Sign In</button>
        </form>
    </div>;


export default connect()(SignIn);

