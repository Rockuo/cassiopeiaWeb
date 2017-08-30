/**
 * Created by rockuo on 29.5.17.
 */

import React from 'react';
import { connect } from 'react-redux';
import {routeGenerator} from '../../Libraries/tools';
import Grid from '../components/Grid.jsx';
import _ from 'lodash';

const mapStateToProps = (state) => {
    return state.pageData;
};


const ContactIndex = (props) => {
    let rows = [];
    _.each(props.rows, row => {
        rows.push({
            id: row.id,
            content: row.contactAttributes.substring(0,40) + '...',
            detail: <a href={routeGenerator(props.routeTemplate, {contactId: row.id})}>Editovat</a>
        });
    });
    console.log(rows);
    let columns = [
        {key: 'id', name: 'Id'},
        {key: 'content', name: 'obsah'},
        {key: 'detail', name: ''},
    ];
    return <div>
        <a className="templatemo-blue-button" href={props.newContact}>Vytvořit</a>
        <div style={{paddingTop: '10px'}}><Grid columns={columns} rows={rows}/></div>
    </div>;
};

export default connect(mapStateToProps)(ContactIndex);
