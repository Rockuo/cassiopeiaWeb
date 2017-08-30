/**
 * Created by rockuo on 29.5.17.
 */

import React from 'react';
import { connect } from 'react-redux';
import {grid} from '../components/MiniItems.jsx';

const mapStateToProps = (state) => {
    return state.pageData;
};


const ShowInfoShow = ({info}) => {
    return <div>
        <h2 className="margin-bottom-10">{info.title}</h2>
        <div dangerouslySetInnerHTML={{__html: info.text}}/>
    </div>;
};

export default connect(mapStateToProps)(ShowInfoShow);
