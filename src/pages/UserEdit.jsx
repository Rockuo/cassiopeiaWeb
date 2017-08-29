/**
 * Created by rockuo on 29.5.17.
 */

import React from 'react';
import {connect} from 'react-redux';
import {Form, Text, Select} from 'react-form';
import _ from 'lodash';

const mapStateToProps = (state) => {
    return state.pageData;
};


const UserEdit = (props) => {
    let roles = _.map(props.roles, role => {
        return {label: role, value: 7};
    });
    return <Form
        defaultValues={{
            firstName: props.user.firstName,
            lastName: props.user.lastName,
            username: props.user.username,
            roles: props.user.roles,
        }}
    >
        {({values}) => {
            let options = _.map(props.roles, role => <option key={role} value={role}>{role}</option>);
            return <form action={props.action+props.user.id} method="POST" onSubmit={false}>
                <h6>Uživatelské jméno:</h6>
                <Text field='username' name="username"/>
                <h6>Heslo:</h6>
                <Text field='password' name="password"/>
                <h6>Křesní jméno:</h6>
                <Text field='firstName' name="firstName"/>
                <h6>Příjmení:</h6>
                <Text field='lastName' name="lastName"/>
                <h6>Práva:</h6>
                <select name="roles">
                    {options}
                </select><br/>
                <button type="submit">Uložit</button>
            </form>
                ;
        }}
    </Form>;
};

export default connect(mapStateToProps)(UserEdit);
