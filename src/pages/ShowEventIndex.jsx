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

export class ShowEventIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let rows = [];
        _.each(this.props.rows, row => {
            let begin = new Date(row.begin),
                end = new Date(row.end);
            rows.push({
                title: row.title,
                type: row.type,
                beginEnd: `${begin.getDate()}.${begin.getMonth()}.${begin.getFullYear()} ${begin.getHours()}:${begin.getMinutes()} -- ${end.getDate()}.${end.getMonth()}.${end.getFullYear()} ${end.getHours()}:${end.getMinutes()} `,
                detail: <a href={routeGenerator(this.props.routeTemplate, {eventId: row.id})}>Otevřít</a>
            });
        });
        let columns = [
            {key: 'title', name: 'Název'},
            {key: 'type', name: 'Typ'},
            {key: 'beginEnd', name: 'Od-Do'},
            {key: 'detail', name: ''},
        ];
        return <Grid columns={columns} rows={rows}/>;
    }
}


export default connect(mapStateToProps)(ShowEventIndex);