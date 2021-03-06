/**
 * Created by rockuo on 29.5.17.
 */

import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import {ShowInfoIndex} from './ShowInfoIndex.jsx';
import {ShowEventIndex} from './ShowEventIndex.jsx';

const mapStateToProps = (state) => {
    return state.pageData;
};

export class Home extends  React.Component {
    constructor(props) {
        super(props);
        console.log('1');
    }

    render() {
        return <div>
            <div className="col-lg-4 col-md-4">
                <h3>Nejnovější Informace</h3><br/>
                <ShowInfoIndex rows={this.props.infos.rows} routeTemplate={this.props.infos.routeTemplate}/>
            </div>
            <div className="col-lg-8 col-md-8">
                <h3>Nejnovější Akce</h3><br/>
                <ShowEventIndex rows={this.props.events.rows} routeTemplate={this.props.events.routeTemplate}/>
            </div>
        </div>;
    }
}


export default connect(mapStateToProps)(Home);