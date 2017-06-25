/**
 * Created by rockuo on 29.5.17.
 */

import React from 'react';
import {connect} from 'react-redux';

const SignUp = () =>
    <div>
        <h2>Sign Up</h2>
        <form method="post" action="/signup">
            <input type="text" name="username" placeholder="Username"/>
            <input type="text" name="firstName" placeholder="First name"/>
            <input type="text" name="lastName" placeholder="Last name"/>
            <input type="password" name="password" placeholder="password"/>
            <button>Sign Up</button>
        </form>
    </div>;


export default connect()(SignUp);

