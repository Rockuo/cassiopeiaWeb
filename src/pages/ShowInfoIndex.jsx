/**
 * Created by rockuo on 29.5.17.
 */

import React from 'react';
import { connect } from 'react-redux';
import {routeGenerator} from '../../Libraries/tools';
import _ from 'lodash';

const mapStateToProps = (state) => {
    return state.pageData;
};

class ShowInfoIndex extends  React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        let grid = <div/>;
        if (global.isFrontend) {
            let rows = [];
            _.each(this.props.rows, row => {
                let date = new Date(row.createdAt);
                rows.push({
                    title: row.title,
                    type: row.type,
                    createdAt: `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}` ,
                    detail: <a href={routeGenerator(this.props.routeTemplate, {infoId: row.id})}>Otevřít</a>
                });
            });
            let rowGetter = (i) => rows[i];
            const ReactDataGrid = require('react-data-grid');
            grid = <ReactDataGrid
                columns={[
                    {key: 'title', name: 'Název'},
                    {key: 'type', name: 'Typ'},
                    {key: 'createdAt', name: 'Vytvořeno'},
                    {key: 'detail', name: ''},
                ]}
                rowGetter={rowGetter}
                rowsCount={rows.length}
            />;
        }
        return <div width="80%">{grid}</div>;
    }
}


export default connect(mapStateToProps)(ShowInfoIndex);