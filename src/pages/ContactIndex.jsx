/**
 * Created by rockuo on 29.5.17.
 */

import React from 'react';
import { connect } from 'react-redux';
import {grid} from '../components/MiniItems.jsx';

const mapStateToProps = (state) => {
    return state.pageData;
};


const ContactIndex = (props) => {
    return <div>{grid(props.rows || [])}</div>;
};

export default connect(mapStateToProps)(ContactIndex);
