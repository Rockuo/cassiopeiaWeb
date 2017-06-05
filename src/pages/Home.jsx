/**
 * Created by rockuo on 29.5.17.
 */

import React from 'react';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return {title: 'pepa'};
};

const Home = (props) => {
    return <div>Hello {props.title}</div>;
};

export default connect(mapStateToProps)(Home);
