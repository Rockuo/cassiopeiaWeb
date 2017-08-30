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


const EventIndex = (props) => {
    let rows = [];
    _.each(props.rows, row => {
        rows.push({
            title: row.title,
            type: row.type,
            detail: <a href={routeGenerator(props.routeTemplate, {eventId: row.id})}>Editovat</a>
        });
    });
    let columns = [
        {key: 'title', name: 'Název'},
        {key: 'type', name: 'Typ'},
        {key: 'detail', name: ''},
    ];
    return <div>
        <a className="templatemo-blue-button" href={props.newEvent}>Vytvořit</a>
        <div style={{paddingTop: '10px'}}><Grid columns={columns} rows={rows}/></div>
    </div>;
};

export default connect(mapStateToProps)(EventIndex);
