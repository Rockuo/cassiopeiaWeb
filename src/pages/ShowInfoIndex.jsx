/**
 * Created by rockuo on 29.5.17.
 */

import React from 'react';
import {connect} from 'react-redux';
import {routeGenerator} from '../../Libraries/tools';
import _ from 'lodash';
import Grid from '../components/Grid.jsx';

const mapStateToProps = (state) => {
    return state.pageData;
};

export class ShowInfoIndex extends React.Component {
    render() {
        let rows = [];
        _.each(this.props.rows, row => {
            rows.push({
                title: row.title,
                type: row.type,
                detail: <a href={routeGenerator(this.props.routeTemplate, {infoId: row.id})}>Otevřít</a>
            });
        });
        let columns = [
            {key: 'title', name: 'Název'},
            {key: 'type', name: 'Typ'},
            {key: 'detail', name: ''},
        ];
        return <Grid columns={columns} rows={rows}/>;
    }
}


export default connect(mapStateToProps)(ShowInfoIndex);