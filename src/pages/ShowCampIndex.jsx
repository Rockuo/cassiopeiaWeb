/**
 * Created by rockuo on 29.5.17.
 */

import React from 'react';
import { connect } from 'react-redux';
import {routeGenerator} from '../../Libraries/tools';
import _ from 'lodash';
import {ShowInfoIndex} from './ShowInfoIndex.jsx';
import {ShowEventIndex} from './ShowEventIndex.jsx';

const mapStateToProps = (state) => {
    return state.pageData;
};

class ShowCampIndex extends  React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <div className="col-lg-4 col-md-4">
                <h3>Informace o táborech</h3><br/>
                <ShowInfoIndex rows={this.props.infos.rows} routeTemplate={this.props.infos.routeTemplate}/>
            </div>
            <div className="col-lg-8 col-md-8">
                <h3>Tábory a s nimi spojené akce</h3><br/>
                <ShowEventIndex rows={this.props.events.rows} routeTemplate={this.props.events.routeTemplate}/>
            </div>
        </div>;
    }
}


export default connect(mapStateToProps)(ShowCampIndex);